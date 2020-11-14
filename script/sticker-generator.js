var stickerText = document.getElementById("sticker-text")
document.getElementById("input-text").addEventListener("input", applyInput)

var customTextStyle = document.head.appendChild(document.createElement("style"))
var customBeforeStyle = document.head.appendChild(document.createElement("style"))
var customAfterStyle = document.head.appendChild(document.createElement("style"))

function applyInput() {
  const inputText = this.value
  stickerText.innerHTML = inputText.replace(/\r?\n/g, '&#10;')
  const numberLines =  inputText.split("\n").length;
  customTextStyle.innerHTML = "#sticker-text {font-size: " + 4.45 * 2 / numberLines + "em;"
  customBeforeStyle.innerHTML = "#sticker-text:before {content: '" + inputText.replace(/\r?\n/g, '\\A ') + "';"
  customAfterStyle.innerHTML = "#sticker-text:after {content: '" + inputText.replace(/\r?\n/g, '\\A ') + "';"
}

