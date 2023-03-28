const express = require('express')
const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const multiparty = require('multiparty')

const app = express()
const port = process.env.PORT || 3000

if(require.main === module) {
  app.listen(port, () => {
    console.log( `Express started on http://localhost:${port}` +
      '; press Ctrl-C to terminate.' )
  })
} else {
  module.exports = app
}
