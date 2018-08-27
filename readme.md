# Static FE Starter

This starter kit includes support for:

1. Webpack
2. React.js
3. Sass
4. Babel
5. PostCSS: Autoprefixer
6. Travis CI (to deploy production applications. This is optional and requires additional configuration within Github Settings and Travis CI interface).
7. Font libraries (not included by default, but necessary loaders and empty directory are included)

## To get started

1. Clone the repo and `cd` into the main repo directory.
2. Run `yarn install` or `npm install` to install all package dependencies.
3. To start the development server, run `yarn start` or `npm run start`. The development server runs in development mode, with HMR (Learn more about Webpack's [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/)).
4. To build your application, run `yarn build` or `npm run build`. Builds run in production mode and generate three files: `dist/main.css`, `dist/main.js`, and `dist/index.html`.