"""Check built HTML destinations and critical portfolio content, using the Python standard library."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json, re

root = Path(__file__).resolve().parents[1] / 'dist'
class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(); self.path=path; self.ids=[]; self.links=[]; self.meta={}; self.h1=0; self.text=path.read_text(); self.feed(self.text)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if a.get('id'): self.ids.append(a['id'])
        if tag=='a' and a.get('href'): self.links.append(a['href'])
        if tag=='meta': self.meta[a.get('name',a.get('property',''))]=a.get('content','')
        if tag=='h1':self.h1+=1
pages={p:Page(p) for p in root.rglob('*.html')}
errors=[]; count=0
for path,page in pages.items():
    if len(set(page.ids)) != len(page.ids): errors.append(f'Duplicate IDs: {path}')
    if path.relative_to(root).as_posix() != 'search/index.html':
        if page.h1!=1: errors.append(f'Expected one h1: {path}')
        for key in ['description','og:title','og:description','og:image']:
            if not page.meta.get(key):errors.append(f'Missing {key}: {path}')
    for source in re.findall(r'<script\b[^>]*type="application/ld\+json"[^>]*>(.*?)</script>',page.text,re.S):
        try:
            schema=json.loads(source)
            if schema.get('@type')=='Person' and 'Candidate' not in schema.get('jobTitle',''):errors.append(f'Outdated Person status: {path}')
        except json.JSONDecodeError:errors.append(f'Invalid JSON-LD: {path}')
    for href in page.links:
        url=urlsplit(href)
        if url.scheme or url.netloc:continue
        target=(root / unquote(url.path).lstrip('/')) if url.path.startswith('/') else (path.parent / unquote(url.path)) if url.path else path
        if target.is_dir():target=target/'index.html'
        elif not target.exists() and not target.suffix:target=target/'index.html'
        count+=1
        if not target.is_file():errors.append(f'Missing target: {path.relative_to(root)} -> {href}')
        elif url.fragment and target.suffix=='.html' and unquote(url.fragment) not in pages[target].ids:errors.append(f'Missing fragment: {path.relative_to(root)} -> {href}')
research=pages[root/'research/index.html']
for anchor in ['eip-7702','privgas','secure-bsm','zk-security','publications']:
    if anchor not in research.ids:errors.append(f'Missing legacy anchor: {anchor}')
for slug in ['authguard-7702','zkscan']:
    page=pages[root/f'research/{slug}/index.html']
    if 'Accepted ·' not in page.text or 'Presented at the conference.' in page.text:errors.append(f'Incorrect acceptance/presentation status: {slug}')
for document in ['academic-cv.pdf','industry-research-resume.pdf','resume.pdf','papers/authguard-7702.pdf','papers/privgas.pdf','papers/zkscan.pdf','papers/secure-bsm.pdf']:
    target=root/document
    if not target.exists() or not target.read_bytes().startswith(b'%PDF-'):errors.append(f'Missing or invalid PDF: {document}')
if 'Summer 2027' not in pages[root/'index.html'].text:errors.append('Graduation date missing')
print(json.dumps({'pages':len(pages),'internal_links_checked':count,'errors':errors},indent=2))
raise SystemExit(bool(errors))
