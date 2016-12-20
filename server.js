/*jshint esversion: 6 */
const express = require ('express');
// handle HTTP layer logging
const morgan = require ('morgan');

//const {BlogPosts} = require ('./module');
const app = express();

app.use(morgan('common'));
app.use(express.static('public'));

app.listen(process.env.PORT  || 8080, () =>{
  console.log('App running on${porocess.env.PORT || 8080}');
});
