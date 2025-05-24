# Next.js Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Framer Motion.

## Features

- ✨ Modern, glassmorphic design
- 📱 Fully responsive
- 🎭 Smooth animations with Framer Motion
- 🎨 Interactive UI elements
- 📧 Contact form
- 🌟 Portfolio showcase
- 📜 Professional timeline
- 🛠️ Tech stack display

## Getting Started

1. **Clone or create the project:**
```bash
npx create-next-app@latest nextjs-portfolio --typescript --eslint
cd nextjs-portfolio
```

2. **Install dependencies:**
```bash
npm install framer-motion
```

3. **Replace the generated files with the provided code**

4. **Run the development server:**
```bash
npm run dev
```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Project Structure

```
nextjs-portfolio/
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Portfolio.tsx
│   ├── TechStack.tsx
│   └── Timeline.tsx
├── pages/
│   ├── _app.tsx
│   └── index.tsx
├── public/
│   └── resume.pdf (add your resume here)
├── styles/
│   └── globals.css
├── next.config.js
├── package.json
└── tsconfig.json
```

## Customization

1. **Personal Information:** Update personal details in all components
2. **Projects:** Modify the `projects` array in `Portfolio.tsx`
3. **Experience:** Update the `experiences` array in `Timeline.tsx`
4. **Tech Stack:** Modify the `techCategories` array in `TechStack.tsx`
5. **Images:** Replace placeholder images with your own
6. **Resume:** Add your resume PDF to the `public/` folder

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the .next folder to Netlify
```

### GitHub Pages
```bash
npm run build
npm run export
# Upload the out folder to GitHub Pages
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Framer Motion** - Animations
- **CSS3** - Styling with modern features
- **React** - UI library

## License

MIT License - feel free to use this for your own portfolio!