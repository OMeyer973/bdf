// items descriptions
var showItemDescriptionButtons = document.getElementsByClassName("show-item-description")
for (var showItemDescriptionButton of showItemDescriptionButtons)
  showItemDescriptionButton.addEventListener('click', showItemDesctiption)

function showItemDesctiption() 
{
  var itemDescription = this.parentElement.parentElement.getElementsByClassName("item-description")[0]
  if (itemDescription.classList.contains("hidden"))
  {
    this.classList.add("upside-down");
    itemDescription.classList.remove("hidden")
  }
  else
  {
    this.classList.remove("upside-down");
    itemDescription.classList.add("hidden")
  }
}

// sticker click
var nbStickerClicks = 0;
var sticker = document.getElementById("sticker")
 sticker.addEventListener("click", onStickerClick);

function onStickerClick() {
   nbStickerClicks ++
   setTimeout(function(){ nbStickerClicks -- }, 5000)
   if (nbStickerClicks >= 10)
    window.location.href = "sticker-generator.html";
    sticker.classList.add("bigger")
    setTimeout(function(){ sticker.classList.remove("bigger") }, 1)
}
