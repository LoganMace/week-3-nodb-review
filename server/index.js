const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const port = 3001;
const app = express();

const {getComic, editComic} = require('./ctrl');

app.use(json());
app.use(cors());

app.get('/api/comic', getComic);
app.put('/api/comic', editComic);

app.listen(port, () => console.log(`Listening on port: ${port}`));