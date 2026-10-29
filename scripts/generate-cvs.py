"""Generate CV PDFs from the website's shared factual records.
Requires reportlab==5.1.0; run from repo root. See scripts/README.md.
"""
from pathlib import Path
from xml.sax.saxutils import escape
import json, subprocess, shutil
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether
from reportlab.lib.styles import StyleSheet1, ParagraphStyle
from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.enums import TA_LEFT

ROOT = Path(__file__).resolve().parents[1]
data = json.loads(subprocess.check_output(['node','scripts/export-profile.mjs'],cwd=ROOT,text=True))
fontdir=Path('/usr/share/fonts/truetype/dejavu')
for suffix,name in [('', 'Regular'),('-Bold','Bold'),('-Oblique','Italic')]:
    pdfmetrics.registerFont(TTFont('CV'+name,str(fontdir/f'DejaVuSans{suffix}.ttf')))
pdfmetrics.registerFontFamily('CVRegular',normal='CVRegular',bold='CVBold',italic='CVItalic',boldItalic='CVBold')
styles=StyleSheet1()
for name,size,leading,color in [('Body',9,12.3,'#334155'),('Small',8,10.7,'#475569'),('Section',12,16,'#0f766e'),('Name',24,28,'#0f172a'),('Title',10,13.5,'#0f172a')]:
    styles.add(ParagraphStyle(name,fontName='CVRegular' if name in ['Body','Small'] else 'CVBold',fontSize=size,leading=leading,textColor=colors.HexColor(color),spaceAfter=5,keepWithNext=name in ['Section','Name','Title']))
styles['Section'].spaceBefore=12

def clean(text): return escape(str(text)).replace('–','-').replace('—','-').replace('’',"'")
def p(text,style='Body'): return Paragraph(text,styles[style])
def link(url,label): return f'<link href="{escape(url, {chr(34): "&quot;"})}" color="#0f766e">{clean(label)}</link>'
def header(subtitle):
    return [p('M M Imran <font size="13">(Imran Pollob)</font>','Name'),p(clean(subtitle),'Title'),p('Detroit, MI · '+link('mailto:mmimran@wayne.edu','mmimran@wayne.edu')+' · '+link('https://www.imranpollob.com/','imranpollob.com')+' · '+link('https://github.com/imranpollob','GitHub'),'Small'),Spacer(1,5)]
def heading(text):return p(clean(text),'Section')
def pub(item):
    authors=clean(', '.join(item['authors'])).replace('M M Imran','<b>M M Imran</b>')
    status=' <b>Accepted.</b>' if item['status']=='accepted' else ''
    paper=next((x['href'] for x in item.get('links',[]) if x['href'].endswith('.pdf')),None)
    links=link('https://www.imranpollob.com'+paper,'Paper') if paper else ''
    if item.get('doi'):links+=' · '+link('https://doi.org/'+item['doi'],'DOI')
    elif not paper and item.get('links'):links=link(item['links'][0]['href'],'Publication record')
    if item['group'] == 'earlier':
        return KeepTogether([p(clean(item['title']),'Title'), p(authors+'. '+clean(item['venue'])+', '+str(item['year'])+((', pp. '+clean(item['pages'])) if item.get('pages') else '')+'. '+links,'Small'),Spacer(1,3)])
    return KeepTogether([p(clean(item['title']),'Title'),p(authors,'Small'),p(clean(item['venue'])+', '+str(item['year'])+((', pp. '+clean(item['pages'])) if item.get('pages') else '')+'.'+status,'Small'),p(links,'Small'),Spacer(1,4)])
def footer(canvas,doc):
    canvas.setStrokeColor(colors.HexColor('#cbd5e1'));canvas.line(46,38,566,38)
    canvas.setFont('CVRegular',7.5);canvas.setFillColor(colors.HexColor('#64748b'))
    canvas.drawString(46,26,'M M Imran | imranpollob.com | Updated October 29, 2026')
    canvas.drawRightString(566,26,str(doc.page))
def build(name,story):
    target=ROOT/'output/pdf'/name;target.parent.mkdir(parents=True,exist_ok=True)
    SimpleDocTemplate(str(target),pagesize=(612,792),leftMargin=46,rightMargin=46,topMargin=40,bottomMargin=49,title=('Academic CV' if name.startswith('academic') else 'Industry Research Resume')+' - M M Imran',author='M M Imran',pageCompression=1).build(story,onFirstPage=footer,onLaterPages=footer)
    shutil.copy2(target,ROOT/'public'/name)

