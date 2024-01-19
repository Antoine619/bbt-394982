const bbt = require('big-bang-theory');


const episodeDesc = (req, res) => { 
  episodeList =[]; 
    summary = "";  
    for(i = 0; i < 279; i++ ){
        if(bbt._embedded.episodes[i].summary.includes(req.params.summary)){
             summary = bbt._embedded.episodes[i];
             episodeList.push(summary);
        };
    }
        if(summary != [])
        res.status(200).json({
            success: true,
            index: req.params.index,
            summary: episodeList,
        })
       else {
        res.status(200).json({
            success: false,
            message: "no description matching keyword",
        });
      }
}



module.exports = episodeDesc;