/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {BlogPosts} = require('./module');

router.get('/', (req, res) => {
  res.json(BlogPosts.get);
});

router.post('/', jsonParser, (req, res) =>{
  const requireFields = ['name', 'checked'];
    for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }
  }
  const item = BlogPosts.create(req.body.name, req.body.checked);
  res.status(201).json(item);
});
