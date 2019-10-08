const express = require("express");
const knex = require("../db/client");

// router is an object which is sort of like app
const router = express.Router();

// router.get("/", (req, res) => {
//   knex
//     .select("*")
//     .from("articles")
//     .limit(10)
//     .orderBy("created_at", "DESC")
//     .then(articles => {
//       res.send(articles);
//     })
// });

router.get("/new", (req, res) => {
  res.render("clucks/new");
});

router.post("/new", (req, res) => {
    const imageUrl = req.body.imageurl;
    const content = req.body.content;
    const username = req.cookies.username;
    
    if (!username) {
        res.render('login');
      } else {

        knex("clucks")
          .insert({
            image_url: imageUrl,
            content: content,
            username: username,
          })
        //   res.send(username + content + imageUrl);
        //   .returning("*")
        //   .then(data => {
            .then(res.render('/'));
        //   });
    }
  });

  router.get("/", (req, res) => {
    let x = {'a': 'hello'};
    knex
      .select("*")
      .from("clucks")
      .limit(10)
      .orderBy("created_at", "DESC")
      .then(clucks => {
          console.log(clucks);
        res.render('clucks/index', {clucks: clucks});
        // res.send(clucks);
      })
  });


module.exports = router;