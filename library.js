var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function() {
  for(var key in library.playlists) {
  console.log(key + ": " + library.playlists[key].name + " - " + library.playlists[key].tracks.length + " tracks");

  }
}
// printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var key in library.tracks) {
    var track = library.tracks[key];
    console.log(track.id + ":" + " " + track.name + " by " + track.artist)
  }
}
 printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var playlist = library.playlists[playlistId];

  console.log(playlist.id + ': ' + playlist.name + ' - ' + playlist.tracks.length + ' tracks');

  for(var i = 0; i < playlist.tracks.length; i++) {
    var trackId = playlist.tracks[i];
    var track = library.tracks[trackId];
    console.log(trackId + ': ' + track.name + " by " + track.artist + " " + track.album)
  }
}

 printPlaylist('p01');
// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var playlist = library.playlists[playlistId];
  playlist.tracks.push(trackId);
}

addTrackToPlaylist('t01', 'p01');

console.log(library.playlists);

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  let id = uid();
  let track = {
    id : id,
    name : name,
    artist : artist,
    album : album
  };

library['tracks'][id] = track;

console.log(library.tracks);
}
addTrack("Mes", "Song", "hihi");

// adds a playlist to the library

var addPlaylist = function (name) {
  let id = uid();
  let playlist = {
    id : id,
    name : name,
    tracks : [],
  };

library['playlists'][id] = playlist;

console.log(library.playlists);

}

addPlaylist("New Hot Fire")

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}