/// alias rm.js
/// dependency run-at.fn
function rockmeme(image) {
  const style = document.createElement("style")
  style.textContent = "img.rockmeme {\nanimation: rockmeme 1s;\nopacity:0;\nz-index:999999999;\nposition: fixed;\ntop:0;\nleft:0;\nheight:100%;\nwidth:100%;\nobject-fit: fill;\n}\n@keyframes rockmeme {\n0% {\nopacity:0;\n}\n1% {\nopacity: 1;\n}\n100% {\nopacity: 0;\n}\n}"
  document.head.appendChild(style)
  const audio = new Audio("https://www.myinstants.com/media/sounds/the-rock-sound-effect.mp3")
  const runIt = () => {
    const imageElement = document.createElement("img")
    imageElement.classList.add("rockmeme")
    imageElement.setAttribute("src", image)
    document.body.appendChild(imageElement)
    audio.currentTime = 0
    audio.play()
    setTimeout(() => {
      imageElement.remove()
    }, 1200);
  }
  //addEventListener("keydown", runIt)
  addEventListener("keyup", runIt)
  addEventListener("onclick", runIt)
  addEventListener("oncontextmenu", runIt)
}
