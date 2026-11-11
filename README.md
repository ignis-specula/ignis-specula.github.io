# ignis-specula.eu

Static one-page site, no build step, no external requests.

```
index.html        the page
privacy.html      privacy notice (fill in [POSTAL ADDRESS])
assets/hero.jpg   MTG-FCI image (credit: contains modified EUMETSAT Meteosat data)
css/fonts.css     @font-face rules for IBM Plex (self-hosted)
fonts/            IBM Plex .woff2 files (SIL OFL 1.1) - add before publishing
.nojekyll         serve files as-is
```

## Fonts
Download IBM Plex from https://github.com/IBM/plex/releases (Sans and Serif, web/woff2)
and copy these files into `fonts/`:

IBMPlexSans-Regular.woff2, IBMPlexSans-Italic.woff2, IBMPlexSans-Medium.woff2,
IBMPlexSans-SemiBold.woff2, IBMPlexSans-Bold.woff2,
IBMPlexSerif-Medium.woff2, IBMPlexSerif-SemiBold.woff2

Also copy the licence file (OFL.txt) into `fonts/`.
Until the files are there the page falls back to Arial / Georgia.

## Publish on GitHub Pages
1. Create a repository (e.g. `ignis-specula.eu`) and push these files to the `main` branch.
2. Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
   The site is served at https://ignis-specula.github.io/ for now.
3. When the domain is ready: add a `CNAME` file containing `ignis-specula.eu`, set Settings > Pages > Custom domain, and replace `https://ignis-specula.github.io/` with `https://ignis-specula.eu/` in the canonical / og: tags of index.html and privacy.html.
4. At your domain registrar, add DNS records:
   - A records for `ignis-specula.eu`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - CNAME record for `www`: `<your-github-username>.github.io`
5. Once the certificate is issued, tick "Enforce HTTPS".
