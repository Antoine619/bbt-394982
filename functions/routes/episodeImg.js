const bbt = require('big-bang-theory');


const episodeImg = (req, res) => { 
    if(req.params.index < 279 && req.params.index > 0){
    img = bbt._embedded.episodes[req.params.index].image.original;
    res.status(200).json({
        success: true,
        index: req.params.index,
        data: img,
    })
}
else {
    res.status(200).json({
        success: false,
        message: "index value out of range. There are only 279 episodes."
    })
}
}



module.exports = episodeImg;