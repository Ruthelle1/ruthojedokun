# Ruth Ojedokun — portfolio

A one-page portfolio site for Ruth Ojedokun, a content creator, social media professional and spoken word poet in Lagos, Nigeria.

Plain HTML, CSS and a small JavaScript file. There is no build step, no framework and no external requests (fonts are included), so it works on GitHub Pages as it is.

## Publish on GitHub Pages

1. On GitHub, create a new **public** repository.
   - Name it `USERNAME.github.io` to get the address `https://USERNAME.github.io`.
   - Any other name works too and gives `https://USERNAME.github.io/REPO-NAME/`.
2. Upload everything in this folder to the repository, keeping the folder structure. `index.html` must sit at the top level (use **Add file → Upload files** and drag the contents in, not the folder itself).
3. Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose the `main` branch and the `/ (root)` folder, then click **Save**.
4. Wait a minute or two. The live address appears at the top of the Pages settings.

Contact details (email and phone number) become public once the site is live.

## What's in the folder

```
index.html              all page content
assets/css/styles.css   design (colours are variables at the top of the file)
assets/js/main.js       header, mobile menu and image viewer
assets/img/             photos, campaign images, Instagram screenshots
assets/fonts/           Bricolage Grotesque and Newsreader (SIL Open Font License)
.nojekyll               tells GitHub Pages to serve the files as they are
```

## Editing

- **Text, links, contact details:** edit `index.html`. Sections are marked with comments (`<!-- Hero -->`, `<!-- Experience -->` and so on).
- **Colours:** change the variables in `:root` at the top of `assets/css/styles.css`.
- **Swap an image:** replace the file in `assets/img/` and keep the same file name.
  - `pristine-her-comic.jpg` currently shows the first nine panels of the comic. The original screenshot had Instagram buttons covering the last row, so replace it with a clean export if one is available.
- **Link preview image:** once the site is live, set `og:image` in `index.html` to the full address, for example `https://USERNAME.github.io/assets/img/og-image.jpg`. Social apps need the full address to show a preview.
- **Instagram numbers:** the Results section shows figures from a 30-day Instagram insights screenshot (15 October – 13 November 2026). Update the figures and screenshots when there is a newer period to show.
