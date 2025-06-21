import { useHead } from '@vueuse/head';

export function useMetaTags(meta) {
  const baseUrl = 'https://johnmichealacera.com';
  const defaultImage = '/jm-bg.png';
  
  // Ensure image URL is absolute and properly formatted
  const getAbsoluteImageUrl = (imagePath) => {
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    return `${baseUrl}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`;
  };
  
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
      
      // Facebook App ID (optional but recommended)
      {
        property: 'fb:app_id',
        content: '123456789012345' // Replace with your actual Facebook App ID if you have one
      },
      
      // Open Graph meta tags (Facebook, LinkedIn)
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
        content: getAbsoluteImageUrl(meta.ogImage || defaultImage)
      },
      {
        property: 'og:image:width',
        content: '1200'
      },
      {
        property: 'og:image:height',
        content: '630'
      },
      {
        property: 'og:image:alt',
        content: 'John Micheal Acera - Software Developer Portfolio'
      },
      {
        property: 'og:image:type',
        content: 'image/png'
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
      {
        property: 'og:locale',
        content: 'en_US'
      },
      
      // Twitter Card meta tags - Fixed implementation
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:site',
        content: '@johnmichealacera'
      },
      {
        name: 'twitter:creator',
        content: '@johnmichealacera'
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
        content: getAbsoluteImageUrl(meta.twitterImage || defaultImage)
      },
      {
        name: 'twitter:image:alt',
        content: 'John Micheal Acera - Software Developer Portfolio'
      },
      {
        name: 'twitter:url',
        content: meta.ogUrl || `${baseUrl}${meta.canonical?.replace(baseUrl, '') || '/'}`
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
      // Structured data for SEO - Single instance to avoid duplicates
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'John Micheal Acera',
          url: baseUrl,
          jobTitle: 'Software Developer',
          description: meta.description || 'Explore the portfolio of John Micheal Acera, showcasing projects, skills, and achievements in software development.',
          image: getAbsoluteImageUrl(defaultImage),
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
