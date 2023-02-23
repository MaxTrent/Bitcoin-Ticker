const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); 
const request = require('request');
const { response } = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res)=>{
    var crypto = req.body.crypto;
    var fiat = req.body.fiat;
    var amount = req.body.amount;
    
    var config = {
        baseURL: 'https://apiv2.bitcoinaverage.com/convert/global',
        method: 'get',
        params: {
            from: crypto,
            to: fiat,
            amount: amount,
        },
        headers: {'x-ba-key': 'Nzk5ZTEwZjljNjAwNDIyY2EyZDNlODViN2U4MzJhZTY'},
    }

    //  request('https://official-joke-api.appspot.com/random_joke', (err, res, body)=>{
    //     console.log(res.body);
    // });

    axios(config).then((response)=>{
    // var body = JSON.parse(response.data);    
    // var price = body.last;
    var price = response.data.price;
    var date = response.data.time;

    console.log(price);
    res.write(`<p>The current date is ${date}</p>`);
    res.write(`<h1>${amount}${crypto} is currently worth ${price}${fiat}</h1>`);
    // res.send();
    }).catch((err)=>{
        console.log(err);
    });
});


app.listen(3000, ()=>{
    console.log('Server is active');
}); 