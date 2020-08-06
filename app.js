const express =require('express');
const app =express();
const getResults = require("./index");

/* GET home page. */
app.get("/getTimes", async (req, res)=> {
  const result = await getResults();
  //console.log(result)
  res.send(result);
  
});
const port = 5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))