import * as THREE from './libs/three.js-r132/build/three.module.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded!!!!');
  document.getElementById("rev").innerHTML = THREE.REVISION;

  const video = document.createElement("video");
  navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
    video.srcObject = stream;
    video.play();
  });
  video.style.position = "absolute";
  video.style.width = 500; 
  video.style.height = 500; 
  document.body.appendChild(video);
});

