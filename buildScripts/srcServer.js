"use strict"
const express = require('express');
const path = require('path');
const open = require('open');
const port = process.env.PORT || 3000;

const app = express();
app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, err => {
	if(err)
		console.log(err);
	else
		console.log(`Listenting onto http://localhost:${port}`);
});