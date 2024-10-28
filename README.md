# Open Google Maps in Search Results – Browser Extension

> An extension to open Google Maps in Google Search Results. Download now on the [Chrome Web Store](https://chromewebstore.google.com/detail/google-maps-buttons-in-de/jjglhoddoklgopkbjlkpibaglohccfbp)!

## Getting Started

> [!IMPORTANT]
>
> - Setup Node.js v20 (recommended via [nvm](https://github.com/nvm-sh/nvm))
> - Install [Bun](https://bun.sh/)

```bash
# Install dependencies
bun install

# Copy & fill environments (if not existing)
cp .env.example .env
```

## Available Scripts

In the project directory, you can run the following scripts:

### bun run dev

**Development Mode**: This command runs your extension in development mode. It will launch a new browser instance with your extension loaded. The page will automatically reload whenever you make changes to your code, allowing for a smooth development experience.

```bash
bun run dev
```

### bun run start

**Production Preview**: This command runs your extension in production mode. It will launch a new browser instance with your extension loaded, simulating the environment and behavior of your extension as it will appear once published.

```bash
bun run start
```

### bun run build

**Build for Production**: This command builds your extension for production. It optimizes and bundles your extension, preparing it for deployment to the target browser's store.

```bash
bun run build
```

## Tips

### Change locale of Google Chrome

```bash
defaults write com.google.Chrome AppleLanguages '(de-DE)'

defaults delete com.google.Chrome AppleLanguages
```

## Learn More

To learn more about creating cross-browser extensions with Extension.js, visit the [official documentation](https://extension.js.org).
