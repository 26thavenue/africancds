/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://acdss.com.ng', 
  generateRobotsTxt: true,         
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/host', '/login'],           
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: '/host',
      },
      {
        userAgent: '*',
        disallow: '/login',
      },
    ],
  },
};
