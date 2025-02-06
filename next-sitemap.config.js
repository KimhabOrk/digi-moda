/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://digimoda.site",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ["/api"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: "Googlebot",
        allow: ["/"],
      }
    ]
  },
  additionalSitemaps: [
    "https://digimoda.site/sitemap-0.xml"
  ]
};
