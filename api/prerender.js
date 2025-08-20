// Prerender.io integration for Vue.js on Vercel
// This function detects crawlers and serves prerendered content

const PRERENDER_TOKEN = 'sIWATGpObZwfL3OUPYnm';
const PRERENDER_URL = 'https://service.prerender.io/';

// List of crawler user agents
const CRAWLER_USER_AGENTS = [
  'googlebot',
  'bingbot',
  'yandex',
  'baiduspider',
  'facebookexternalhit',
  'twitterbot',
  'rogerbot',
  'linkedinbot',
  'embedly',
  'quora link preview',
  'showyoubot',
  'outbrain',
  'pinterest',
  'slackbot',
  'vkShare',
  'W3C_Validator',
  'whatsapp',
  'telegrambot',
  'discordbot',
  'skypeuripreview'
];

// Check if the request is from a crawler
function isCrawler(userAgent) {
  if (!userAgent) return false;
  
  const lowerUserAgent = userAgent.toLowerCase();
  return CRAWLER_USER_AGENTS.some(crawler => 
    lowerUserAgent.includes(crawler.toLowerCase())
  );
}

// Check if the request is for a resource (not HTML)
function isResourceRequest(url) {
  const resourceExtensions = [
    '.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', 
    '.ico', '.woff', '.woff2', '.ttf', '.eot', '.pdf', '.zip',
    '.mp4', '.webm', '.mp3', '.wav', '.avi', '.mov'
  ];
  
  return resourceExtensions.some(ext => url.toLowerCase().includes(ext));
}

export default async function handler(req, res) {
  const { url } = req.query;
  const userAgent = req.headers['user-agent'] || '';
  
  // If no URL provided, return error
  if (!url) {
    return res.status(400).json({ error: 'URL parameter is required' });
  }

  // Check if this is a crawler request for HTML content
  const shouldPrerender = isCrawler(userAgent) && !isResourceRequest(url);

  if (shouldPrerender) {
    try {
      console.log(`Prerendering for crawler: ${userAgent} - URL: ${url}`);
      
      const prerenderResponse = await fetch(`${PRERENDER_URL}${url}`, {
        headers: {
          'X-Prerender-Token': PRERENDER_TOKEN,
          'User-Agent': userAgent
        }
      });

      if (prerenderResponse.ok) {
        const html = await prerenderResponse.text();
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('X-Prerender', 'true');
        return res.status(200).send(html);
      } else {
        console.error(`Prerender failed with status: ${prerenderResponse.status}`);
      }
    } catch (error) {
      console.error('Prerender error:', error);
    }
  }

  // If not a crawler or prerender failed, return 404
  // This allows the normal SPA routing to handle the request
  return res.status(404).json({ error: 'Not found' });
} 