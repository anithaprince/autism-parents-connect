// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const router = express.Router();
// =======================================
//              DATABASE
// =======================================
const Blogs = require('../models/blogs.js');

// =======================================
//              ROUTES
// =======================================
/************* Index Route***********************/
router.get('/', (req, res)=>{
  Blogs.find({}, (err, foundBlogs)=>{
    res.json(foundBlogs);
  });
});
//curl http://localhost:3000/blogs

/************* Create Route***********************/

router.post('/', (req, res)=>{
  Blogs.create(req.body, (err, createdBlog)=>{
    res.json(createdBlog);
  })
})

// curl -X POST -H "Content-Type: application/json" -d '{"heading":"harry potter", "image":"https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg","posted_by" : "Anitha"}' http://localhost:3000/blogs

/************* Delete Route ********************/
router.delete('/:id', (req, res)=>{
  Blogs.findByIdAndRemove(req.params.id, (err, deletedBlog)=>{
    res.json(deletedBlog);
  });
});

// curl -X DELETE http://localhost:3000/blogs/5bff5906efd21413f83d44d1

/************* Edit Route ********************/
router.put('/:id', (req, res)=>{
  Blogs.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedBlog)=>{
      res.json(updatedBlog);
  });
});

//curl -X PUT -H "Content-Type: application/json" -d '{"comments":"Nice , great work"}' http://localhost:3000/blogs/5bff59c3eff02d1412a699a8

/************* Show Route ********************/

router.get('/:id',(req,res)=>{
  Blogs.findById(req.params.id, (err, foundBlog)=>{
    res.json(foundBlog);
  })
})
module.exports = router;
