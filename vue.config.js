module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'Portfolio - Fabio Gatti'
      return args
    })
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/'
    : '/'
}