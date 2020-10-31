const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  
  //let {statusCode}= resp;
  // console.log(resp);
  let r = ''
 resp.on('data',(response)=>{
   r+= response
 });
 resp.on('end', (response) => {
   const data=JSON.parse(r).data;
   let result = 0;
   data.split(',').forEach(item => {
     if (!isNaN(item.split('=')[1])&& +(item.split('=')[1]) >= 50) {
       result ++;
     }
   })
   console.log(result);
 })
});
s