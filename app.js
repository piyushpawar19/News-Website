// ba7840e11f684ebd9157abad2734dee8
const express = require('express');
const app = express();
const path = require('path');
const bodyParser= require('body-parser');
const port = 5000; 


//static files
app.use(express.static(path.join('public')));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));

//template engine
app.set('views','./src/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

//routes
const newsRouter = require('./src/routes/news');

app.use('/',newsRouter);
app.use('/article',newsRouter);

 
//listening
app.listen(port, ()=>{
    console.log(`listening on ${port}`);
});