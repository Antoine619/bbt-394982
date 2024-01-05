const episodeIndex = require('./routes/episodeIndex');
const router = require('express').Router();
const episodes = require('./routes/episodes');

router.get("/episodes", episodes);
router.get("/episode-index/:index", episodeIndex); 

module.exports = router;