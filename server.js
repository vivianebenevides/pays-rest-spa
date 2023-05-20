const express = require('express')
const app = express();
const fs = require('fs')
const request = require('request')
const {PORT} = require('./config.js')
// const {API_KEY} = require('./config.js');
const { log } = require('console')
const path = require('path')

app.get('/accueil', function (req, res){
    //const ticker = req.params.id
    //console.log(ticker)
    const url = 'https://restcountries.com/v3.1/all';

    request.get({
        url: url,
        json: true,
        headers: {'User-Agent': 'request'}
    
    }, (err, res, data) => {
        if(err){
            console.log('Error : ', err)
        } else if (res.statusCode !== 200) {
            console.log("Status", res.statusCode)
        } else {
            console.log(data);
            const newData = JSON.stringify(data)
            fs.writeFile('pays.json', newData, err =>{
                if(err) throw err
                console.log('sucess')
            })
        }
    })
    res.end('Sucess')
})

app.get('/accueil-pays', function(req, res){
    const ticker = req.params.id
    fs.readFile(__dirname+"/"+"pays"+".json", "utf8", function(err, data){
        res.send(JSON.parse(data))
    })
})

app.listen(PORT || 4001, () => {
    console.log('Server running on port', PORT);
})


// server.js

app.use("/static", express.static(path.resolve(__dirname, 'frontend', 'static')))

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'))
})

app.listen(8080, () => console.log('server running...'))

