// Complete Day 1 goals here
let songs = ["Kyoto", "Mood Ring", "no body, no crime"];
let images = [
  "https://images.genius.com/7d0d55bc0879faa98cdadbef8a19d211.1000x1000x1.png",
  "https://media.pitchfork.com/photos/60c282213bf3890797f238ab/1:1/w_1200,h_1200,c_limit/lordesolarpower.jpeg",
  "https://images.genius.com/3e354c719fe236ab4a75adc6ea4c7fca.1000x1000x1.png",
];
let artists = ["Phoebe Bridgers", "Lorde", "Taylor Swift"];
let lengths = ["3:05", "3:46", "3:36"];
let links = ["https://www.youtube.com/watch?v=Tw0zYd0eIlk", "https://www.youtube.com/watch?v=P103bWMdvtA", "https://www.youtube.com/watch?v=IEPomqor2A8"];

function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  songs.forEach(function (title) {
    $(".songs").append(`<ul>${title}</ul>`);
  });
  images.forEach(function (image) {
    $(".images").append(`<img src = ${image}>`);
  });
  artists.forEach(function (artist) {
    $(".artists").append(`<ul>${artist}</ul>`);
  });
  lengths.forEach(function (lengths) {
    $(".lengths").append(`<ul>${lengths}</ul>`);
  });
  links.forEach(function (link) {
    $(".links").append(`<a href = >${link}</a>`);
  });
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
  // let userInput = $('.title').val();
  songs.push();
}

$("#add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
