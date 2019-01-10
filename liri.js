require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require('axios');
var spotifyConfig = require('./keys.js');


var spotify = new Spotify(spotifyConfig);


const [nodePath, filePath, command, ...args] = process.argv;


var argsJoined = args.join(' ');
if (command === 'spotify-this-song') {
    findSong(argsJoined);
}


else if (command === 'movie-this') {
    findMovie(argsJoined);
}

else {
    console.log('no supported');
}

function findSong(song) {
    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        // fs.writeFile('dump.json', JSON.stringify(data), () => { });
        console.log(data.tracks.items[0].artists[0].name);
        console.log(data.tracks.items[0].preview_url);
        console.log(data.tracks.items[0].name);
        console.log(data.tracks.items[0].album.name);
    });
};
function findMovie(movie) {
    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
        function (response) {
            console.log("The movie's title is: " + response.data.Title);
            console.log("The movie's rating is: " + response.data.Rated);
            console.log("The movie came out in: " + response.data.Year);
            console.log("The movie has a rotten tomatoes rating of: " + response.data.Ratings[1].Value);
            console.log("The movie has an imdb rating of " + response.data.Ratings[0].Value);
            console.log("The movie was made in: " + response.data.Country);
            console.log("The movie's Plot: " + response.data.Plot);
            console.log("The movie's Actors are: " + response.data.Actors);
        });
};


