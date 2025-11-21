<div align="center">

# ✨ Portfolio Website

### A Modern, Interactive Portfolio Built with React & Three.js

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.181.2-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.24-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[View Live Demo](#) • [Report Bug](#) • [Request Feature](#)

---

</div>

## 🎯 About

A premium, modern portfolio website showcasing professional experience, projects, skills, certifications, and achievements. Built with cutting-edge technologies and featuring stunning 3D visualizations, smooth animations, and a refined glassmorphic design inspired by Apple's aesthetic.

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 **Premium Design**
- Glassmorphic UI elements
- Dark/Light theme toggle
- Smooth animations with Framer Motion
- Responsive across all devices

</td>
<td width="50%">

### 🚀 **Interactive Elements**
- 3D canvas animations with Three.js
- Interactive bento grid layout
- Smooth scroll effects
- Dynamic theme switching

</td>
</tr>
<tr>
<td width="50%">

### 📱 **Sections**
- Hero with animated taglines
- Professional Experience
- Featured Projects
- Technical Skills
- Certifications & Achievements
- Contact Form

</td>
<td width="50%">

### ⚡ **Performance**
- Vite for lightning-fast builds
- Optimized bundle size
- Lazy loading components
- ESLint for code quality

</td>
</tr>
</table>

## 🛠️ Tech Stack

```javascript
{
  "frontend": ["React 19.2", "Vite 7.x"],
  "3d_graphics": ["Three.js", "@react-three/fiber", "@react-three/drei"],
  "animations": ["Framer Motion"],
  "styling": ["CSS3", "Glassmorphism"],
  "icons": ["Lucide React"],
  "routing": ["React Router DOM 7.x"],
  "development": ["ESLint", "Hot Module Replacement"]
}
```

## 📦 Project Structure

```
Portfolio/
├── 📁 public/              # Static assets
├── 📁 src/
│   ├── 📁 components/      # React components
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Hero section with animations
│   │   ├── Experience.jsx  # Work experience timeline
│   │   ├── Projects.jsx    # Project showcase
│   │   ├── BentoGrid.jsx   # Interactive grid layout
│   │   ├── Canvas3D.jsx    # 3D Three.js canvas
│   │   ├── Skills.jsx      # Technical skills
│   │   ├── Certifications.jsx  # Professional certifications
│   │   ├── Achievements.jsx    # Awards and achievements
│   │   └── Contact.jsx     # Contact form
│   ├── 📁 context/
│   │   └── ThemeContext.jsx    # Theme management
│   ├── App.jsx             # Main application
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` 🎉

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 🎨 Customization

### 1. **Theme Colors**

Edit `src/index.css` to customize the color palette:

```css
:root {
  --primary-color: your-color;
  --accent-color: your-color;
  /* ... more variables */
}
```

### 2. **Personal Information**

Update the following components with your information:
- `src/components/Hero.jsx` - Name, tagline, description
- `src/components/Experience.jsx` - Work history
- `src/components/Projects.jsx` - Your projects
- `src/components/Skills.jsx` - Technical skills
- `src/components/Contact.jsx` - Contact details

### 3. **3D Canvas**

Customize the 3D scene in `src/components/Canvas3D.jsx` using Three.js and React Three Fiber.

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

## 🎯 Key Components

### Hero Section
Features animated taglines with smooth transitions, professional introduction, and call-to-action buttons.

### BentoGrid
Modern grid layout showcasing various aspects of your profile with interactive hover effects.

### Canvas3D
Immersive 3D background animations powered by Three.js, adding depth and visual interest.

### Theme Toggle
Seamless dark/light mode switching with persistent user preferences.

## 🔧 Configuration

### Vite Config
```javascript
// vite.config.js
export default {
  // Your Vite configuration
}
```

### ESLint Config
```javascript
// eslint.config.js
export default {
  // Your ESLint rules
}
```

## 🌟 Highlights

- ⚡ **Lightning Fast**: Built with Vite for instant HMR and optimized builds
- 🎨 **Modern Design**: Clean, professional aesthetic with glassmorphism
- 📱 **Fully Responsive**: Perfect on desktop, tablet, and mobile
- ♿ **Accessible**: Semantic HTML and ARIA labels
- 🎭 **Animated**: Smooth, performant animations with Framer Motion
- 🌓 **Theme Support**: Dark and light modes
- 🎯 **SEO Optimized**: Proper meta tags and semantic structure

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](#).

## 💬 Contact

Have questions or want to collaborate? Reach out through the contact form on the website or connect on social media!

---

<div align="center">

**[⬆ Back to Top](#-portfolio-website)**

Made with ❤️ using React & Three.js

</div>
