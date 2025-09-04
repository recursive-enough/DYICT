# Digital Youth ICT Academy Website

A modern, responsive website for Digital Youth ICT Academy built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with a professional black and white color palette
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Vite for optimal performance and fast loading
- **Accessibility**: Designed with accessibility best practices
- **SEO Optimized**: Meta tags and structured data for better search engine visibility

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4.0
- **Build Tool**: Vite
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Routing**: React Router Dom
- **Notifications**: Sonner for toast notifications

## 📁 Project Structure

```
├── public/                 # Static assets
├── src/                   # Source files
│   └── main.tsx          # Application entry point
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── figma/            # Figma-specific components
│   ├── HomePage.tsx      # Homepage component
│   ├── CoursesPage.tsx   # Courses listing page
│   ├── AboutPage.tsx     # About us page
│   ├── ContactPage.tsx   # Contact page
│   ├── ApplicationsPage.tsx # Applications page
│   ├── LearnershipDetailPage.tsx # Individual learnership details
│   └── Layout.tsx        # Main layout wrapper
├── styles/               # Global styles
│   └── globals.css       # Global CSS with Tailwind
├── App.tsx              # Main App component with routing
└── package.json         # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/digital-youth-ict-academy.git
cd digital-youth-ict-academy
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎨 Design System

### Typography
- **Headings**: Source Code Pro (monospace)
- **Body Text**: Arial (sans-serif)
- **Base Font Size**: 14px

### Colors
- **Background**: #000000 (Black)
- **Foreground**: #ffffff (White)
- **Primary**: #ffffff (White)
- **Muted**: #262626 (Dark Gray)
- **Border**: #262626 (Dark Gray)

### Border Radius
- All components use 0px border radius for a sharp, modern aesthetic

## 📱 Pages

1. **Homepage** - Hero section, features, programs overview, and stats
2. **Courses & Training** - International certificates and learnerships
3. **About Us** - Company information and values
4. **Contact** - Contact form and information
5. **Applications** - Application forms and requirements
6. **Learnership Details** - Individual program details pages

## 🎯 Key Features

- **Partner Logos**: Official partner showcase section
- **Course Catalog**: Detailed information about certificates and learnerships
- **Application System**: Integrated application forms
- **Responsive Navigation**: Mobile-friendly navigation with hamburger menu
- **Social Media Integration**: Links to all social platforms
- **SEO Optimization**: Meta tags and structured data

## 🔧 Development

### Adding New Pages

1. Create a new component in the `components/` directory
2. Add the route to `App.tsx`
3. Update navigation in `Layout.tsx` if needed

### Styling Guidelines

- Use Tailwind CSS classes for styling
- Follow the existing color palette
- Maintain 0px border radius throughout
- Use Source Code Pro for headings, Arial for body text
- Ensure responsive design with mobile-first approach

## 📦 Deployment

The project is configured for deployment to any static hosting service:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/` folder to your hosting service

### Recommended Hosting Services
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email info@digitalacademy.co.za or contact us through the website.

## 📄 License

This project is proprietary and confidential. All rights reserved by Digital Youth ICT Academy.