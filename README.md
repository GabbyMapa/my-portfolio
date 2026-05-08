# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Vite.

## Features

- ✨ Modern, clean design with dark mode support
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎨 Styled with Tailwind CSS
- 💼 Project showcase with descriptions and technologies
- 📊 GitHub activity integration
- 📄 Resume section with download option
- 📧 Contact information
- 🚀 Ready for deployment

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository (if needed)

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Customization

### Personal Information

Edit `/src/data/portfolio.ts` to update:
- Personal information (name, title, bio, contact details)
- Projects
- Skills
- Resume data (experience, education)

### GitHub Activity

Update the GitHub username in `/src/components/GitHubActivity.tsx`:
```typescript
const username = 'yourusername'; // Replace with your GitHub username
```

### Resume PDF

Place your resume PDF file in the `/public` folder as `resume.pdf` for the download link to work.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "deploy": "vite build && gh-pages -d dist"
   ```
3. Update `vite.config.ts` to set base path
4. Run: `npm run deploy`

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── GitHubActivity.tsx
│   │   ├── Resume.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/           # Data files
│   │   └── portfolio.ts
│   ├── types/          # TypeScript types
│   │   └── index.ts
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## License

MIT License - feel free to use this template for your own portfolio!
