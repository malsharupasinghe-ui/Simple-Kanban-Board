const cards = document.querySelectorAll('.card')
const lists= document.querySelectorAll('.list')

for (const card of cards) {
  card.addEventListener('dragstart', dragStart)
  card.addEventListener('dragend', dragEnd)
}

for (const list of lists) {
  list.addEventListener('dragover', dragOver)
  list.addEventListener('dragenter', dragEnter)
  list.addEventListener('dragleave', dragLeave)
  list.addEventListener('drop', dragDrop)
}

let draggedCard = null

function dragStart() {
  draggedCard = this
  setTimeout(() => {
    this.style.display = 'none'
  }, 0)
}

function dragEnd() {
  setTimeout(() => {
    this.style.display = 'block'
    draggedCard = null
  }, 0)
}

function dragOver(e) {
  e.preventDefault()
}

function dragEnter(e) {
  e.preventDefault()
  this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
}

function dragLeave() {
  this.style.backgroundColor = 'transparent'
}

function dragDrop() {
  this.style.backgroundColor = 'transparent'
  this.appendChild(draggedCard)
}

