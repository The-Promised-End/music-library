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
  playlists: {
    p01: { id: "p01",
          name: "Coding Music",
          tracks: ["t01", "t02"]
        },
    p02: { id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },


  printPlaylists: function() {
    for(var key in this.playlists) {
    console.log(key + ": " + this.playlists[key].name + " - " + this.playlists[key].tracks.length + " tracks");

    }
  },

  printTracks : function () {
    for (var key in library.tracks) {
      var track = library.tracks[key];
      console.log(this.id + ":" + " " + this.name + " by " + this.artist)
    }
  },


  printPlaylist : function (playlistId) {
    var playlist = library.playlists[playlistId];

    console.log(this.id + ': ' + this.name + ' - ' + this.tracks.length + ' tracks');

    for(var i = 0; i < this.tracks.length; i++) {
      var trackId = this.tracks[i];
      var track = this.tracks[trackId];
      console.log(trackId + ': ' + this.name + " by " + this.artist + " " + this.album)
    }
  },



  addTrackToPlaylist : function (trackId, playlistId) {
    var playlist = this.playlists[playlistId];
    this.tracks.push(trackId);
  },


  // generates a unique id
  // (use this for addTrack and addPlaylist)

  uid : function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },


  // adds a track to the library

  addTrack : function (name, artist, album) {
    let id = uid();
    let track = {
      id : id,
      name : name,
      artist : artist,
      album : album
    };

  library['tracks'][id] = track;

  },


  // adds a playlist to the library

  addPlaylist : function (name) {
    let id = this.uid();
    let playlist = {
      id : id,
      name : name,
      tracks : []
    };

    library['playlists'][id] = playlist;


  },


}

