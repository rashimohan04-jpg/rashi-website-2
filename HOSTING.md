# Hosting Rashi Website

## Easiest option: Vercel

1. Create a GitHub repository and upload these project files.
2. Go to https://vercel.com/new.
3. Import the GitHub repository.
4. Vercel should detect the included settings:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

## Netlify

1. Create a GitHub repository and upload these project files.
2. Go to https://app.netlify.com/start.
3. Import the GitHub repository.
4. Netlify should detect the included settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `22`

## GitHub Pages

1. Create a GitHub repository and upload these project files.
2. In the repository, go to Settings > Pages.
3. Set Source to GitHub Actions.
4. The included workflow will publish the site after each push to `main`.

## Drag-and-drop hosting

Drag-and-drop hosting works only after the site has been built. Run:

```bash
npm install
npm run build
```

Then upload the generated `dist` folder.
