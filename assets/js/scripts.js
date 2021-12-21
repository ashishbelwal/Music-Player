const musicInfo = [
 
  {
    musicName: "White Rabbit",
    artistName: "Jefferson Airplane",
    musicSrc:
      "../assets/js/songs/white rabbit.mp3",
    musicPoster: "https://upload.wikimedia.org/wikipedia/en/f/f2/Jefferson_Airplane.jpg",
    album : "Surrealistic Pillow",
    liked: false,
  },
  {
    musicName: "Sultans of Swing",
    artistName: "Dier Straits",
    musicSrc:
      "../assets/js/songs/Sultans of Swing.mp3",
      album : "Sultans of Swing",
    musicPoster:
      "https://i1.sndcdn.com/artworks-2tMsMnUSBl0nnFsG-2SzOPA-t500x500.jpg",
  },
  {
    musicName: "Édith Piaf",
    artistName: "Édith Piaf",
    album : "Golden memories collection",
    musicSrc:
      "../assets/js/songs/Edith-Piaf-Non-je-ne-regrette-rien-Non-rien-de-rien.mp3",
    musicPoster: "https://fringster.com/content/images/14071.jpg",
  },
  {
    musicName: "Leaving On A Jet Plane",
    artistName: "John Denver",
    album: "John Denver Sings",
    musicSrc:
      "../assets/js/songs/LeavingOnAJetPlane.mp3",
    musicPoster:
      "https://i.scdn.co/image/ab67616d0000b2732de8f6ef43332439bbc93223",
  },
  {
    musicName: "What A Wonderful World",
    artistName: "Louis Armstrong",
    album : "What A Wonderful World",
    musicSrc:
      "../assets/js/songs/Louis-Armstrong-What-A-Wonderful-World.mp3",
    musicPoster:
      "https://m.media-amazon.com/images/I/61hQoMmd66L.jpg",
  },
  {
    musicName: "Can't Help Falling In Love",
    artistName: "Elvis Presley",
    album: "Blue Hawaii",
    musicSrc:
      "../assets/js/songs/Elvis-Presley-I-Cant-Help-Falling-in-Love.mp3",
    musicPoster:
      "https://img.discogs.com/BPKF3mKyXLC1g_UVxoIA96j7nhA=/fit-in/600x603/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5918657-1612199551-9830.jpeg.jpg",
  },
  
];

const totalSongs = musicInfo.length;

const mainControlBack = $(".back"),
  mainContolForward = $(".forward"),
  mainControlPlay = $(".play");

const playerSuffle = $(".shuffle"),
  playerLoopSong = $(".loopSong"),
  playerLoopPlaylist = $(".loopPlaylist"),
  playerSettings = $(".settings");

const userLike = $(".like"),
  userPlaylist = $(".playlist"),
  userShare = $(".share");



