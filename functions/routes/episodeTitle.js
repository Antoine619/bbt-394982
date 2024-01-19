const bbt = require('big-bang-theory');


const episodeTitle = (req, res) => { 
  titleList =[]; 
    title = "";  
    for(i = 0; i < 279; i++ ){
        if(bbt._embedded.episodes[i].name.includes(req.params.name)){
             title = bbt._embedded.episodes[i];
             titleList.push(title);
        };
    }
        if(title != [])
        res.status(200).json({
            success: true,
            index: req.params.index,
            title: titleList,
        })
       else {
        res.status(200).json({
            success: false,
            message: "no description matching keyword",
        });
      }
}



module.exports = episodeTitle;