const express = require('express');
const morgan = require('morgan');
const router = require('./router');
const path = require('path');

const app = express();

const port = 8000 || process.env.port;

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, '../app/dist')));
app.use(router);

const server = app.listen(port, () => {
	var host = server.address().address  === '::' ? 'localhost' : server.address().address;
	console.log(`Server listening at http://${host}:${port}`);
});
