function criaCartao() {

    const dropz = document.createElement('div')
    dropz.classList.add('dropzone')
     
    
    const divCard = document.createElement('div')
    divCard.classList.add('card')
    divCard.setAttribute('draggable', 'true')

    

    const divStatus = document.createElement('div')
    divStatus.classList.add('status')
    divStatus.classList.add('red')

    const divMural = document.createElement('div')
    divMural.classList.add('content')

    const buttonC = document.createElement('button')
    buttonC.classList.add('btn')
    buttonC.value = 'Remove'
    
    

    dropz.appendChild(divCard)
    divCard.appendChild(divStatus)
    divCard.appendChild(divMural)

    divCard.appendChild(buttonC)


    const mural = document.querySelector('.dropzone')
    mural.appendChild(divCard)

    
    
    
   const text = document.createElement('p')
    divMural.appendChild(text)

    text.textContent = document.getElementById('in').value

    document.getElementById('in').value = '';
    document.getElementById('in').focus();
   



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

function dragstart() {
    //this = card

    dropzones.forEach(dropzone => dropzone.classList.add('highlight'));

    this.classList.add('isdragging');
}

function drag() {

}

function dragend() {
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

function dragente() {
    // console.log('DropZone: Enter zone');
}

function dragover() {
    //this = dropzone

    this.classList.add('over')
    const cardBeingDragged = document.querySelector('.isdragging');

    this.appendChild(cardBeingDragged)
}

function dragLeave() {
    //this = dropzone
    this.classList.remove('over')
}

function drop() {
    // console.log('DropZone: dropped');
}





let  bt = document.querySelectorAll('.btn')

bt.forEach(function(buttonC){
    buttonC.addEventListener('click', function(e){
        e.preventDefault();
        buttonC.parentNode.remove()
    })
})
    
}

const button = document.querySelector('.buttonClass');

button.onclick = criaCartao


// Removendo










