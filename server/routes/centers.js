const express = require('express');
const Center = require('../models/Center');
const upload = require('../config/multer');
const mongoose = require ('mongoose');

const centers = express.Router();

centers.get('/', (req,res,next) => {
    Center.find({}).then(centers =>{
      res.json(centers);
    })
    .catch( e => res.json(e));
});



centers.get('/:id', (req,res,next) => {
    Center.findById(req.params.id).then(centers =>{
      res.json(centers);
    })
    .catch( e => res.json(e));
});

centers.delete('/:id', (req,res,next) => {
    Center.remove({ _id: req.params.id }).then( () =>{
      res.json({
        message:"Center removed"
      });
    })
    .catch( e => res.json(e));
});

centers.put('/:id', (req,res,next) => {
  const updates = {
    name: req.body.name,
    type: req.body.type,
    company: req.body.company,
    nif: req.body.nif,
    picture: req.body.picture,
    web: req.body.web,
    province: req.body.province,
    email: req.body.email,
    number: req.body.number,
    price: req.body.price,
    services: req.body.services,
    ratio: req.body.ratio,
   };

    Center.findByIdAndUpdate(req.params.id, updates).then(center =>{
      res.json(center);
    })
    .catch( e => res.json(e));
});


centers.post('/',upload.single('file'), (req, res, next) => {
  console.log('Imprimo req.body en /api/centers => ');
  console.log(req.body);
  const { name, type, company, nif, web, province, email, number, price, services, ratio } = req.body;
  const theCenter = new Center({
    name,
    type,
    company,
    nif,
    web,
    province,
    email,
    number,
    price,
    services,
    ratio,
    picture: `/uploads/${req.file.filename}`
  });
  console.log('POST');
  console.log(theCenter);
  theCenter.save().then( center => {
    res.json({
      message: 'New Center created!',
      id: theCenter._id
    });
  }).catch( error => res.json(error));
});

module.exports = centers;
