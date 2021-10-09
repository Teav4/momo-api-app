class LoginController {
  
  login(req, res) {
    
    return res.send("login api.")
  }

  
}

module.exports = new LoginController
