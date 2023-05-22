import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api/comments', async(req, res, next)=>{
    const { limit }= req.query;
    const data = await fetch('https://jsonplaceholder.typicode.com/comments');
    let response = await data.json();
    if(limit){
        response = response.slice(0, limit);
    }
    res.send(response);
})

app.get('/api/posts', async(req, res, next)=>{
    const { limit }= req.query;
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    let response = await data.json();
    if(limit){
        response = response.slice(0, limit);
    }
    res.send(response);
})

app.listen(3000, ()=>{
    console.log('APP is running on port 3000');
})