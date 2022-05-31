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

    box.addEventListener('dragenter', dragEnterPink)
    box.addEventListener('dragover', dragOverPink)
    box.addEventListener('dragleave', dragLeavePink)
    box.addEventListener('drop', dropPink)
});

function dragEnterPink(e) {
    e.preventDefault();
    e.target.classList.add('drag-over-pink');
}

function dragOverPink(e) {
    e.preventDefault();
    e.target.classList.add('drag-over-pink');
}

function dragLeavePink(e) {

    e.preventDefault();
    e.target.classList.remove('drag-over-pink');
}
/*
if (items.style.backgroundColor == " background-color: rgb(255, 202, 194);"); {*/

function dropPink(e) {
    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    const color = draggable.dataset["color"]
    console.log(color)
    if (color === "pink") {
        console.log("correct box!");

        e.target.classList.remove('drag-over-pink');

        // add it to the drop target
        e.target.appendChild(draggable);

        // display the draggable element
        draggable.classList.remove('hide');
        e.target.setAttribute("data-dropped", "true")
    } else {
        alert("Wrong Color!");

    }
}
/*}*/
const boxesgreen = document.querySelectorAll('.boxbaby');

boxesgreen.forEach(box => {

    box.addEventListener('dragenter', dragEnterLightBlue)
    box.addEventListener('dragover', dragOverLightBlue)
    box.addEventListener('dragleave', dragLeaveLightBlue)
    box.addEventListener('drop', dropLightBlue)
});

function dragEnterLightBlue(e) {
    e.preventDefault();
    e.target.classList.add('drag-over-baby');
}

function dragOverLightBlue(e) {
    e.preventDefault();
    e.target.classList.add('drag-over-baby');
}

function dragLeaveLightBlue(e) {
    e.target.classList.remove('drag-over-baby');
}

function dropLightBlue(e) {
    /* e.target.classList.remove('drag-over-baby');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
    e.target.setAttribute("data-dropped", "true")
*/
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    const color = draggable.dataset["color"]
    console.log(color)
    if (color === "hell-blau") {
        console.log("correct box!");

        e.target.classList.remove('drag-over-baby');

        // add it to the drop target
        e.target.appendChild(draggable);

        // display the draggable element
        draggable.classList.remove('hide');
        e.target.setAttribute("data-dropped", "true")
    } else {
        alert("Wrong Color!");

    }
}

const boxesblue = document.querySelectorAll('.boxdark');

boxesblue.forEach(box => {

    box.addEventListener('dragenter', dragEnterDarkBlue)
    box.addEventListener('dragover', dragOverDarkBlue)
    box.addEventListener('dragleave', dragLeaveDarkBlue)
    box.addEventListener('drop', dropDarkBlue)
});

function dragEnterDarkBlue(e) {
    e.preventDefault();
    e.target.classList.add('drag-over-dark');
}

function dragOverDarkBlue(e) {
    e.preventDefault();
    e.target.classList.add('drag-over-dark');

}

function dragLeaveDarkBlue(e) {
    e.target.classList.remove('drag-over-dark');
}

function dropDarkBlue(e) {
    /* e.target.classList.remove('drag-over-dark');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
    e.target.setAttribute("data-dropped", "true")
*/
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    const color = draggable.dataset["color"]
    console.log(color)
    if (color === "dunkel-blau") {
        console.log("correct box!");

        e.target.classList.remove('drag-over-dark');

        // add it to the drop target
        e.target.appendChild(draggable);

        // display the draggable element
        draggable.classList.remove('hide');
        e.target.setAttribute("data-dropped", "true")
    } else {
        alert("Wrong Color!");

        /*
                var popup = document.getElementById("myPopup");
                popup.classList.toggle("show");
        */
    }
}

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
/*
window.onload = function() {
    var parentDiv = document.getElementById("weee");
    var childDiv = document.getElementById("item");
    if (parentDiv.contains(childDiv)) {
        alert("yes");
    } else {
        alert("no");
    }
}*/


/* Delet ME For Fuck Sacke */
/*var btn = document.querySelector('.add');*/

//HEre
/*
var remove = document.querySelector('.item');

function dragStart1(e) {
    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
};

function dragEnter1(e) {
    this.classList.add('over');
}

function dragLeave1(e) {
    e.stopPropagation();
    this.classList.remove('over');
}

function dragOver1(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function dragDrop1(e) {
    if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
}

function dragEnd1(e) {
    var listItens = document.querySelectorAll('.item');
    [].forEach.call(listItens, function(item) {
        item.classList.remove('over');
    });
    this.style.opacity = '1';
}

function addEventsDragAndDrop(el) {
    el.addEventListener('dragstart', dragStart1, false);
    el.addEventListener('dragenter', dragEnter1, false);
    el.addEventListener('dragover', dragOver1, false);
    el.addEventListener('dragleave', dragLeave1, false);
    el.addEventListener('drop', dragDrop1, false);
    el.addEventListener('dragend', dragEnd1, false);
}

var listItens = document.querySelectorAll('.item');
[].forEach.call(listItens, function(item) {
    addEventsDragAndDrop(item);
});
*/
//to Here
/*
function addNewItem() {
  var newItem = document.querySelector('.input').value;
  if (newItem != '') {
    document.querySelector('.input').value = '';
    var li = document.createElement('li');
    var attr = document.createAttribute('draggable');
    var ul = document.querySelector('ul');
    li.className = 'draggable';
    attr.value = 'true';
    li.setAttributeNode(attr);
    li.appendChild(document.createTextNode(newItem));
    ul.appendChild(li);
    addEventsDragAndDrop(li);
  }
}
 
btn.addEventListener('click', addNewItem);" */
/*
new Sortable(weee, {
    animation: 150,
    ghostClass: 'sortable-ghost'
});*/
/*
if ($('#weee').text().trim().length == 0) {
    alert("empty");
}

if (!$.trim($('#weee').html()).length) {
    alert("empty");
}*/

let interval;
let start = Date.now();


interval = setInterval(function() {
    checkWee()
}, 500); //in milliseconds


function checkWee() {
    let we = document.getElementById("weee");
    if (we.children.length == 0) {
        let endTime = Date.now();
        clearInterval(interval);
        we.innerHTML = "Du hast es geschafft. Du hast " + (endTime - start) / 1000 + "Sekunden gebraucht";
    }
}