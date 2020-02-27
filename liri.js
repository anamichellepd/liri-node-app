//code to read and set any environment variables with the dotenv package
require("dotenv").config();

//code required to import the keys.js file and store it in a variable
var keys = require("./keys.js");

//access keys information
var spotify = keys.spotify;

// NPM Package inquirer
var inquirer = require("inquirer");
//Creating a prompt for some questions:
inquirer
  .prompt([
    //ask the user what they would like to do with a list to choose from
    {
      type: "checkbox",
      message: "What are you looking for?",
      choices: ["Concert", "A song", "A movie", "Random"],
      name: "choice"
    }
  ])

  .then(function(response) {
    if (response.choices === "Concert") {
      inquirer
        .prompt([
          //ask for band/artist name
          {
            type: "input",
            message: "What is the name of the band/artist?",
            name: "artist"
          }
        ])
        .then(function(concert) {
          console.log(concert.artist);
        });
    } else {
      console.log("not concert");
    }
  });
