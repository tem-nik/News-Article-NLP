const dotenv = require('dotenv');
dotenv.config();

let projectData = {};
let urlArticle = {};
var path = require('path')
const express = require('express')

var AYLIENTextAPI = require('aylien_textapi');

var textapi = new AYLIENTextAPI({
    application_id: `${process.env.API_ID}`,
    application_key: `${process.env.API_KEY}`
});
const bodyParser = require('body-parser');

const app = express()
app.use(express.static('dist'))

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


app.post('/test', function (request, response) {
    let nameURL = request.body.input.url;
    console.log(request.body.input.url);
    textapi.sentiment({
        url: `${nameURL}`
    }, function (error, response) {
        if (error === null) {
            projectData['polarity'] = response.polarity;
            projectData['subjectivity'] = response.subjectivity;
            projectData['polarity_confidence'] = response.polarity_confidence;
            projectData['subjectivity_confidence'] = response.subjectivity_confidence;
            return projectData;
        }
    });
    response.send(projectData);
});

app.listen(5501, function () {
    console.log('Example app listening on port 5501!')
})