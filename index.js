// const axios = require("axios");
//need to put github api address here
let queryurl = axios
  .get("`https://api.github.com/users/${response.username}/repos?per_page=100`")
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

inquire.prompt(questions);
// .then(function (response) {
//     console.log(JSON.stringify(response))
//     console.log(response.username);
//     console.log(response.color);
//     console.log(generateHTML(response));
// });



function writeToFile(fileName, data) {
    fs.writeFile("log.txt", process.argv[2], function(err) {

        // if (err) {
        //   return console.log(err);
        // }
      
        // console.log("Success!");
      
      });
 
}


// function init() {

// init();

function generateHTML(data) {
    return `<!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <title>Document</title>
        
     </head>
     
     <body>
     </body>
    </html>  
