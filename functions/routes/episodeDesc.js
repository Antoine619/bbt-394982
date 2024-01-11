const bbt = require('big-bang-theory');


const episodeDesc = (req, res) => {  
    summary = ""  
    for(i = 0; i < 279; i++ ){
        if(bbt._embedded.episodes[i].summary.includes(req.params.index)){
             summary = bbt._embedded.episodes[i].summary;
        };
      }
      
      if (summary != "") {
        res.status(200).json({
            success: true,
            summary: summary,
        })
      } else {
        res.status(200).json({
            success: false,
            message: "no description matching keyword",
        });
      }
}


module.exports = episodeDesc;