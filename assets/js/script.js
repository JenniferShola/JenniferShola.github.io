function toggleMute() {
  const video = document.getElementById('myVideo');
  const btn = document.getElementById('unmuteBtn');

  if (video.muted) {
    video.muted = false;
    btn.innerHTML = "Mute 🔇";
  } else {
    video.muted = true;
    btn.innerHTML = "Unmute 🔊";
  }
}

