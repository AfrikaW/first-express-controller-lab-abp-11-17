const SiteController = {};
const app = require('./app.js')

SiteController.index = (function (req, resp){
  const welcomeText = "welcome to Afrika's Html"
  const favoriteThings = ["reading", "coding", "fighting","teaching", "dancing"]
  const viewData = {
    "welcomeText": welcomeText,
    name: "Afrika",
    school: "Flatiron School",
    colors: ["Red", "Yellow", "Blue"],
    favoriteThings: favoriteThings
  }
  resp.render("index", viewData)
  })
}
SiteController.about =  function (req, resp){
  resp.render ("about")
}
SiteController.other = function (req, resp){
  resp.render ("other")
}


module.exports = SiteController;
