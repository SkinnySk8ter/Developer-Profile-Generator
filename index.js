const axios = require("axios");
//need to put github api address here
axios
  .get("https://www.omdbapi.com/?t=The%20Matrix&apikey=trilogy")
  .then(function(res) {
    console.log(res.data);
  });

  const fs = require('fs')
  const inquire = require('inquirer')
//need to reference these for later
const questions = [
{
    type: "input",
    message: "What is name on Github?",
    name: "username"
},
{
    type: "input",
    message: "What is your favorite color?",
    name: "color"
}
  
];



function writeToFile(fileName, data) {
 
}

function init() {

init();