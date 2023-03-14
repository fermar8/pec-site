const basePath = process.env.NODE_ENV === 'production'
? '/pec-site'
: '';

module.exports = {
    env: {
      basePath,
    },
  }