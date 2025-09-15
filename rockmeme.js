function rockmeme(image) {
  const style = document.createElement("style")
  style.textContent = "img.rockmeme {\nz-index:999999999;\nposition absoulute;\ntop:0;\nleft:0;\nheight:100%;\nwidth:100%;\nobject-fit: fill;\n}\n@keyframes rockmeme {\nfrom {\nopacity: 1;\n}\nto {\nopacity: 0;\n}\n}"
  document.head.appendChild(style)
  const runIt = () => {
    const imageElement = document.createElement("img")
    imageElement.classList.add("rockmeme")
    imageElement.setAttribute("src", image)
    document.body.appendChild(imageElement)
    setTimeout(() => {
      imageElement.remove()
    }, 1000);
  }
  addEventListener("keydown", runIt)
  addEventListener("keyup", runIt)
}
