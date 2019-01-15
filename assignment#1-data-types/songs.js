/* 
* Description: JavaScript Assignment #1 - Data Types
* Author: Kamal
* Date: 1/15/2019
*/

//string types
var songName = "Let me love you";
var music = "DJ Snake";
var feat = "Justin Biber";

//number
var year = 2016;

//string
var youtubeUrl = "https://www.youtube.com/watch?v=euCqAq6BRa4";

//boolean type
var isPopular = true;

//array
var tags = ["#justinbiber","#djsnake", "#letmeloveyou"];

//object
var song = {
  name: "Let me love you",
  year: 2016,
  isPopular: true,
  music: "DJ Snake",
  feat: "Justin Biber",
  tags: ["#justinbiber","#djsnake", "#letmeloveyou"],
  weblink: "https://www.youtube.com/watch?v=euCqAq6BRa4",
  print: function (){
    console.log ("########## Print Song Object #############")
    console.log("Song Name: " + this.name);
    console.log("By: " + this.music + " - " + this.feat);
    console.log("Popular song: " + this.isPopular);
    console.log("Video Link: " + this.weblink);
    console.log("Released Year: " + this.year);
    console.log("Tags: " + this.tags.join(","));    
    console.log ("########## End #############")
  }
};

// Print object 
song.print();

// Print individual properties
console.log(songName);
console.log(music);
console.log(year);
console.log(tags);
console.log(isPopular);
console.log(song.name);

