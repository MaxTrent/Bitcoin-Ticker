const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); 
const request = require('request');
const { response } = require('express');

const app = express();

// app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res)=>{

    // request('https://official-joke-api.appspot.com/random_joke', (err, res, body)=>{
    //     console.log(res.body);
    // });

    axios('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD', { headers: {'x-ba-key': 'Nzk5ZTEwZjljNjAwNDIyY2EyZDNlODViN2U4MzJhZTY'} }).then((response)=>{
        console.log(response.data);
    }).catch((err)=>{
        console.log(err);
    });
});


app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
}); 