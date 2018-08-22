const axios = require('axios');

let comic = {}

const getComic = (req, res, next) => {
  axios.get(`https://xkcd.com/${Math.floor((Math.random() * 2034) + 1)}/info.0.json`)
    .then(response => comic = response.data)
    .then(() => res.status(200).json(comic));
}

const editComic = (req, res, next) => {
  console.log(req.body)
  const {transcript} = req.body;
  comic.transcript = transcript;
  res.status(200).json(comic);
}



module.exports = {
  getComic,
  editComic
}