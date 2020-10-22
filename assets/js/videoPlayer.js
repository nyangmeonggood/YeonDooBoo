const Videoplayer = document.querySelector("#videoPlayer"),
  VIDEO = Videoplayer.querySelector("video"),
  controls = Videoplayer.querySelector(".videoPlayer_controls"),
  playBtn = Videoplayer.querySelector(".playBtn"),
  volumeBtn = Videoplayer.querySelector(".volumeBtn"),
  volumeRange = volumeBtn.querySelector("input"),
  curretTime = Videoplayer.querySelector(".curretTime"),
  totalTime = Videoplayer.querySelector(".totalTime"),
  currentIng = Videoplayer.querySelector(".ing .ing"),
  fullScreen = Videoplayer.querySelector(".fullscreen");

let isPlay = false;

const handlePlay = () => {
  if (isPlay) {
    VIDEO.pause();
    playBtn.innerHTML = `<i class="fas fa-play"></i>`;
    isPlay = false;
  } else {
    VIDEO.play();
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
    isPlay = true;
  }
};

const restart = () => {
  VIDEO.currentTime = 0;
  VIDEO.play();
};

const handleVolume = () => {
  if (!VIDEO.muted) {
    VIDEO.muted = true;
    volumeBtn.querySelector(
      "span"
    ).innerHTML = `<i class="fas fa-volume-mute"></i>`;
  } else {
    VIDEO.muted = false;
    volumeBtn.querySelector(
      "span"
    ).innerHTML = `<i class="fas fa-volume-down"></i>`;
  }
};
function handleDrag(e) {
  const {
    target: { value },
  } = e;
  VIDEO.volume = value;
  if (value > 0.6) {
    volumeBtn.querySelector(
      "span"
    ).innerHTML = `<i class="fas fa-volume-up"></i>`;
  } else if (value > 0.2) {
    volumeBtn.querySelector(
      "span"
    ).innerHTML = `<i class="fas fa-volume-down"></i>`;
  } else if (value > 0) {
    volumeBtn.querySelector(
      "span"
    ).innerHTML = `<i class="fas fa-volume-off"></i>`;
  } else {
    volumeBtn.querySelector(
      "span"
    ).innerHTML = `<i class="fas fa-volume-mute"></i>`;
  }
}

const formatDate = (seconds) => {
  const secondsNumber = parseInt(seconds, 10);
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;
  if (hours < 10 && hours > 0) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    totalSeconds = `0${totalSeconds}`;
  }

  if (hours === 0) {
    hours = "";
  }
  return `${hours}${minutes}:${totalSeconds}`;
};

const getCurrentTime = () => {
  curretTime.innerHTML = formatDate(VIDEO.currentTime);
  let ing = (VIDEO.currentTime / VIDEO.duration) * 100;
  currentIng.style.width = `${ing}%`;
};
const setTotalTime = () => {
  totalTime.innerHTML = formatDate(VIDEO.duration);
};

function goFullScreen() {
  if (Videoplayer.requestFullscreen) {
    Videoplayer.requestFullscreen();
  } else if (Videoplayer.mozRequestFullScreen) {
    Videoplayer.mozRequestFullScreen();
  } else if (Videoplayer.webkitRequestFullscreen) {
    Videoplayer.webkitRequestFullscreen();
  } else if (Videoplayer.msRequestFullscreen) {
    Videoplayer.msRequestFullscreen();
  }
  fullScreen.innerHTML = `<i class="fas fa-compress"></i>`;
  fullScreen.removeEventListener("click", goFullScreen);
  fullScreen.addEventListener("click", exitFullScreen);
}
function exitFullScreen() {
  fullScreen.innerHTML = `<i class="fas fa-expand"></i>`;
  fullScreen.removeEventListener("click", exitFullScreen);
  fullScreen.addEventListener("click", goFullScreen);
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

const registerView = () => {
  const videoId = window.location.href.split("/videos/")[1];
  fetch(`/api/${videoId}/view`, {
    method: "POST",
  });
};

function init() {
  Videoplayer.addEventListener("contextmenu", (event) =>
    event.preventDefault()
  );
  registerView();
  VIDEO.volume = 0.5;
  VIDEO.addEventListener("loadedmetadata", setTotalTime);
  VIDEO.addEventListener("timeupdate", getCurrentTime);
  VIDEO.addEventListener("ended", restart);
  fullScreen.addEventListener("click", goFullScreen);
  volumeBtn.querySelector("span").addEventListener("click", handleVolume);
  volumeRange.addEventListener("input", handleDrag);
  playBtn.addEventListener("click", handlePlay);
  window.addEventListener("keydown", function (e) {
    if (e.keyCode === 32) handlePlay();
  });
}

if (Videoplayer) {
  init();
}
