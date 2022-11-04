var $addEntry = document.querySelector('#add-entry-button');
$addEntry.addEventListener('click', addEntryHandler);

var $overlayModalElement = document.querySelector('.overlay');

function addEntryHandler(event) {
  console.log($overlayModalElement.className);
}
