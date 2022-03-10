let kyotoSongData = {
  title: "Kyoto",
  artist: "Phoebe Bridgers",
  image:
    "https://images.genius.com/7d0d55bc0879faa98cdadbef8a19d211.1000x1000x1.png",
  link: "https://www.youtube.com/watch?v=Tw0zYd0eIlk",
};

let moodRingSongData = {
  title: "Mood Ring",
  artist: "Lorde",
  image:
    "https://media.pitchfork.com/photos/60c282213bf3890797f238ab/1:1/w_1200,h_1200,c_limit/lordesolarpower.jpeg",
  link: "https://www.youtube.com/watch?v=P103bWMdvtA",
};

let noBodyNoCrimeSongData = {
  title: "no body, no crime",
  artist: "Taylor Swift",
  image:
    "https://images.genius.com/3e354c719fe236ab4a75adc6ea4c7fca.1000x1000x1.png",
  link: "https://www.youtube.com/watch?v=IEPomqor2A8",
};

// Array of objects
let playlistData = [kyotoSongData, moodRingSongData, noBodyNoCrimeSongData];

function displaySongInfo() {
  playlistData.forEach(function (playlistData) {
    $(".songs").append(`<ul>${playlistData.title}</ul>`);
    $(".artists").append(`<ul>${playlistData.artist}</ul>`);
    $(".images").append(`<img src = ${playlistData.image}>`);
    $(".links").append(`<a href = ${playlistData.link}>Link</a>`);
  });
}

function emptySongInfo() {
  playlistData = [];
}

function addSongInfo() {
  let title = $(".title").val();
  let artist = $(".artist").val();
  let image = $(".image").val();
  let link = $(".link").val();
  
  let newSong = {
     
   };
  
  newSong.title = title;
  newSong.artist = artist;
  newSong.image = image;
  newSong.link = link;
  
  playlistData.push(newSong);
}

displaySongInfo();

$(".add").click(function () {
  // print something
  console.log("hi");
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});


