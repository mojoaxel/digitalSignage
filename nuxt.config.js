module.exports = {
	head: {
		meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  },
  css: [
    '~/css/main.css'
  ],
  router: {
    base: '/digitalSignage/'
  },
  generate: {
    dir: 'docs'
  }
}
