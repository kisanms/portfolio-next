# Modern Portfolio Website

<div align="center">
  <img src="https://cdn.vectorstock.com/i/500p/91/31/portfolio-paper-poster-with-colorful-brush-strokes-vector-21849131.jpg" alt="Portfolio Banner" width="500"/>
  <p><em>A next-generation personal portfolio showcasing skills, projects, and achievements</em></p>
</div>

## ✨ Overview

This modern portfolio website was built using cutting-edge technologies and AI-assisted development. It features a responsive design with interactive elements, smooth animations, and a clean, professional aesthetic with a sci-fi inspired theme.

The portfolio showcases my skills, projects, education, and provides a contact form for potential employers or clients to reach out. The entire development process was streamlined with the help of AI tools, enabling rapid prototyping and implementation of complex features.

## 🚀 Built With

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Geist Font](https://vercel.com/font)** - Modern typeface by Vercel
- **[Warp AI](https://www.warp.dev/)** - AI-assisted development
- **[ESLint](https://eslint.org/)** - Code quality and standards

## 🤖 AI-Assisted Development with Warp AI

The development of this portfolio website was significantly accelerated and enhanced with the help of **Warp AI**. Here's how AI assisted in the creation process:

- **Code Generation**: Warp AI helped generate component templates, animations, and responsive layouts
- **Bug Fixing**: Identified and resolved TypeScript errors and ESLint warnings
- **Refactoring**: Improved code organization and type safety
- **Responsiveness**: Enhanced mobile and tablet layouts for better user experience
- **Accessibility**: Added ARIA attributes and keyboard navigation support
- **Optimization**: Helped optimize animations and loading performance

The AI assistance dramatically reduced development time while maintaining high code quality and following best practices.

## 🌟 Features

The portfolio includes several key sections, each designed to showcase different aspects of my professional profile:

### 🏠 Hero Section
- Animated introduction with rotating role descriptions
- Call-to-action buttons for quick navigation
- Responsive design with animated background elements

### 👤 About Section
- Professional summary and background information
- Tech stack visualization
- Animated content reveal

### 💻 Projects Section
- Featured projects with descriptions and technologies used
- Links to live demos and GitHub repositories
- Interactive project cards with hover effects

### 🛠️ Skills Section
- Visual representation of technical proficiencies
- Categorized skill sets with progress indicators
- Additional skills and tools showcase

### 🎓 Education Section
- Timeline of educational achievements
- Degree information and dates
- Animated reveal on scroll

### 📧 Contact Section
- Interactive contact form with validation
- API endpoint for form submission
- Success/error state handling

### 👣 Footer
- Social media links
- Quick navigation
- Copyright information
- Technologies used indicators

## 🔧 Setup and Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-next.git

# Navigate to the project directory
cd portfolio-next

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
portfolio-next/
├── public/               # Static assets
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/  # API routes
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/
│   │   ├── layout/       # Layout components
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   └── sections/     # Page sections
│   │       ├── About.tsx
│   │       ├── Contact.tsx
│   │       ├── Education.tsx
│   │       ├── Hero.tsx
│   │       ├── Projects.tsx
│   │       └── Skills.tsx
│   └── styles/           # Component-specific styles
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Deployment

The portfolio is optimized for deployment on Vercel, but can be deployed to any hosting platform that supports Next.js:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel
```

For other platforms, build the project first:

```bash
npm run build
```

Then deploy the `out` directory according to your hosting provider's instructions.

## 📸 Screenshots

<div align="center">
  <img src="public/screenshot-home.png" alt="Home Screen" width="400"/>
  <img src="public/screenshot-projects.png" alt="Projects Section" width="400"/>
  <p><em>Home screen and Projects section</em></p>
</div>

<div align="center">
  <img src="public/screenshot-skills.png" alt="Skills Section" width="400"/>
  <img src="public/screenshot-contact.png" alt="Contact Section" width="400"/>
  <p><em>Skills and Contact sections</em></p>
</div>

## 🙏 Acknowledgments

- Warp AI for assistance with development
- Next.js team for the incredible framework
- Tailwind CSS for the utility-first styling approach
- Framer Motion for the smooth animations
- Vercel for inspiration and hosting capabilities

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔄 Personalizing the Portfolio

To customize this portfolio for your own use:

1. **Personal Information**:
   - Update your name, role, and bio in the Hero and About sections
   - Replace social media links in the Footer component
   - Update copyright information with your name

2. **Project Showcase**:
   - Edit the `projects` array in `Projects.tsx` with your own work
   - Add screenshots or demos of your projects
   - Update GitHub and live demo links

3. **Skills & Education**:
   - Modify the skills categories and proficiency levels
   - Update education history with your academic background
   - Customize the "Built With" tags in the footer

4. **Contact Form**:
   - Update the contact form API endpoint if using a different service
   - Customize form validation rules if needed

5. **Design Customization**:
   - Modify color gradients in `globals.css` to match your personal brand
   - Update background elements and animations to your preference
   - Replace fonts if desired

6. **Images and Screenshots**:
   - Replace the placeholder `readme-banner.png` with your own portfolio banner
   - Add your own project screenshots to the `public` directory
   - Update image paths in the README.md and component files
   - Create a favicon that matches your personal brand

---

<div align="center">
  <p>Designed & Developed with ❤️ and AI in 2025</p>
  <p>
    <a href="https://github.com/yourusername">GitHub</a> •
    <a href="https://www.linkedin.com/in/kisansmajumdar/>LinkedIn</a> •
    <a href="https://twitter.com/yourusername">Twitter</a>
  </p>
</div>