const playlistDispatch = (musicInfo) => {
  musicInfo.forEach((item, index) => {
    let songElement = `<div class="information" id = "play-${index}">
        <div class = "playThis" onClick = "playThis(${index})"></div>
        <div class="authImg">
          <div class="backgroundImg" style="background-image: url('${item.musicPoster}')"></div>
        </div>
        <div class="authInformation">
          <p>Now Playing</p>
          <div class="authDetails">
            <h3 id="songName">${item.musicName}</h3>
            <h4 id="singer">${item.artistName}</h4>
            <p id="album">${item.album}</p>
          </div>
          <div class="userInteraction">
            <button class="like ${item.liked}" onClick = "liked(${index})"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24" fill="none">
                <path d="M13.7315 4.22699C9.28504 -2.44794 0.285645 1.18834 0.285645 8.45957C0.285645 13.9197 12.6233 22.4609 13.7315 23.5714C14.8472 22.4609 26.5714 13.9197 26.5714 8.45957C26.5714 1.24347 18.1862 -2.44794 13.7315 4.22699Z" fill="#C7C5D0"/>
                <defs>
                <linearGradient id="paint0_linear_4_59" x1="19.432" y1="20.3263" x2="9.5359" y2="2.42089" gradientUnits="userSpaceOnUse">
                <stop stop-color="#5F30C1"/>
                <stop offset="1" stop-color="#968EF1"/>
                </linearGradient>
                </defs>
                </svg>  
            </button>
            <button class="playList" onClick = "openPlaylist()"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="31" height="22" viewBox="0 0 31 22" fill="none">
                <path d="M17.0416 6.41667H1.62492C0.777002 6.41667 0.083252 7.11042 0.083252 7.95833C0.083252 8.80625 0.777002 9.5 1.62492 9.5H17.0416C17.8895 9.5 18.5833 8.80625 18.5833 7.95833C18.5833 7.11042 17.8895 6.41667 17.0416 6.41667ZM17.0416 0.25H1.62492C0.777002 0.25 0.083252 0.94375 0.083252 1.79167C0.083252 2.63958 0.777002 3.33333 1.62492 3.33333H17.0416C17.8895 3.33333 18.5833 2.63958 18.5833 1.79167C18.5833 0.94375 17.8895 0.25 17.0416 0.25ZM24.7499 12.5833V7.95833C24.7499 7.11042 24.0562 6.41667 23.2083 6.41667C22.3603 6.41667 21.6666 7.11042 21.6666 7.95833V12.5833H17.0416C16.1937 12.5833 15.4999 13.2771 15.4999 14.125C15.4999 14.9729 16.1937 15.6667 17.0416 15.6667H21.6666V20.2917C21.6666 21.1396 22.3603 21.8333 23.2083 21.8333C24.0562 21.8333 24.7499 21.1396 24.7499 20.2917V15.6667H29.3749C30.2228 15.6667 30.9166 14.9729 30.9166 14.125C30.9166 13.2771 30.2228 12.5833 29.3749 12.5833H24.7499ZM1.62492 15.6667H10.8749C11.7228 15.6667 12.4166 14.9729 12.4166 14.125C12.4166 13.2771 11.7228 12.5833 10.8749 12.5833H1.62492C0.777002 12.5833 0.083252 13.2771 0.083252 14.125C0.083252 14.9729 0.777002 15.6667 1.62492 15.6667Z" fill="#C7C5D0"/>
                </svg>  
            </button>
            <button class="share" onClick = "shareSong('${item.musicSrc}')"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                <path d="M15.3999 12.4C17.3919 12.4 18.9999 14.008 18.9999 16C18.9999 17.992 17.3919 19.6 15.3999 19.6C13.4079 19.6 11.7999 17.992 11.7999 16C11.7999 15.712 11.8359 15.448 11.9079 15.172L6.6519 12.412C5.9919 13.144 5.0559 13.6 3.9999 13.6C2.0079 13.6 0.399902 11.992 0.399902 10C0.399902 8.00802 2.0079 6.40002 3.9999 6.40002C5.0559 6.40002 5.9919 6.86802 6.6519 7.58802L11.9079 4.82802C11.8359 4.55202 11.7999 4.28802 11.7999 4.00002C11.7999 2.00802 13.4079 0.400024 15.3999 0.400024C17.3919 0.400024 18.9999 2.00802 18.9999 4.00002C18.9999 5.99202 17.3919 7.60002 15.3999 7.60002C14.3439 7.60002 13.4079 7.13202 12.7479 6.41202L7.4919 9.17202C7.63724 9.71446 7.63724 10.2856 7.4919 10.828L12.7479 13.588C13.4079 12.856 14.3439 12.4 15.3999 12.4Z" fill="#C7C5D0"/>
                </svg>  
            </button>
          </div>

        </div>
        <!-- /.authImg -->
       </div>`;
    $(".playlistSlider").append(songElement);
  });
  $("#play-0").addClass("active");
};

playlistDispatch(musicInfo);

const liked = (index) => {
  if (musicInfo[index].liked == true) {
    musicInfo[index].liked = false;
  } else {
    musicInfo[index].liked = true;
  }
  console.log(musicInfo[index]);
  $("#play-" + index)
    .find(".like")
    .toggleClass("true");
};

// music time
const audio = document.querySelector(".audio");
const current = document.querySelector(".musicCurrentTime");
const duration = document.querySelector(".musicDurationTime");
if (duration.innerText == "NaN:0NaN") {
  duration.innerText = "0:00";
}

audio.addEventListener("timeupdate", () => {
  let time = audio.currentTime;
  let seconds = Math.floor(time % 60);
  let minutes = Math.floor(time / 60);
  if (seconds < 10) {
    current.innerText = minutes + ":0" + seconds;
  } else if (minutes >= 0 && seconds >= 0) {
    current.innerText = minutes + ":" + seconds;
  } else {
    current.innerText = minutes + ":0" + seconds;
  }

  //duration time
  time = audio.duration;
  seconds = Math.floor(time % 60);
  minutes = Math.floor(time / 60);
  if (seconds < 10) {
    duration.innerText = minutes + ":0" + seconds;
  } else if (minutes >= 0 && seconds >= 0) {
    duration.innerText = minutes + ":" + seconds;
  } else {
    duration.innerText = "0:00";
  }

  // time bar
  const timebarCicle = document.querySelector(".musicCurrentLengthCircle");
  const timebar = document.querySelector(".musicCurrentLength");

  timebar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
  timebarCicle.style.left = (audio.currentTime / audio.duration) * 100 + "%";

  if(audio.duration <= audio.currentTime ){
    console.log("Audio Finished")
    nextMusic();
  }
  
});

