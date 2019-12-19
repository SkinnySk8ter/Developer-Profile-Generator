const axios = require("axios");
//need to put github api address here
axios
  .get("https://www.omdbapi.com/?t=The%20Matrix&apikey=trilogy")
  .then(function(res) {
    console.log(res.data);
  });

  const fs = require('fs')
  const inquire = require('inquirer')

const questions = [
  
];

function writeToFile(fileName, data) {
 
}

function init() {

init();