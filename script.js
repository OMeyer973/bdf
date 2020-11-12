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