const musicTimebar = document.querySelector(".timebar");
musicTimebar.addEventListener("click", (e) => {
  let a = e.offsetX;
  const b = e.srcElement.clientWidth;
  console.log((a / b) * audio.duration)
  audio.currentTime = (a / b) * audio.duration;
  
});



let musicIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isLoop = false;
let isPlaylistLoop = false;
const playMusic = () => {
  isPlaying = true;
  $("#PlayButton img").attr("src", "assets/images/pause.svg");
  audio.play();
};

function pauseMusic() {
  isPlaying = false;
  $("#PlayButton img").attr("src", "assets/images/play.svg");
  audio.pause();
}

const toggleShuffle = () => {
  $(".shuffle").toggleClass("active");
  isShuffle = true;
};
const currentMusic = (index) => {
  let i = index % musicInfo.length;
  audio.src = musicInfo[i].musicSrc;
};
currentMusic(musicIndex);

const updateViewInformation = (id) => {
  $(".playlistSlider .information").removeClass("active");
  $(`#play-${id}`).addClass("active");
};

const prevMusic = () => {
  if (isLoop == true) {
    musicIndex = musicIndex;
    currentMusic(musicIndex);
    isPlaying ? playMusic() : pauseMusic();
  } else {
    musicIndex = musicIndex - 1;
  }

  if (musicIndex < 0 && isPlaylistLoop == false && isLoop == false) {
    musicIndex = musicInfo.length - 1;
  }
  if (musicIndex < 0 && isPlaylistLoop == true && isLoop == false) {
    musicIndex = 0;
  }
  console.log(musicIndex);
  if (isShuffle == false && isLoop == false && isLoop == false) {
    currentMusic(musicIndex);
    isPlaying ? playMusic() : pauseMusic();
  } else if (isShuffle == true && isLoop == false && isLoop == false) {
    musicIndex = Math.floor(Math.random() * musicInfo.length);
    currentMusic(musicIndex);
    isPlaying ? playMusic() : pauseMusic();
  }
  updateViewInformation(musicIndex);
};

const nextMusic = () => {
  console.log(isLoop);
  if (isLoop == true) {
    musicIndex = musicIndex;
    currentMusic(musicIndex);
    isPlaying ? playMusic() : pauseMusic();
  } else {
    musicIndex = musicIndex + 1;
  }
  if (
    musicIndex >= musicInfo.length &&
    isPlaylistLoop == false &&
    isLoop == false
  ) {
    musicIndex = 0;
  }
  if (
    musicIndex >= musicInfo.length &&
    isPlaylistLoop == true &&
    isLoop == false
  ) {
    musicIndex = musicInfo.length - 1;
  }
  if (isShuffle == false && isLoop == false) {
    currentMusic(musicIndex);
    isPlaying ? playMusic() : pauseMusic();
  } else if (isShuffle == true && isLoop == false) {
    musicIndex = Math.floor(Math.random() * musicInfo.length);
    currentMusic(musicIndex);
    isPlaying ? playMusic() : pauseMusic();
  }

  updateViewInformation(musicIndex);
};

const playListLoop = () => {
  $(".loopPlaylist").toggleClass("active");
  isPlaylistLoop == false ? (isPlaylistLoop = true) : (isPlaylistLoop = false);
};
const startMusic = function () {
  isPlaying ? pauseMusic() : playMusic();
};
const loopSong = () => {
  $(".loopSong").toggleClass("active");
  isLoop == false ? (isLoop = true) : (isLoop = false);
};

const shareSong = (song) => {
  const whatsappMsg = `https://wa.me?text=${song}`
  window.open(whatsappMsg, '_blank');
}

$(".playSliderBackdrop").click(function(){
  closePlaylist()
})

const openPlaylist = () => {
  $(".musicPlayer").addClass("showPlaylist")
}
const closePlaylist = () => {
  $(".musicPlayer").removeClass("showPlaylist")
}

const playThis = (index) => {
  currentMusic(index);
  playMusic()
  updateViewInformation(index);
  closePlaylist()
}
