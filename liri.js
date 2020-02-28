//code to read and set any environment variables with the dotenv package
require("dotenv").config();

//code required to import the keys.js file and store it in a variable
var keys = require("./keys.js");
var axios = require("axios");

//access keys information
var spotify = keys.spotify;

// NPM Package inquirer
var inquirer = require("inquirer");

//run axios and after that, a .then
axios
  .get(
    "https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp"
  )
  //Creating a prompt for some questio:
  .then(function(response) {
    // if ((process.argv[2] = "concert-this")) {
    //   console.log(
    //     "https://rest.bandsintown.com/artists/" +
    //       process.argv.slice(3).join("+") +
    //       "/events?app_id=codingbootcamp"
    //   );
    //   console.log("Venue: " + concertThis[0].venue.name);
    // }
    console.log(response[0].data[0].venue.name);
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

//REQUIRE AXIOS AND THEN AXIOS.GET

//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.

//THIS WAS MY ORIGINAL THOUGHT EARLIER
//   .prompt([
//     //ask the user what they would like to do with a list to choose from
//     {
//       type: "checkbox",
//       message: "What are you looking for?",
//       choices: ["Concert", "A song", "A movie", "Random"],
//       name: "choice"
//     }
//   ])

//   .then(function(response) {
//     if ((response.choices = [0])) {
//       console.log("it's working");
//       inquirer
//         .prompt([
//           //ask for band/artist name
//           {
//             type: "input",
//             message: "What is the name of the band/artist?",
//             name: "artist"
//           }
//         ])
//         .then(function(concert) {
//           console.log(concert.artist);
//         });
//     }
//   });
