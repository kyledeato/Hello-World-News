const { request, response } = require("express");
const { News } = require("../model/news.models");
// //create
// module.exports.createAuthor = (request, response) => {
//     const {name} = request.body;
//     Author.create({
//       name 
//     })
//     .then(author=>response.json(author))
//     .catch(err=>response.status(400).json(err))
// }

// get all
module.exports.getAllNews = (request, response) => {
    //sort from the db
    News.find({})
        .then(news => response.json(news))
        .catch(err=>response.json(err))
}

// get one
module.exports.getOneNews = (request, response) => {
    News.findOne({_id:request.params.id})
        .then(news=> response.json(news))
        .catch(err=>response.json(err))
}

// //update
// module.exports.updateNews = (request, response) => {
//     Author.findOneAndUpdate({_id:request.params.id}, request.body, {new:true, runValidators: true})
//         .then(updatedAuthor=>response.json(updatedAuthor))
//         .catch(err=>response.status(400).json(err))
// }

//delete
module.exports.deleteNews = (request, response) => {
    News.deleteOne({ _id: request.params.id })
        .then(deleteConfirm => response.json(deleteConfirm))
        .catch(err=> response.json(err))
}