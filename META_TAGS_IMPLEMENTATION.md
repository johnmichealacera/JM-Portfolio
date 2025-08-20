# Dynamic Meta Tags Implementation

## Overview

This portfolio website now features dynamic meta tags that update automatically based on the current page. The implementation uses Vue 3's Composition API with `@vueuse/head` for head management.

## Features

### ✅ Dynamic Meta Tags Per Page
- **Title**: Unique, descriptive titles for each page
- **Description**: Page-specific descriptions for SEO
- **Keywords**: Relevant keywords for each page
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Canonical URLs**: Proper canonical links for SEO
- **Structured Data**: JSON-LD schema markup

### ✅ Consistent Branding
- All pages use `/public/jm-bg.png` as the background image for meta tags
- Consistent branding across all social media platforms
- Proper author attribution

## Implementation Details

### 1. Meta Tags Utility (`src/utils/metaTags.js`)
- Centralized function `useMetaTags()` for managing all meta tags
- Automatic URL construction with base domain
- Fallback values for missing meta information
- Structured data generation for SEO

### 2. Router Configuration (`src/router/index.js`)
- Each route includes comprehensive meta information
- Page-specific titles, descriptions, and keywords
- Proper canonical URLs for each page

### 3. App-Level Integration (`src/App.vue`)
- Automatic meta tag updates on route changes
- Watches for route meta changes and updates accordingly
- Initial meta tag setup on app load

### 4. Page-Specific Implementation
Each view component uses the `useMetaTags()` function with page-specific information:

```javascript
import { useMetaTags } from '../utils/metaTags';

// In setup() function
useMetaTags({
  title: 'Page Title - John Micheal Acera',
  description: 'Page-specific description',
  keywords: 'relevant, keywords, for, this, page',
  ogTitle: 'Open Graph Title',
  ogDescription: 'Open Graph Description',
  ogImage: '/jm-bg.png',
  ogUrl: 'https://johnmichealacera.com/page',
  twitterTitle: 'Twitter Title',
  twitterDescription: 'Twitter Description',
  twitterImage: '/jm-bg.png',
  canonical: 'https://johnmichealacera.com/page'
});
```

## Pages with Dynamic Meta Tags

1. **Home** (`/`) - Main portfolio landing page
2. **Portfolio** (`/portfolio`) - Projects showcase
3. **About** (`/about`) - Personal information and background
4. **Contact** (`/contact`) - Contact information and form
5. **Manifesto** (`/manifesto`) - Development philosophy
6. **Thank You** (`/thank-you`) - Contact form confirmation
7. **Login** (`/login`) - Admin access

## Meta Tag Types Included

### Basic SEO
- `<title>` - Page title
- `<meta name="description">` - Page description
- `<meta name="keywords">` - Page keywords
- `<meta name="author">` - Author information
- `<meta name="robots">` - Search engine directives
- `<link rel="canonical">` - Canonical URL

### Open Graph (Facebook, LinkedIn)
- `og:title` - Social media title
- `og:description` - Social media description
- `og:image` - Social media image (`/jm-bg.png`)
- `og:url` - Social media URL
- `og:type` - Content type
- `og:site_name` - Site name

### Twitter Cards
- `twitter:card` - Card type (summary_large_image)
- `twitter:title` - Twitter title
- `twitter:description` - Twitter description
- `twitter:image` - Twitter image (`/jm-bg.png`)
- `twitter:url` - Twitter URL
- `twitter:creator` - Twitter handle

### Structured Data (JSON-LD)
- Person schema markup
- Professional information
- Social media links
- Profile image

## Benefits

1. **SEO Optimization**: Each page has unique, relevant meta tags
2. **Social Media Sharing**: Optimized for Facebook, Twitter, LinkedIn
3. **Brand Consistency**: Unified image and messaging across platforms
4. **Performance**: Efficient updates without page reloads
5. **Maintainability**: Centralized meta tag management

## Technical Notes

- Uses `@vueuse/head` for Vue 3 head management
- Compatible with Vue Router 4
- Supports both Options API and Composition API
- Automatic URL construction with configurable base domain
- Fallback values ensure meta tags are always present

## Testing

To test the implementation:

1. Run the development server: `npm run serve`
2. Navigate to different pages
3. View page source to verify meta tags
4. Use social media debugging tools:
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator
   - LinkedIn: https://www.linkedin.com/post-inspector/

## Future Enhancements

- Add dynamic meta tags for individual project pages
- Implement meta tag analytics tracking
- Add support for additional social platforms
- Create meta tag preview component for admin panel 