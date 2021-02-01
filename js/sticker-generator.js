(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Render Text
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


// Take screenshots
/*document.getElementById("screenshot-button").addEventListener("click", takeScreenshot)
var sticker = document.getElementById("sticker")

function takeScreenshot() {
  html2canvas(sticker).then(canvas => {
    document.body.appendChild(canvas)
  });
}*/
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcb2xpdmlcXERlc2t0b3BcXGJ1cmVhdWR1ZnVuXFxub2RlX21vZHVsZXNcXGd1bHAtYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiQzovVXNlcnMvb2xpdmkvRGVza3RvcC9idXJlYXVkdWZ1bi9zcmMvanMvZmFrZV83OTNhNzU1Yy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBSZW5kZXIgVGV4dFxyXG52YXIgc3RpY2tlclRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0aWNrZXItdGV4dFwiKVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXRleHRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGFwcGx5SW5wdXQpXHJcblxyXG52YXIgY3VzdG9tVGV4dFN0eWxlID0gZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIikpXHJcbnZhciBjdXN0b21CZWZvcmVTdHlsZSA9IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpKVxyXG52YXIgY3VzdG9tQWZ0ZXJTdHlsZSA9IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpKVxyXG5cclxuZnVuY3Rpb24gYXBwbHlJbnB1dCgpIHtcclxuICBjb25zdCBpbnB1dFRleHQgPSB0aGlzLnZhbHVlXHJcbiAgc3RpY2tlclRleHQuaW5uZXJIVE1MID0gaW5wdXRUZXh0LnJlcGxhY2UoL1xccj9cXG4vZywgJyYjMTA7JylcclxuICBjb25zdCBudW1iZXJMaW5lcyA9ICBpbnB1dFRleHQuc3BsaXQoXCJcXG5cIikubGVuZ3RoO1xyXG4gIGN1c3RvbVRleHRTdHlsZS5pbm5lckhUTUwgPSBcIiNzdGlja2VyLXRleHQge2ZvbnQtc2l6ZTogXCIgKyA0LjQ1ICogMiAvIG51bWJlckxpbmVzICsgXCJlbTtcIlxyXG4gIGN1c3RvbUJlZm9yZVN0eWxlLmlubmVySFRNTCA9IFwiI3N0aWNrZXItdGV4dDpiZWZvcmUge2NvbnRlbnQ6ICdcIiArIGlucHV0VGV4dC5yZXBsYWNlKC9cXHI/XFxuL2csICdcXFxcQSAnKSArIFwiJztcIlxyXG4gIGN1c3RvbUFmdGVyU3R5bGUuaW5uZXJIVE1MID0gXCIjc3RpY2tlci10ZXh0OmFmdGVyIHtjb250ZW50OiAnXCIgKyBpbnB1dFRleHQucmVwbGFjZSgvXFxyP1xcbi9nLCAnXFxcXEEgJykgKyBcIic7XCJcclxufVxyXG5cclxuXHJcbi8vIFRha2Ugc2NyZWVuc2hvdHNcclxuLypkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjcmVlbnNob3QtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YWtlU2NyZWVuc2hvdClcclxudmFyIHN0aWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0aWNrZXJcIilcclxuXHJcbmZ1bmN0aW9uIHRha2VTY3JlZW5zaG90KCkge1xyXG4gIGh0bWwyY2FudmFzKHN0aWNrZXIpLnRoZW4oY2FudmFzID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKVxyXG4gIH0pO1xyXG59Ki8iXX0=
