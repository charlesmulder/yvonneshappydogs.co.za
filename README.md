# yvonneshappydogs.co.za

```bash
npm install
```

Watch and build `src/index.js` to `dist/main.js`

```bash
npx webpack -w --mode=development --output-path=$(pwd)/_site/
```

Watch and build `src/*.scss` to `_site/*.css`

```bash
npx sass --watch src/scss:_site/css
```

Development servers

```
npx @11ty/eleventy --input=src --serve
```

## Deploy

```sh
npx webpack --mode=production --output-path=$(pwd)/_site/
npx sass src/scss:_site/css --style compressed
npx @11ty/eleventy --input=src
git subtree push --prefix _site origin gh-pages
git push origin `git subtree split --prefix _site master`:gh-pages --force
```

[https://charlesmulder.github.io/yvonneshappydogs.co.za/](https://charlesmulder.github.io/yvonneshappydogs.co.za/)
