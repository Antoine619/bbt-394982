const bbt = require('big-bang-theory');

const episodeAirTime = (req, res) =>{
    if(req.params.index < 279 && req.params.index > 0){
        res.status(200).json({
          success: true,
          index: req.params.index,
          data: bbt._embedded.episodes[req.params.airtime]
        });
      }
      else {
        console.log("index out of bounds")
        res.status(200).json({
          success: false,
          index: req.params.index,
          message: "index value out of range. There are only 279 episodes of this show"
        })
      }
}

module.exports = episodeAirTime;