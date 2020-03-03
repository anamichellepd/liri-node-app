//code to read and set any environment variables with the dotenv package
require("dotenv").config();

//code required to import the keys.js file and store it in a variable
var keys = require("./keys.js");
var axios = require("axios");
var fs = require("fs");

var Spotify = require("node-spotify-api");

// NPM Package inquirer
var inquirer = require("inquirer");

//To get the Artist name inside of the link

if (process.argv[2] === "concert-this") {
  var artistName = [];
  for (var i = 3; i < process.argv.length; ++i) {
    artistName.push(process.argv[i]);
  }
  var artistString = artistName.join("+");
  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        artistString +
        "/events?app_id=codingbootcamp"
    )
    .then(function(response) {
      // if (process.argv[2] === "concert-this") {
      console.log("Artist name: " + artistString);

      // console.log(
      //   "https://rest.bandsintown.com/artists/" +
      //     process.argv.slice(3).join("+") +
      //     "/events?app_id=codingbootcamp"
      // );
      console.log("Venue name: " + response.data[0].venue.name);
      console.log(
        "Venue location: " +
          response.data[0].venue.city +
          ", " +
          response.data[0].venue.country
      );
    });
} else if (process.argv[2] === "spotify-this-song") {
  var spotify = new Spotify(keys.spotify);
  var songName = [];

  for (var i = 3; i < process.argv.length; i++) {
    songName.push(process.argv[i]);
  }
  var songString = songName.join("+");

  var songNormal = songName.join(" ");

  spotify.search({ type: "track", query: songString }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    console.log("Artist name: " + data.tracks.items[0].album.artists[0].name);
    console.log("Song name: " + songNormal);
    console.log(
      "Listen to the song here: " + data.tracks.items[0].external_urls.spotify
    );
    console.log("The name of the album is: " + data.tracks.items[0].album.name);
  });
} else if (process.argv[2] === "movie-this") {
  var movieName = [];
  for (var i = 3; i < process.argv.length; ++i) {
    movieName.push(process.argv[i]);
    var movieString = movieName.join("+");
    var queryURL =
      "http://www.omdbapi.com/?t=" +
      movieString +
      "&y=&plot=short&apikey=trilogy";
  }
  axios.get(queryURL).then(function(response) {
    console.log("Title: " + response.data.Title);
    console.log("Release year: " + response.data.Year);
    console.log("IMDb rating: " + response.data.imdbRating);
    console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value);
    console.log("Country where movie was produced: " + response.data.Country);
    console.log("Language of the movie: " + response.data.Language);
    console.log("Movie plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);
  });
} else if (process.argv[2] === "do-what-it-says") {
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    console.log(data);
  });
}

//creating a new, empty file using writeFile
// fs.appendFile(log.txt, "data to append", function(err) {
//   if (err) throw err;
//   console.log(log.txt);
// });
