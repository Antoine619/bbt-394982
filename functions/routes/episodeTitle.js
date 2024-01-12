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
    console.log(titleList.length)
    if(titleList.length < 0) {
        res.status(200).json({
            success: false,
            message: "no title matching keyword",
        });
      } else {
        res.status(200).json({
            success: true,
            index: req.params.index,
            title: titleList,
        })
    }
}



module.exports = episodeTitle;