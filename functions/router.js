const episodeIndex = require('./routes/episodeIndex');
const router = require('express').Router();
const episodes = require('./routes/episodes');
const episodesAirTime = require('./routes/episodeAirTime');
const episodeDesc = require('./routes/episodeDesc');
const episodeTitle = require('./routes/episodeTitle');
const episodeImg = require('./routes/episodeImg.js');

router.get("/episodes", episodes);
router.get("/episode-index/:index", episodeIndex); 
router.get("/airtime/:index", episodesAirTime);
router.get("/desc/:summary", episodeDesc);
router.get("/title/:name", episodeTitle);
router.get("img/:index", episodeImg);

module.exports = router;