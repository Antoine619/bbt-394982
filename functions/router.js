const episodeIndex = require('./routes/episodeIndex');
const router = require('express').Router();
const episodes = require('./routes/episodes');
const episodeAirTime = require('./routes/episodeAirTime');

router.get("/episodes", episodes);
router.get("/episode-index/:index", episodeIndex); 
router.get("/airtime/:airtime", episodeAirTime);

module.exports = router;