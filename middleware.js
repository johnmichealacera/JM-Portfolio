import { NextResponse } from 'next/server';

const PRERENDER_TOKEN = 'sIWATGpObZwfL3OUPYnm';

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
  'skypeuripreview',
  'prerender'
];

// Check if the request is from a bot/crawler
function isBot(userAgent) {
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

export function middleware(req) {
  const userAgent = req.headers.get('user-agent');
  const url = req.nextUrl.pathname;
  
  // Only process HTML requests from bots
  if (isBot(userAgent) && !isResourceRequest(url)) {
    const prerenderUrl = `https://service.prerender.io/render?token=${PRERENDER_TOKEN}&url=${req.url}`;
    return NextResponse.rewrite(prerenderUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 