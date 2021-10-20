const express = require('express');
const bodyParser = require('body-parser');
const mailchimp = require('@mailchimp/mailchimp_marketing');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


app.get('/' , (req, res)=>{
    res.sendFile(__dirname +'/index.html');
});

app.post('/sign-In', (req, res)=>{
    res.sendFile(__dirname + "/signIn.html");
});
app.post('/dashboard', (req, res)=>{
    res.sendFile(__dirname + "/dashboard.html");
})

app.listen(port, ()=>{
    console.log(`...server is running at port ${port}`);
});