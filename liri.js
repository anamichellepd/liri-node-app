//code to read and set any environment variables with the dotenv package
require("dotenv").config();

//code required to import the keys.js file and store it in a variable
var keys = require("./keys.js");

//access keys information
var spotify = new Spotify(keys.spotify);
