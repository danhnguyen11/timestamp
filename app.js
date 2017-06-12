var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var port = process.env.PORT
var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/:dateVal',function(req,res,next){
   var dateVal = req.params.dateVal;
  
   var dateformatttingOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
   };

   if(isNaN(dateVal)){
       var naturalDate = new Date(dateVal);
       naturalDate = naturalDate.toLocaleDateString("en-us", dateformatttingOptions);
       var unixDate = new Date(dateVal).getTime()/1000;
   }
   else{
       var unixDate = dateVal;
       var naturalDate = new Date(dateVal)*1000;
       naturalDate = naturalDate.toLocaleDateString("en-us", dateformatttingOptions);
   }

   res.json({unix: unixDate, natural: naturalDate});
});




app.listen(port || 3030 ,function(){
    console.log("It's working....");
});