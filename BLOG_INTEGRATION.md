# Blog Integration with GraphQL Backend

This document explains how the blog functionality has been integrated into your Vue.js portfolio using your existing GraphQL backend.

## Overview

The blog system now fetches data from your Rust-powered MongoDB backend through GraphQL, replacing the previous hardcoded blog posts with dynamic content.

## What Was Added

### 1. Portfolio Store Updates (`src/store/pinia/portfolio.js`)

- **New State Properties:**
  - `blogPosts`: Array of all blog posts
  - `currentBlogPost`: Currently viewed blog post

- **New Getters:**
  - `getPublishedBlogPosts`: Filters posts by published status
  - `getBlogPostBySlug(slug)`: Gets a specific post by slug
  - `getBlogPostsByTag(tag)`: Filters posts by tag

- **GraphQL Query:**
  - Added `blogPosts` to the main GraphQL query
  - Fetches: title, slug, author, date, content, tags, status

- **Data Processing:**
  - `processBlogData()`: Converts raw GraphQL data to usable format
  - Converts date strings to Date objects
  - Handles contentBlocks as array of objects with blockType and value

### 2. Blog List Page (`src/views/Blog.vue`)

- **Dynamic Content:**
  - Fetches blog posts from store
  - Displays posts in responsive grid
  - Shows loading and empty states
  - Renders tags and excerpts

- **Features:**
  - Date formatting
  - Content excerpt generation (strips HTML, limits to 150 chars)
  - Tag display (shows first 3 tags)
  - Dynamic routing to individual posts

### 3. Blog Detail Page (`src/views/BlogPost.vue`)

- **Dynamic Routing:**
  - Uses `:slug` parameter for dynamic URLs
  - Fetches post data by slug from store
  - Shows loading, content, and not-found states

- **Content Rendering:**
  - Renders content blocks based on their type (paragraph, heading, etc.)
  - Displays title, author, date, and tags
  - Handles missing posts gracefully

### 4. Router Updates (`src/router/index.js`)

- **Dynamic Route:**
  - Changed from `/blog/my-founder-journey` to `/blog/:slug`
  - Added `props: true` for slug parameter passing
  - Updated meta information for dynamic posts

## GraphQL Schema Expected

Your Rust backend should provide blog posts in this format:

```graphql
{
  blogPosts {
    title: String!
    slug: String!
    author: String!
    date: String! # ISO 8601 format
    contentBlocks: [ContentBlock!]! # Array of content block objects
    tags: [String!]
    status: String! # "published" or "draft"
  }
}

# ContentBlock type
type ContentBlock {
  blockType: String! # e.g., "paragraph", "heading", "list"
  value: String! # The actual content text
}
```

## Environment Configuration

Set your GraphQL backend URL in your environment file:

```bash
# .env
VUE_APP_PORTFOLIO_BACKEND=http://localhost:8000
```

## TODO Items Added

### Pagination and Filtering
- Add pagination support for large numbers of blog posts
- Implement search functionality
- Add advanced filtering options

### Status Management
- Filter by published vs draft status
- Admin interface for managing post status

### Error Handling
- Better error handling when GraphQL service is down
- Retry logic for failed requests
- User-friendly error messages

### Performance
- Request/response interceptors for logging
- Cache management for blog data
- Lazy loading for blog content

## Usage Examples

### Getting All Published Posts
```javascript
const portfolioStore = usePortfolioStore();
const publishedPosts = portfolioStore.getPublishedBlogPosts;
```

### Getting a Specific Post
```javascript
const post = portfolioStore.getBlogPostBySlug('my-founder-journey');
```

### Getting Posts by Tag
```javascript
const founderPosts = portfolioStore.getBlogPostsByTag('founder');
```

## Testing

1. Ensure your Rust backend is running and accessible
2. Set the correct `VUE_APP_PORTFOLIO_BACKEND` environment variable
3. Navigate to `/blog` to see the list of posts
4. Click on a post to view the detail page
5. Check that dynamic routing works with different slugs

## Future Enhancements

- **Search**: Add search functionality with debounced input
- **Categories**: Group posts by categories
- **Related Posts**: Show related posts based on tags
- **Reading Time**: Calculate and display estimated reading time
- **View Counts**: Track and display post view counts
- **Comments**: Add commenting system
- **Social Sharing**: Add social media sharing buttons
- **SEO**: Dynamic meta tags for each blog post
- **RSS Feed**: Generate RSS feed for blog posts
