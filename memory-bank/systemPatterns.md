# System Patterns - BBeautiful Medical Spa Website

## Component Architecture

### Header System
**Pattern:** Shared Header Component
```
src/components/ui/header.tsx
├── Top Contact Bar (phone, hours, social, CTA)
├── Main Header (logo, primary nav, booking CTA)
├── Sticky Navigation (secondary nav items)
└── Mobile Menu Overlay (hamburger navigation)
```

**Implementation:**
- Single `<Header />` component replaces duplicated code
- Responsive design with mobile-first approach
- Sticky navigation for secondary menu items
- Phone number links with tel: protocol

### Navigation Structure
**Pattern:** Hierarchical Menu System
```
Primary Navigation (Desktop):
├── HOME
├── INJECTABLES ▼
│   ├── Botox
│   ├── Fillers & Collagen
│   ├── VI Peel
│   └── Microneedling
├── FACIALS ▼
│   ├── Classic Facial
│   ├── LED Light Therapy
│   ├── Microdermabrasion
│   └── Everything Beautiful
├── WELLNESS ▼
│   ├── Weight Loss
│   └── IV Hydration
├── MEMBERSHIP
├── GIFT CARDS
├── ABOUT
└── CONTACT
```

### Page Structure Pattern
**Pattern:** Consistent Layout Framework
```
<Header />
<HeroSection />
<WelcomeSection />
<FeaturedServices />
<ProcessSection />
<SpecialOffers />
<CTASection />
<ServiceGallerySection />
<BackToTopButton />
```

## SEO Architecture

### URL Structure Pattern
```
Domain: bbeautifulmedicalspa.com
├── / (homepage)
├── /injectables/
│   ├── /botox-chamblee-ga
│   ├── /fillers-collagen-chamblee
│   └── /vi-peel-chamblee
├── /medical-facials/
│   ├── /classic-facial-chamblee
│   └── /led-light-therapy-facial
├── /wellness/
│   ├── /weight-loss-semaglutide-chamblee
│   └── /iv-hydration-therapy
├── /vip-membership
├── /gift-cards
├── /about
└── /contact
```

### Content Optimization Pattern
**Structure:** Local SEO + Service Focus
```
H1: [Service] + [Location] + [Business Type]
H2: [Benefit/Feature] + [Location]
H3: [Specific Details/Process]
Content: [Service Description] + [Local References] + [CTA]
```

**Example:**
```
H1: Expert Botox Injections in Chamblee, GA
H2: Why Choose Bbeautiful for Botox in Chamblee
H3: FDA-Approved Botox Process
Content: Professional Botox treatments at our Chamblee location...
```

## Design System Patterns

### Color Palette
```scss
Primary: #c292a1 (rose/mauve)
Secondary: #a87b96 (deeper rose)
Accent: #a78351 (gold/bronze)
Dark: #874c62 (burgundy)
Light: #f8f5f0 (cream)
Background: #ead5c4 (light beige)
```

### Typography Hierarchy
```
H1: Imperial Script font, 7xl-9xl
H2: Imperial Script font, 5xl-6xl
H3: Sans-serif bold, xl-2xl
Body: Sans-serif regular, base-lg
CTA Buttons: Sans-serif bold, xs-sm, tracking-wider
```

### Button Patterns
```jsx
Primary CTA: 
className="bg-gradient-to-r from-[#c292a1] to-[#a87b96] text-white"

Secondary CTA:
className="border-2 border-[#c292a1] text-[#c292a1] hover:bg-[#c292a1]"

Outline CTA:
className="border-2 border-white text-white hover:bg-white"
```

## Data Architecture

### Business Information Schema
```json
{
  "name": "Bbeautiful Medical Spa & Wellness Center",
  "address": "5488 Peachtree Rd, Chamblee, GA 30341",
  "phone": "(678) 404-5969",
  "hours": {
    "wednesday": "9:00-17:00",
    "friday": "9:00-17:00"
  },
  "services": ["Botox", "LED Therapy", "Medical Facials"],
  "serviceArea": ["Chamblee", "Atlanta", "Brookhaven", "Doraville"]
}
```

### Service Data Pattern
```javascript
const services = [
  {
    category: "facial-rejuvenation",
    title: "Botox Injections",
    price: "Starting at $12/unit",
    duration: "15-30 minutes",
    description: "...",
    benefits: ["..."],
    process: ["..."]
  }
]
```

## Integration Patterns

### Image Asset Management
**Pattern:** Centralized Asset Structure
```
public/
├── bbeautiful-logo.png (main logo)
├── header.jpg (hero backgrounds)
├── BBCARD.png (gift card displays)
├── Medical.webp (medical aesthetics)
├── facialrejuvenation.jpeg (rejuvenation services)
└── healthandwellness.webp (wellness services)
```

### Mobile Responsiveness Pattern
```scss
// Mobile-first breakpoints
sm: 640px   // Small tablets
md: 768px   // Tablets
lg: 1024px  // Desktop
xl: 1280px  // Large desktop

// Component responsive pattern
className="text-sm sm:text-base lg:text-lg"
className="px-4 sm:px-6 lg:px-8"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

## Performance Patterns

### Code Splitting
- Route-based splitting for each main page
- Component-based splitting for large components
- Lazy loading for below-the-fold content

### Image Optimization
- WebP format for hero images
- PNG for logos and graphics
- Responsive image sizing
- Lazy loading implementation

### SEO Technical Patterns
```html
<!-- Local Business Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Bbeautiful Medical Spa",
  "address": {...},
  "telephone": "(678) 404-5969"
}
</script>

<!-- Meta tags pattern -->
<title>[Service] [Location] | [Business Name]</title>
<meta name="description" content="[Service description] in [Location]. [CTA] [Phone]">
```

## Error Handling Patterns

### Graceful Degradation
- Mobile menu fallback for JavaScript disabled
- Image alt tags for accessibility
- Semantic HTML structure
- Progressive enhancement approach

### User Experience Fallbacks
- Loading states for dynamic content
- Error messages for failed form submissions
- Offline page for network issues
- 404 page with navigation back to services 