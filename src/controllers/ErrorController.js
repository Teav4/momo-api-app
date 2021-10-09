class ErrorController {
  
  notFound(req, res) {
    return res.send('Not Found.')
  }

  
}

module.exports = new ErrorController
