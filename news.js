const express = require('express');
const newsRouter= express.Router();
const axios = require('axios');

newsRouter.get('',async(req, res) => {
    // res.render('news')  

    try{
        const newsAPI = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ba7840e11f684ebd9157abad2734dee8');

        // console.log(newsAPI.data.articles);
        res.render('news',{articles :newsAPI.data.articles})
        

    }catch(error){
      
        if(error.response){
            res.render('news',{articles :null});
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }else if(error.requiest){
            res.render('news',{articles :null});
            console.log(error.requiest);
        }else {
            res.render('news',{articles :null});
            console.error('Error',error.message);
        }
    }
})

newsRouter.get('/:id',async(req, res) => {
    // res.render('news')  
    let articleId = req.params.id;
    try{
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=apple&from=2023-09-29&to=2023-09-29&sortBy=popularity&apiKey=ba7840e11f684ebd9157abad2734dee8/${articleId}`); 

        // console.log(newsAPI.data.articles);
        res.render('single_news',{article :newsAPI.data.articles})
        

    }catch(error){
      
        if(error.response){
            res.render('single_news',{article :null});
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }else if(error.requiest){
            res.render('single_news',{article :null});
            console.log(error.requiest);
        }else {
            res.render('single_news',{article :null});
            console.error('Error',error.message);
        }
    }
})


module.exports = newsRouter;