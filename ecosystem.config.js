module.exports = {
  apps: [
    {
      name: 'seo-pages',
      script: 'bin/www.js',
      max_memory_restart: '512M',
      env: {
        PORT: '3000',
        NODE_ENV: 'production'
      }
    }
  ]
}
