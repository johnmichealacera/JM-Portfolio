# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.4.0] - 2025-01-XX

### Added
- **Blog System**: New blog functionality with dedicated pages
  - Blog index page (`/blog`) with post listings and newsletter signup
  - Individual blog post page (`/blog/my-founder-journey`) for founder journey content
  - Newsletter subscription system with email collection via Web3Forms
  - Responsive blog post layout with semantic HTML structure
- **Navigation Updates**: 
  - Added blog links to main navigation menu
  - Added blog links to footer quick links
  - New blog icon in navigation
- **SEO Enhancement**: 
  - Comprehensive meta tags for blog routes
  - Open Graph and Twitter Card support for blog posts
  - Canonical URLs for blog content
- **Content Management**: 
  - Structured blog content with semantic HTML (`<p>`, `<h3>` tags)
  - Content ready for future database/CMS integration
  - TODO comments for backend development roadmap

### Technical
- New Vue.js components: `Blog.vue`, `BlogPost.vue`
- Router configuration for blog routes (`/blog`, `/blog/my-founder-journey`)
- Web3Forms integration for newsletter subscriptions (matching existing email patterns)
- Enhanced styling with Tailwind CSS and custom prose classes
- Responsive design for mobile and desktop blog reading

### Changed
- Updated main navigation to include blog section
- Enhanced footer with blog quick link
- Improved overall portfolio structure with content management capabilities

## [1.3.0] - 2024-XX-XX

### Added
- Portfolio showcase and project management
- Contact forms and lead generation systems
- Responsive design implementation for mobile and desktop
- Lead magnet functionality with PDF downloads
- Developer manifesto with email collection
- Web3Forms integration for form submissions

### Technical
- Vue.js 3 application with Vue Router
- Tailwind CSS for styling
- Webpack build system
- Pinia state management
- SEO optimization with meta tags

## [1.2.0] - 2024-XX-XX

### Added
- Initial portfolio structure
- Basic routing and navigation
- Component-based architecture

## [1.1.0] - 2024-XX-XX

### Added
- Project initialization
- Basic Vue.js setup

## [1.0.0] - 2024-XX-XX

### Added
- Initial release
- Basic portfolio foundation
