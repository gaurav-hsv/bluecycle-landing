# BlueCycle Landing Page - Setup Instructions

This is a pixel-perfect recreation of the BlueCycle landing page built with Next.js, React, and Tailwind CSS.

## Tech Stack

- **Next.js 14+** (App Router)
- **React**
- **Tailwind CSS**
- **TypeScript**

## Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Add Required Images

Place these images in the `/public` directory:

- `/public/hero-bg.png` - Hero banner background image
- `/public/arrow-path.png` - Diagonal arrow graphic for the path section
- `/public/microsoft-logo.svg` - Microsoft logo (optional)
- `/public/sentinel-logo.svg` - Sentinel logo (optional)

**Note:** The page will work without these images but some visual elements will be missing. You can:
- Add actual images to the paths above
- Remove the Image components if not needed
- Replace with placeholder divs

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
bluecycle-landing/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page component
│   └── globals.css         # Global styles with Inter font
├── public/                 # Static assets (images)
├── tailwind.config.ts      # Tailwind configuration
└── SETUP.md               # This file
```

## Key Features Implemented

### Design Matching
- Dark premium SaaS aesthetic with blue gradients
- Exact color scheme from screenshot (#000000, #2e7cef, #e5efff)
- Subtle borders, rounded corners (12-18px)
- Soft shadows and glows

### Sections (11 Total)
1. **Header** - Sticky navigation with logo and CTA
2. **Hero Banner** - Large gradient panel with dual CTAs
3. **Accelerate Section** - 2-column layout with partner badges
4. **Copilot Amplifies** - Full-width dark band
5. **Risks Section** - 3 cards with hover effects
6. **Assessment Section** - Light blue background with checklist
7. **Path Section** - 4 progressive step cards with arrow graphic
8. **Security Partner** - 4 expertise cards
9. **Environment** - Logo row section
10. **Beyond Copilot** - 3 cards + CTA button
11. **Final CTA** - Gradient banner
12. **FAQ** - Accordion component

### Interactive Components
- FAQ accordion with expand/collapse
- Hover effects on cards (border glow)
- Button hover states
- Smooth transitions

### Responsive Design
- Mobile-first approach
- Cards stack on mobile
- Generous padding maintained
- Text doesn't touch edges

### Typography
- Inter font family from Google Fonts
- Large hero text (44-56px)
- Section headings (28-40px)
- Proper line heights and spacing

### Accessibility
- Semantic HTML (header, main, section, footer)
- ARIA labels on interactive elements
- Keyboard navigation support
- Proper heading hierarchy

## Customization

### Colors
Edit colors in `tailwind.config.ts` and the component classes in `app/page.tsx`.

### Content
All content is defined inline in `app/page.tsx` using arrays/objects for easy editing:
- FAQ questions array
- Risk cards array
- Feature cards arrays
- etc.

### Fonts
Change the font family in:
- `app/globals.css` (Google Fonts import)
- `tailwind.config.ts` (fontFamily configuration)

## Production Build

```bash
npm run build
npm start
```

## Notes

- The page uses client-side rendering for the FAQ accordion (`'use client'` directive)
- Next.js Image component is used for optimized image loading
- All gradients use Tailwind's built-in utilities
- Custom radial gradient utility added in Tailwind config

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Supports responsive breakpoints: sm (640px), md (768px), lg (1024px)

## Future Enhancements

Potential additions:
- Add smooth scroll behavior for anchor links
- Implement form submission for CTAs
- Add animations on scroll (AOS, Framer Motion)
- Connect to CMS for dynamic content
- Add analytics tracking

---

Built with attention to pixel-perfect detail matching the provided screenshot.
