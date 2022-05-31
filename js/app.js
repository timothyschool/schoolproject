const items = document.querySelectorAll('.item');
for (const item of items) {

    // attach the dragstart event handler
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
}

// handle the dragstart


function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.target.setAttribute("data-dropped", "false")
    console.log(e.target)
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

function dragEnd(e) {
    console.log("drag end")
    let dropped = e.target.dataset["dropped"]
    console.log(dropped)
    if (dropped === "false") {
        setTimeout(() => {
            e.target.classList.remove('hide');
        }, 0);
    }
}


/*
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {

    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');

}
*/
const boxesred = document.querySelectorAll('.boxpink');

boxesred.forEach(box => {

    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over-pink');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over-pink');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over-pink');
}
/*
if (items.style.backgroundColor == " background-color: rgb(255, 202, 194);"); {*/

function drop(e) {
    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    const color = draggable.dataset[color]
    console.log("color")
    e.target.classList.remove('drag-over-pink');

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
    e.target.setAttribute("data-dropped", "true")
}
/*}*/
const boxesgreen = document.querySelectorAll('.boxbaby');

boxesgreen.forEach(box => {

    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over-baby');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over-baby');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over-baby');
}

function drop(e) {
    e.target.classList.remove('drag-over-baby');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
    e.target.setAttribute("data-dropped", "true")

}

const boxesblue = document.querySelectorAll('.boxdark');

boxesblue.forEach(box => {

    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over-dark');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over-dark');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over-dark');
}

function drop(e) {
    e.target.classList.remove('drag-over-dark');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    /*
        if (fname.value === '' || lname.value === '') {
            e.preventDefault();
            para.textContent = 'You need to fill in both names!';
          }*/
    // add it to the drop target
    /* if (back === '' || lname.value === '') {
         e.preventDefault();
         para.textContent = 'You need to fill in both names!';
     }*/
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
    e.target.setAttribute("data-dropped", "true")

}