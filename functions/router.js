const episodeIndex = require('./routes/episodeIndex');
const router = require('express').Router();
const episodes = require('./routes/episodes');
const episodesAirTime = require('./routes/episodeAirTime');

router.get("/episodes", episodes);
router.get("/episode-index/:index", episodeIndex); 
router.get("/airtime/:index", episodesAirTime);

module.exports = router;