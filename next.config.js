/** @type {import('next').NextConfig} */
const fs = require("fs");
const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png)",

        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            type: "cookie",
            key: "authorized",
            value: "true",
          },
          {
            key: "Set-Cookie",
            value: `SameSite=Lax, SameSite=None; Secure `,
          },
        ],
      },
      {
        source: "/api/(.*)",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/account/Login",
        destination: "/Account/Login/",
      },
      {
        source: "/account/login",
        destination: "/Account/Login/",
      },
    ];
  },

  swcMinify: true,

  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
});

module.exports = nextConfig;
