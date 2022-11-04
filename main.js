/* global data */
var $addEntry = document.querySelector('#add-entry-button');
$addEntry.addEventListener('click', showModal);

var $overlayModalElement = document.querySelector('.overlay');

function showModal(event) {
  $overlayModalElement.className = 'overlay';
}

function hideModal(event) {
  $overlayModalElement.className = 'overlay vis-none';
}

var $modal = document.querySelector('.modal');

$modal.addEventListener('click', function (e) {
  e.stopPropagation();
});

$overlayModalElement.addEventListener('click', hideModal);

var $form = document.querySelector('form');

function handleEntrySubmit(event) {
  event.preventDefault();
  console.log($form.elements);
  hideModal();
  var taskData = {};
  taskData.time = $form.elements.time.value;
  taskData.day = $form.elements.day.value;
  taskData.taskDescription = $form.elements.taskDescription.value;
  console.log(taskData);
}

$form.addEventListener('submit', handleEntrySubmit);
