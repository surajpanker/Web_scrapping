
// var cheerio = require('cheerio');
// var request = require('request')

// using request module
// const Result =[];
// request(
//   ' https://time.com/',
//   (error, res, html) => {
//     if (!error && res.statusCode === 200) {
//       const $ = cheerio.load(html);
      
//       for(let k=0;k<5;k++) {
//       var li1 = $('h2').eq(k)
//       const arr = li1.html()
//       const index = li1.html().indexOf('"')
//       let link ='';
//       for(let i=index+1;arr[i]!='"';i++)
//       {
//         link+=arr[i];
//       }      
//       let Link1="https:/"+link;


//       let title = '';
//       const arr1 = li1.html();
//        const index1 = li1.html().indexOf('>')
//       for(let i=index1+1;arr1[i]!='<';i++)
//       {
//         title+=arr[i];
//       }      
//        const obj ={
//         Title:title,
//         Link:Link1
//       }
//         Result.push(obj)


//        }
//        var myJSON = JSON. stringify(Result);
//        console.log(myJSON)

//     }
//   }

// )





const cheerio = require("cheerio");
const axios = require("axios");

const siteUrl = "https://time.com/";


const fetchData = async () => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};

const getResults = async () => {
  const $ = await fetchData();
   

  const Result =[]; //resulting array

 // const $ = cheerio.load(html);
      
      for(let k=0;k<5;k++) {
      var li1 = $('h2').eq(k)
      const arr = li1.html()
      const index = li1.html().indexOf('"')
      let link ='';
      for(let i=index+1;arr[i]!='"';i++)
      {
        link+=arr[i];
      }      
      let Link1="https:/"+link;


      let title = '';
      const arr1 = li1.html();
       const index1 = li1.html().indexOf('>')
      for(let i=index1+1;arr1[i]!='<';i++)
      {
        title+=arr[i];
      }      
       const obj ={
        Title:title,
        Link:Link1
      }
        Result.push(obj)


       }
       var myJSON = JSON. stringify(Result);
      // console.log(myJSON)





   return myJSON;
    
  
    
  
};

module.exports = getResults;
