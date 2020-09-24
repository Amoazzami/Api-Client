const request = require('request');

// implementing in Node with GET 

let breeds = process.argv.splice(2);
request("https://api.thecatapi.com/v1/breeds/search?q=" + breeds , function(error, response, body){
  if (error) {
  return console.log("there is an error");
  }
  console.log(body);
  const data = JSON.parse(body);
  console.log(data, "converted string");
  console.log(typeof data, "displays the type of data");
  //console.log(data[0].description, "accesses the first element of an array and returns description");
  if (data.length === 0 ) {
    console.log("not a breed");
  }
});