story=header('Blockchain Security & Privacy Researcher')
story += [heading('Education')]
for degree in data['education']:
    story += [p('<b>'+clean(degree['degree']+', '+degree['field'])+'</b> · '+clean(degree['institution']),'Body'),p(clean(degree['period']),'Small')]
story += [heading('Research Experience'),p('<b>Ph.D. Researcher · Wayne State University · 2021-Present</b>'),p('Research on Ethereum account authorization, privacy-preserving gas sponsorship, ZK verifier analysis, and collaborative misbehavior detection. Methods include program analysis, adversarial evaluation, and protocol implementation.'),heading('Selected Publications')]
for item in data['publications']:
    if item['group']=='selected':story.append(pub(item))
story += [PageBreak(),heading('Earlier Publications')]
for item in data['publications']:
    if item['group']=='earlier':story.append(pub(item))
story += [heading('Teaching & Mentoring'),p('<b>Graduate Teaching Assistant · Wayne State University · Aug 2021-Present</b>')]
for course in data['teaching']['courses']:
    story.append(p('<b>'+clean((course.get('code','')+' '+course['name']).strip())+':</b> '+clean(course['detail'])+'.','Small'))
a=data['teachingAward'];story += [heading('Teaching Award'),p('<b>'+clean(a['title'])+'</b> · '+clean(a['date']),'Body'),p(clean(a['issuer'])+'. '+clean(a['description']),'Small'),heading('Industry Experience')]
for role in data['industryExperience']:
    story.append(p('<b>'+clean(role['organization'])+'</b> · '+clean(role['role'])+' · '+clean(role['period']),'Small'))
build('academic-cv.pdf',story)

story=header('Industry Research Resume | Blockchain Security')
story += [p('Ph.D. candidate at Wayne State University, expected '+clean(data['profile']['EXPECTED_GRADUATION'])+'. Research in Ethereum security, privacy, and zero-knowledge systems, supported by nearly five years of professional software engineering. Authorized to work in the U.S. as a permanent resident.','Body'),heading('Selected Research')]
briefs={
'authguard-7702': 'First author. Evaluates pre-authorization bytecode screening under an execution-audited adaptive adversary. Reported paired attack success: 0.167 versus 0.537 for logistic regression under the primary evaluated adversary.',
'privgas': 'First author. Privacy-preserving gas sponsorship with shielded credits and abuse-resistant admission. Paper reports 284,527-gas peak Spend validation in local Foundry simulation; public artifact maps claims to tests.',
'zkscan': 'Coauthor. Static analysis of on-chain ZK verifier contracts. Paper reports 94% recall and 77% precision on its audit-derived dataset; findings concern historical versions, not claimed active zero-days.',
'secure-bsm': 'First author. Collaborative vehicular misbehavior detection and rate limiting, evaluated with SUMO and Hyperledger Besu.'}
for project in data['projects']:
    paper=next(paper for paper in data['publications'] if paper['slug']==project['publication'])
    story.append(KeepTogether([p(clean(project['title'])+' · '+clean(paper['shortVenue'])+' '+str(paper['year'])+(' (accepted)' if paper['status']=='accepted' else ''),'Title'),p(clean(briefs[project['slug']]),'Small'),p(link('https://www.imranpollob.com/research/'+project['slug']+'/', 'Paper, evaluation & resources'),'Small')]))
story += [heading('Industry Experience')]
for role in data['industryExperience']:
    story += [p(clean(role['organization'])+' · '+clean(role['role'])+' · '+clean(role['period']),'Title'),p(clean(role['summary']),'Small')]
story += [heading('Technical Skills'),p('Solidity, Python, JavaScript/TypeScript, PHP, C++, Java, SQL. Foundry, smart-contract testing, PyTorch, TensorFlow, React, Vue.js, Laravel, Node.js, AWS, Docker, CI/CD.','Small'),heading('Education & Teaching'),p('<b>Ph.D., Computer Science</b> · Wayne State University · Expected '+clean(data['profile']['EXPECTED_GRADUATION'])+'. <b>M.Sc., IT</b> · Jahangirnagar University · 2017. <b>B.Sc., IT</b> · Jahangirnagar University · 2015.','Small'),p('Graduate Teaching Assistant, 2021-Present. '+clean(a['title'])+', '+a['year']+'; departmental recognition highlighting CSC 3100 support.','Small')]
build('industry-research-resume.pdf',story)
shutil.copy2(ROOT/'output/pdf/industry-research-resume.pdf', ROOT/'public/resume.pdf')
print('Generated output/pdf/academic-cv.pdf and output/pdf/industry-research-resume.pdf; copied to public/.')
