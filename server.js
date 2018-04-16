const express = require('express');
const request = require('request');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
//const todo = require('./todo.js');

var app = express();

var accounts = [];

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) 

// app.use(express.json());
// app.use(express.urlencoded());

hbs.registerPartials(__dirname + '');

app.set('view engine', 'hbs');
// app.use('/views', express.static(__dirname + '/views'));
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());


app.get('/', (request, response) => {
	response.render('home.hbs')
});



app.get('/json', (request, response) => {
	response.sendfile(__dirname+'/accounts.json')
});


/*app.post('/body', (request, response) => {
	//new page
	response.render('home.hbs')
	//what to do with info
    todo.addUser(request.body.emailAddr, {
    	'passwd':request.body.password1,
    	'fname':request.body.firstName,
    	'lname':request.body.lastName,
    	'movies': {}
    });
});
*/

app.listen(port, () => {
	console.log('Server is up on the port 8080');
});