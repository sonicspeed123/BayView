/** @type {import('next').NextConfig} */

import "./src/utils/BayLoader.mjs";

const nextConfig = (a, { defaultConfig }) => {
  return {
    ...defaultConfig,
    experimental: {
      serverActions: true,
      esmExternals: "loose"
    },
    redirects: async () => {
      return [
        {
          source: "/",
          permanent: true,
          destination: "/home"
        }
      ];
    },
    webpack: (config, ctx) => {
      config.module.rules.push({
        test: /\.node$/,
        loader: "node-loader"
      });
      return config;
    }
  };
};

export default nextConfig;
