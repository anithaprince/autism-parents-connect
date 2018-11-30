// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const router = express.Router();
// =======================================
//              DATABASE
// =======================================
const Events = require('../models/events.js');

// =======================================
//              ROUTES
// =======================================
/************* Index Route***********************/
router.get('/', (req, res)=>{
  Events.find({}, (err, foundEvents)=>{
    res.json(foundEvents);
  });
});

/************* Create Route***********************/

router.post('/', (req, res)=>{
  Events.create(req.body, (err, createdEvent)=>{
    res.json(createdEvent);
  })
})
// curl -X POST -H "Content-Type: application/json" -d '{"title":"Fundraising for Autism", "image":"images/event1.jpg","details" : "We are grateful to the many individuals and organizations that unite to raise money for those touched by autism spectrum disorder"}' http://localhost:3000/events
/************* Delete Route ********************/
router.delete('/:id', (req, res)=>{
  Events.findByIdAndRemove(req.params.id, (err, deletedEvent)=>{
    res.json(deletedEvent);
  });
});


/************* Edit Route ********************/
router.put('/:id', (req, res)=>{
  Events.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedEvent)=>{
      res.json(updatedEvent);
  });
});

/************* Show Route ********************/

router.get('/:id',(req,res)=>{
  Events.findById(req.params.id, (err, foundEvent)=>{
    res.json(foundEvent);
  })
})
module.exports = router;
