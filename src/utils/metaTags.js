import { useHead } from '@vueuse/head';

export function useMetaTags(meta) {
  const baseUrl = 'https://johnmichealacera.com';
  const defaultImage = '/jm-bg.png';
  
  const headConfig = {
    title: meta.title || 'John Micheal Acera - Developer Portfolio',
    meta: [
      // Basic meta tags
      {
        name: 'description',
        content: meta.description || 'Explore the portfolio of John Micheal Acera, showcasing projects, skills, and achievements in software development.'
      },
      {
        name: 'keywords',
        content: meta.keywords || 'John Micheal Acera, portfolio, software developer, programming, projects'
      },
      {
        name: 'author',
        content: 'John Micheal Acera'
      },
      
      // Open Graph meta tags
      {
        property: 'og:title',
        content: meta.ogTitle || meta.title || 'John Micheal Acera - Developer Portfolio'
      },
      {
        property: 'og:description',
        content: meta.ogDescription || meta.description || 'Explore the portfolio of John Micheal Acera, showcasing projects, skills, and achievements in software development.'
      },
      {
        property: 'og:image',
        content: `${baseUrl}${meta.ogImage || defaultImage}`
      },
      {
        property: 'og:url',
        content: meta.ogUrl || `${baseUrl}${meta.canonical?.replace(baseUrl, '') || '/'}`
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:site_name',
        content: 'John Micheal Acera Portfolio'
      },
      
      // Twitter Card meta tags
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: meta.twitterTitle || meta.title || 'John Micheal Acera - Developer Portfolio'
      },
      {
        name: 'twitter:description',
        content: meta.twitterDescription || meta.description || 'Explore the portfolio of John Micheal Acera, showcasing projects, skills, and achievements in software development.'
      },
      {
        name: 'twitter:image',
        content: `${baseUrl}${meta.twitterImage || defaultImage}`
      },
      {
        name: 'twitter:url',
        content: meta.ogUrl || `${baseUrl}${meta.canonical?.replace(baseUrl, '') || '/'}`
      },
      {
        name: 'twitter:creator',
        content: '@johnmichealacera'
      },
      
      // Additional meta tags
      {
        name: 'robots',
        content: 'index, follow'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      }
    ],
    link: [
      // Canonical link
      {
        rel: 'canonical',
        href: meta.canonical || `${baseUrl}${meta.ogUrl?.replace(baseUrl, '') || '/'}`
      },
      // Preload hero image for better performance
      {
        rel: 'preload',
        as: 'image',
        href: '/john.webp',
        type: 'image/webp'
      }
    ],
    script: [
      // Structured data for SEO
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'John Micheal Acera',
          url: baseUrl,
          jobTitle: 'Software Developer',
          description: meta.description || 'Explore the portfolio of John Micheal Acera, showcasing projects, skills, and achievements in software development.',
          image: `${baseUrl}${defaultImage}`,
          sameAs: [
            'https://github.com/johnmichealacera',
            'https://linkedin.com/in/johnmichealacera'
          ]
        })
      }
    ]
  };

  useHead(headConfig);
} 