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
  hideModal();
  var day = $form.elements.day.value;
  var taskData = {};
  taskData.time = $form.elements.time.value;
  taskData.taskDescription = $form.elements.taskDescription.value;
  data[day].push(taskData);
  $form.reset();
}

$form.addEventListener('submit', handleEntrySubmit);

function renderTR(task) {
  var $tdTime = document.createElement('td');
  $tdTime.textContent = task.time;
  var $tdDesc = document.createElement('td');
  $tdDesc.textContent = task.taskDescription;
  var $trTask = document.createElement('tr');
  $trTask.appendChild($tdTime);
  $trTask.appendChild($tdDesc);
  return $trTask;
}

var $dayBoxes = document.querySelector('#dayBoxes');
$dayBoxes.addEventListener('click', viewSwap);

var $tbodyTable = document.querySelector('tbody');

function viewSwap(event) {
  if (event.target.getAttribute('id') === 'dayBoxes') {
    return;
  }
  $tbodyTable.innerHTML = '';
  var day = event.target.getAttribute('id');
  for (var i = 0; i < data[day].length; i++) {
    var $trTaskRendered = renderTR(data[day][i]);
    $tbodyTable.appendChild($trTaskRendered);
  }

}
