# Technical Context - BBeautiful Medical Spa Website

## Technology Stack

### Frontend Framework
- **React 18.2.0** - Component-based UI library
- **TypeScript** - Type safety and better development experience
- **Vite 6.0.4** - Build tool and development server

### UI Component Libraries
- **Radix UI** - Accessible component primitives
  - `@radix-ui/react-slot` - Slot component for composition
  - `@radix-ui/react-avatar` - Avatar component
  - `@radix-ui/react-navigation-menu` - Navigation menus
  - `@radix-ui/react-separator` - Visual separators
- **Lucide React** - Icon library with 450+ icons
- **Class Variance Authority** - Type-safe component variants

### Styling & Design
- **Tailwind CSS 3.4.16** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Tailwind Merge & clsx** - Conditional class management

### Routing
- **React Router DOM 6.8.1** - Client-side routing
- **Browser Router** - Standard web application routing

### Development Tools
- **ESBuild 0.24.0** - Fast bundling and transpilation
- **@vitejs/plugin-react** - React integration for Vite
- **@types/react & @types/react-dom** - TypeScript definitions

## Project Structure

```
BBeautifulWebsite/
├── public/                    # Static assets
│   ├── bbeautiful-logo.png   # Main logo
│   ├── header.jpg            # Hero backgrounds  
│   ├── BBCARD.png           # Gift card image
│   └── [other-images]       # Service & brand images
├── src/
│   ├── components/
│   │   └── ui/              # Reusable UI components
│   │       ├── header.tsx   # Shared header component
│   │       ├── button.tsx   # Button variants
│   │       ├── card.tsx     # Card layouts
│   │       └── navigation-menu.tsx
│   ├── screens/             # Page components
│   │   ├── ElementLight/    # Homepage
│   │   ├── MedicalAesthetics/
│   │   └── FacialRejuvenation/
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   └── index.tsx           # Application entry point
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite build configuration
```

## Development Environment

### Node.js & Package Management
- **Node.js** - v18+ recommended
- **npm** - Package manager (lock file present)
- **Development Server** - Vite dev server on `npm run dev`
- **Build Process** - `npm run build` for production

### TypeScript Configuration
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

### Tailwind Configuration
```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom brand colors
      },
      fontFamily: {
        'imperial-script': ['Imperial Script']
      }
    }
  },
  plugins: []
}
```

## Build & Deployment

### Build Pipeline
- **Development:** `vite` dev server with hot reload
- **Production:** `vite build` creates optimized bundle in `dist/`
- **Preview:** `vite preview` to test production build locally

### Asset Optimization
- **Images:** Automatic optimization by Vite
- **CSS:** Purged unused classes via Tailwind
- **JavaScript:** Tree shaking and minification
- **Chunks:** Automatic code splitting

### Performance Targets
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- **Time to Interactive:** < 3.5s

## Browser Support

### Target Browsers
- **Chrome/Edge:** Last 2 versions
- **Firefox:** Last 2 versions  
- **Safari:** Last 2 versions
- **Mobile Safari:** iOS 14+
- **Chrome Mobile:** Android 8+

### Progressive Enhancement
- **Core Functionality:** Works without JavaScript
- **Enhanced Experience:** Interactive features with JavaScript
- **Responsive Design:** Mobile-first approach
- **Accessibility:** WCAG 2.1 AA compliance

## Third-Party Integrations

### Analytics & Tracking
- **Google Analytics 4** - Website performance tracking
- **Google Tag Manager** - Tag management
- **Google Search Console** - SEO monitoring

### Local SEO Tools
- **Google My Business** - Local business listing
- **Schema.org Markup** - Structured data
- **Open Graph Tags** - Social media sharing

### Communication
- **Phone Integration** - `tel:` links for mobile calling
- **Email Integration** - Contact form submissions
- **Social Media** - Facebook and Instagram links

## Security Considerations

### Data Protection
- **No Sensitive Data Storage** - Client-side only
- **HTTPS Enforcement** - SSL certificate required
- **Content Security Policy** - XSS protection
- **Input Validation** - Form sanitization

### Performance Security
- **Dependency Auditing** - Regular npm audit checks
- **Build Security** - Secure build pipeline
- **Asset Integrity** - Subresource integrity

## Maintenance & Updates

### Regular Maintenance Tasks
- **Dependency Updates** - Monthly security updates
- **Performance Monitoring** - Weekly Core Web Vitals checks
- **SEO Health Checks** - Bi-weekly ranking monitoring
- **Content Updates** - As needed for promotions/services

### Development Workflow
1. **Local Development** - Feature branches
2. **Testing** - Manual testing on multiple devices
3. **Staging Deployment** - Preview environment
4. **Production Deployment** - Live site updates
5. **Monitoring** - Post-deployment verification

## Known Technical Constraints

### Current Limitations
- **TypeScript Errors** - Some configuration issues present
- **Mobile Menu** - Needs responsive optimization
- **Image Optimization** - Manual optimization required
- **SEO Implementation** - Schema markup needs completion

### Performance Bottlenecks
- **Large Image Files** - Need WebP conversion
- **Unused CSS** - Manual purging needed
- **JavaScript Bundle Size** - Code splitting opportunities
- **Font Loading** - Custom font optimization needed

## Future Technical Roadmap

### Phase 1 - Core Fixes
- Resolve TypeScript configuration issues
- Implement responsive mobile navigation
- Add proper error boundaries
- Complete SEO schema markup

### Phase 2 - Optimization
- Image optimization and lazy loading
- Performance monitoring setup
- Advanced caching strategies
- Progressive Web App features

### Phase 3 - Enhancement
- A/B testing framework
- Advanced analytics implementation
- Booking system integration
- Customer portal development 