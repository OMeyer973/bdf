var stickerText = document.getElementById("sticker-text")
document.getElementById("input-text").addEventListener("input", applyInput)

var customBeforeStyle = document.head.appendChild(document.createElement("style"));
var customAfterStyle = document.head.appendChild(document.createElement("style"));

function applyInput() {
  var inputText = this.value
  console.log("inputText" + inputText)
  stickerText.innerHTML = inputText.replace(/\r?\n/g, '&#10;')
  customBeforeStyle.innerHTML = "#sticker-text:before {content: '" + inputText.replace(/\r?\n/g, '\\A ') + "';"
  customAfterStyle.innerHTML = "#sticker-text:after {content: '" + inputText.replace(/\r?\n/g, '\\A ') + "';"
// #sticker-text:after {content: '" + inputText + "';}
}

