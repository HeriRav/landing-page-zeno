import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Zeno`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `ZENO est une ESN qui transforme vos idées en solutions digitales performantes.`,
    author: `@zeno-inno`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image",
    `gatsby-plugin-react-helmet`, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon-zeno.png"
    }
  }, "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};

export default config;
