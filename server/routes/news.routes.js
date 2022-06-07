const NewsController = require("../controllers/news.controller")

module.exports = function(app){
    app.get("/api/news", NewsController.getAllNews)
    app.get("/api/news/:id", NewsController.getOneNews)
    app.delete("/api/news/:id", NewsController.deleteNews)
}

