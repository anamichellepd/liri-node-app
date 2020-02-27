# liri-node-app

WHAT IS THE APP TRYING TO SOLVE?
The app is getting information about what the user searches.

GENERAL OVERVIEW:
a user can type in:

1. A band/artist
2. A song name
3. A movie name

The computer will then search and output the following information:

1. Band/Artist (using BandsInTown)
   - Venue name
   - Venue location
   - Date of event (using moment MM/DD/YYYY)
2. Song name (using Spotify)
   - Artist(s)
   - Song name
   - Preview link of song from Spotify
   - Album song is on
   - (if none is given, "The Sign" by Ace of Base will be on display automatically)
3. Movie name (using OMDb)
   - Movie title
   - Year of release
   - OMDb rating
   - Rotten Tomatoes rating
   - Country is was made in
   - Language of movie
   - Plot
   - Actors
   - (if none is given, "Mr. Nobody" will show up automatically)

HOW TO RUN THE APP:

1. User is prompted three questions where they need to input a response:
   1. Band/artist name
   2. Song name
   3. Movie name
2. The app will then connect to the APIs for BandsInTown, Spotify and OMDb to retrieve the specific information mentioned above.

SCREENSHOTS

LINK FOR DEPLOYED VERSION OF APP

TECHNOLOGIES USED IN APP:

- Bandsintown API
- OMDB API
- Spotify API
- Axios
- JSON package
- JavaScript
- Node

MY ROLE IN THE APP DEVELOPMENT
Creator from start to finish
