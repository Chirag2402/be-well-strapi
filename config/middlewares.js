module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "img-src": ["'self'", "data:", "blob:", "res.cloudinary.com", "https://be-well-strapi.onrender.com"],
          "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com", "https://be-well-strapi.onrender.com"],
          "script-src": ["'self'", "'unsafe-inline'", "cdn.jsdelivr.net"],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['https://bew-well.vercel.app'], // ✅ Ensure this is correct
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
