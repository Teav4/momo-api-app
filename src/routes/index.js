const errorController = require('../controllers/ErrorController')

function route(app) {

  // default -> home page
  app.use('/', errorController.notFound)

}

module.exports = route;
