# 🚀 Jane Doe — Personal Portfolio

A modern, responsive personal portfolio website built with **React**, **Tailwind CSS**, and **Lucide React** icons. Optimized for one-click deployment on **Vercel**.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-10b981?style=for-the-badge)

## ✨ Features

- **Dark Mode Default** with sleek glassmorphism navigation
- **Smooth Scroll Navigation** with active section highlighting
- **Animated Hero Section** with floating geometric shapes and gradient orbs
- **Skills Showcase** with animated progress bars and categorized tech stack
- **Project Gallery** with category filtering, hover effects, and tech stack tags
- **Contact Form** with validation states and social media links
- **Fully Responsive** mobile-first design with hamburger menu
- **SEO Optimized** with meta tags, Open Graph, and semantic HTML
- **Scroll-triggered Animations** using Intersection Observer

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 6 | Build tool & dev server |
| Tailwind CSS 3 | Utility-first styling |
| Lucide React | Icon library |
| Intersection Observer API | Scroll animations |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd MyPortfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

The production build will be output to the `dist/` directory.

## 📦 Deploy to Vercel

### Option 1: Vercel CLI
```bash
npx vercel --prod
```

### Option 2: GitHub Integration
1. Push this repository to GitHub
2. Import the project in [Vercel Dashboard](https://vercel.com/new)
3. Vercel auto-detects Vite and deploys instantly

## 📁 Project Structure

```
MyPortfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Sticky glassmorphism navigation
│   │   ├── Hero.jsx         # Hero section with animations
│   │   ├── About.jsx        # Bio, stats, and skill bars
│   │   ├── Projects.jsx     # Filterable project grid
│   │   ├── Contact.jsx      # Contact form and info
│   │   └── Footer.jsx       # Footer with back-to-top
│   ├── data/
│   │   └── portfolioData.js # All portfolio content data
│   ├── hooks/
│   │   └── useReveal.js     # Scroll animation hooks
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles & Tailwind
├── index.html               # HTML template with SEO meta
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
├── vercel.json              # Vercel deployment config
└── package.json             # Dependencies & scripts
```

## 🎨 Customization

### Update Your Info
Edit `src/data/portfolioData.js` to update:
- Skills & categories
- Projects
- Social links

### Change Accent Color
Modify the `accent` color palette in `tailwind.config.js`.

### Add Resume
Place your resume PDF at `public/resume.pdf`.

## 📄 License

MIT License — feel free to use this template for your own portfolio!
