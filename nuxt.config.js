const glob = require('glob')
const path = require("path");

const markdownPaths = ['posts']

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css', type: 'text/css'},
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.css', type: 'text/css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nixie+One&family=Rajdhani:wght@500&display=swap', type: 'text/css'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/css/skeleton.css',
    '~/css/custom.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-moment'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  generate: {
    routes: dynamicMarkdownRoutes()
  },  
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
 
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, "content"),
        loader: "frontmatter-markdown-loader"
      });
    }
  }
}


function dynamicMarkdownRoutes() {
  return [].concat(
    ...markdownPaths.map(mdPath => {
      return glob.sync(`${mdPath}/*.md`, { cwd: 'content' })
        .map(filepath => `${mdPath}/${path.basename(filepath, '.md')}`);
    })
  );
}