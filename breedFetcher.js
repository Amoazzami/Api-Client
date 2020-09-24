const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName , function(error, response, body) {
//     if (error) {
//       return "there is an error";
//     }
//     //console.log(body);
       const data = JSON.parse(body);
       callback(error, data[0].description)

//     // console.log(data, "converted string");
//     // console.log(typeof data, "displays the type of data");
//     // console.log(data[0].description, "accesses the first element of an array and returns description");
//     if (data.length === 0) {
//       return "not a breed"; 
//     } else {
//       return data[0].description;

//     }

 });
}

module.exports = { fetchBreedDescription };
