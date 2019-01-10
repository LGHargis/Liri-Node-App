var axios = require("axios");
var nodeArgs = process.argv;


const [nodePath, filePath, command, ...args] = process.argv;

var argsJoined = args.join(' ');
if (command === 'movie-this') {

}
else {
    console.log('not supported');
}
console.log("process.argv", args);

var queryUrl = "http://www.omdbapi.com/?t=" + argsJoined + "&y=&plot=short&apikey=trilogy";

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
    }
);
