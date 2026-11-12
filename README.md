# ignis-specula.com

Static one-page site, no build step, no external requests.

```
index.html        the page
privacy.html      privacy notice (fill in [POSTAL ADDRESS])
assets/hero.jpg   MTG-FCI image (credit: contains modified EUMETSAT Meteosat data)
css/fonts.css     @font-face rules for IBM Plex (self-hosted)
fonts/            IBM Plex .woff2 files + OFL.txt (SIL OFL 1.1)
.nojekyll         serve files as-is
CNAME             custom domain for GitHub Pages
```

## Fonts
IBM Plex, self-hosted in `fonts/` (SIL Open Font License 1.1, licence in `fonts/OFL.txt`).
Source: https://github.com/IBM/plex/releases, `@ibm/plex-sans@1.1.0` and `@ibm/plex-serif@2.0.0`,
files from `fonts/complete/woff2/`:

IBMPlexSans-Regular.woff2, IBMPlexSans-Italic.woff2, IBMPlexSans-Medium.woff2,
IBMPlexSans-SemiBold.woff2, IBMPlexSans-Bold.woff2,
IBMPlexSerif-Medium.woff2, IBMPlexSerif-SemiBold.woff2

## Publish on GitHub Pages
Repository `ignis-specula/ignis-specula.github.io`, served from branch `main`, folder `/ (root)`.
Custom domain: https://ignis-specula.com/ (`CNAME` file; canonical / og: tags in index.html and privacy.html use it).

1. Settings > Pages > Custom domain: `ignis-specula.com`.
2. At the domain registrar, add DNS records:
   - A records for `ignis-specula.com`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - CNAME record for `www`: `ignis-specula.github.io`
3. Once the certificate is issued, tick "Enforce HTTPS".
