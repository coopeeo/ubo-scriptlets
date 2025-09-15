function rockmeme(image) {
  const style = document.createElement("style")
  style.textContent = "img.rockmeme {\nanimation: rockmeme 5s;\nz-index:999999999;\nposition: absolute;\ntop:0;\nleft:0;\nheight:100%;\nwidth:100%;\nobject-fit: fill;\n}\n@keyframes rockmeme {\n0% {\nopacity:0;\n}\n1% {\nopacity: 1;\n}\n100% {\nopacity: 0;\n}\n}"
  document.head.appendChild(style)
  const audio = new Audio("https://www.myinstants.com/media/sounds/the-rock-sound-effect.mp3")
  const runIt = () => {
    const imageElement = document.createElement("img")
    imageElement.classList.add("rockmeme")
    imageElement.setAttribute("src", image)
    document.body.appendChild(imageElement)
    audio.play()
    setTimeout(() => {
      imageElement.remove()
    }, 5500);
  }
  addEventListener("keydown", runIt)
  addEventListener("keyup", runIt)
}
