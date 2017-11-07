const span = document.getElementById("transcript").getElementsByTagName("span");
const video = document.getElementsByTagName("video")[0];

let player = new MediaElementPlayer('player', {
  pluginPath: "/path/to/shims/",
  alwaysShowControls: "true",
  success: function(mediaElement, originalNode, instance) {}
});

video.addEventListener("timeupdate", function () {
  for (let i = 0; i < span.length; i++) {
    let startTime = span[i].getAttribute("data-startTime");
    let endTime = span[i].getAttribute("data-endTime");
    let videoTime = video.currentTime;
    if (videoTime >= startTime && videoTime <= endTime) {
      span[i].classList.add("highlight");
    } else {
      span[i].classList.remove("highlight");
    }
  }
});

for (let i = 0; i < span.length; i++) {
  span[i].addEventListener('click', function (event) {
    video.currentTime = event.target.getAttribute("data-startTime");
    if( !event ) event = window.event;
    span[i].classList.remove("mouseover");
  });
  span[i].addEventListener('mouseover', function () {
    span[i].classList.add("mouseover");
  });
  span[i].addEventListener('mouseout', function () {
    span[i].classList.remove("mouseover");
  });
}
