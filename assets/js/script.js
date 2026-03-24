// This code should go in your <script> tag or script.js file
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('myVideo');
    const btn = document.getElementById('unmuteBtn');

    if (btn && video) {
        btn.addEventListener('click', () => {
            if (video.muted) {
                video.muted = false;
                btn.innerHTML = "Mute 🔇";
            } else {
                video.muted = true;
                btn.innerHTML = "Unmute 🔊";
            }
        });
    }
});

