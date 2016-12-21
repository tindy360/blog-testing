/*jshint esversion: 6 */
const express = require ('express');
// handle HTTP layer logging
const morgan = require ('morgan');

const {BlogPosts} = require ('./module');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const blogRouter = require('./blogRouter.js');
app.use(router)
app.listen(process.env.PORT  || 8080, () =>{
  console.log('App running on${porocess.env.PORT || 8080}');
});
