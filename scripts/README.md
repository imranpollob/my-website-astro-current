# Portfolio documents and verification

The CV PDFs draw identity, publication, teaching, award, and employment facts from the same TypeScript records as the website. `public/resume.pdf` is updated as an alias of the industry résumé so old links remain accurate; the site links to the two clearly named documents.

## Regenerate the documents

Requires Node dependencies (`npm ci`), Python 3, DejaVu Sans fonts, and ReportLab 5.1.0.

```sh
python3 -m venv .venv-cv
.venv-cv/bin/pip install -r scripts/requirements-cv.txt
.venv-cv/bin/python scripts/generate-cvs.py
```

Outputs are written to `output/pdf/` and copied to `public/`. The generator runs `export-profile.mjs` to load shared data. Narrative résumé summaries are maintained in the generator; update them when the underlying research changes. The document update date is explicit in the footer and must be revised when issuing a new version.

Render every generated page before publishing:

```sh
mkdir -p /tmp/portfolio-cv-check
pdftoppm -scale-to 1400 -png output/pdf/academic-cv.pdf /tmp/portfolio-cv-check/academic
pdftoppm -scale-to 1400 -png output/pdf/industry-research-resume.pdf /tmp/portfolio-cv-check/industry
```

These PDFs contain selectable text and clickable links, but are not tagged PDFs and have not been certified for PDF accessibility. The website provides HTML versions of the core education, research, and teaching content.

## Build and check

```sh
npm run build
python3 scripts/check-site.py
```

The checker validates generated internal links and fragments, duplicate IDs, research status rendering, document presence, and metadata. It does not reproduce research experiments or substitute for visual and keyboard review.

## Social preview

The new SVG source is `public/research-social.svg`; run `node scripts/generate-social.mjs` after editing it to regenerate the raster image used by Open Graph metadata. Keep the graduation date consistent with `PROFILE.EXPECTED_GRADUATION`. Existing favicon/logo assets are retained.
