

const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');


/**
 * Ours cards
 */

cards.forEach((card) => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
});

function dragstart(){
    //this = card
    
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'));

    this.classList.add('isdragging');
}

function drag(){
    
}

function dragend(){
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));
    
    this.classList.remove('isdragging');
}


/**
 * Spot to drop cards
 */

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragente)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragLeave)
    dropzone.addEventListener('drop', drop)
});

function dragente(){
    // console.log('DropZone: Enter zone');
}

function dragover(){
    //this = dropzone
    
    this.classList.add('over')
    const cardBeingDragged = document.querySelector('.isdragging');

    this.appendChild(cardBeingDragged)
}

function dragLeave(){
    //this = dropzone
    this.classList.remove('over')
}

function drop(){
    // console.log('DropZone: dropped');
}