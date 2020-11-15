'use strict';
const path = require('path');
const express = require('express');
const fs = require('fs');
const http = require('http');

// Constants
const PORT = 8080;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'assets/index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);