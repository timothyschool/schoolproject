/*eins*/

const jet = document.getElementById("disapear");
jet.onclick = function() {
    jet.style.display = "none";
    console.log("closed")
}

const box1 = document.getElementById("item2");
box1.ondragstart = function() {
        let image = jet.querySelector("img")
        console.log(image)
        image.src = "img/Jert.gif"
        jet.style.display = "block";

        setTimeout(function() {
            jet.style.display = "none";
        }, 240 * 1000)
    }
    /*zwei*/

//const jet2 = document.getElementById("disapear2");
jet.onclick = function() {
    jet.style.diplay = "none";
    console.log("closed")
}
const box2 = document.getElementById("item3");
box2.ondragstart = function() {
        let image2 = jet.querySelector("img")
        console.log(image2)
        image2.src = "img/mail.png"
        jet.style.display = "block";

        setTimeout(function() {
            jet.style.display = "none";
        }, 15 * 1000)
    }
    // 3
jet.onclick = function() {
    jet.style.diplay = "none";
    console.log("closed")
}
const box3 = document.getElementById("item4");
box3.ondragstart = function() {
        let image3 = jet.querySelector("img")
        console.log(image3)
        image3.src = "img/whatsapp.png"
        jet.style.display = "block";

        setTimeout(function() {
            jet.style.display = "none";
        }, 15 * 1000)
    }
    //4 

jet.onclick = function() {
    jet.style.diplay = "none";
    console.log("closed")
}
const box4 = document.getElementById("item4");
box4.ondragstart = function() {
    let image4 = jet.querySelector("img")
    console.log(image4)
    image4.src = "img/Zoutube_2.gif"
    jet.style.display = "block";

    setTimeout(function() {
        jet.style.display = "none";
    }, 15 * 1000)
}


//5
jet.onclick = function() {
    jet.style.diplay = "none";
    console.log("closed")
}
const box5 = document.getElementById("item5");
box5.ondragstart = function() {
    let image5 = jet.querySelector("img")
    console.log(image5)
    image5.src = "img/Todo6.png"
    jet.style.display = "block";

    setTimeout(function() {
        jet.style.display = "none";
    }, 7 * 1000)
}

jet.onclick = function() {
    jet.style.diplay = "none";
    console.log("closed")
}
const box6 = document.getElementById("item6");
box6.ondragstart = function() {
    let image6 = jet.querySelector("img")
    console.log(image6)
    image6.src = "img/Whatsapp.png"
    jet.style.display = "block";

    setTimeout(function() {
        jet.style.display = "none";
    }, 7 * 1000)
}
const box7 = document.getElementById("item7");
box7.ondragstart = function() {
    let image7 = jet.querySelector("img")
    console.log(image7)
    image7.src = "img/Todo5.png"
    jet.style.display = "block";

    setTimeout(function() {
        jet.style.display = "none";
    }, 7 * 1000)
}
const box8 = document.getElementById("item8");
box8.ondragstart = function() {
    let image8 = jet.querySelector("img")
    console.log(image8)
    image8.src = "img/instagra.gif"
    jet.style.display = "block";

    setTimeout(function() {
        jet.style.display = "none";
    }, 7 * 1000)
}

const box10 = document.getElementById("item10");
box10.ondragstart = function() {
    let image8 = jet.querySelector("img")
    console.log(image8)
    image8.src = "img/Ballon_2.gif"
    jet.style.display = "block";

    setTimeout(function() {
        jet.style.display = "none";
    }, 15 * 1000)
}
const box11 = document.getElementById("item11");
box11.ondragstart = function() {
        let image11 = jet.querySelector("img")
        console.log(image11)
        image11.src = "img/Todo3.png"
        jet.style.display = "block";

        setTimeout(function() {
            jet.style.display = "none";
        }, 5 * 1000)
    }
    /*
            //6 
        jet.onclick = function() {
            jet.style.diplay = "none";
            console.log("closed")
        }
        const box2 = document.getElementById("item3");
        box2.ondragstart = function() {
                let image2 = jet.querySelector("img")
                console.log(image2)
                image2.src = "img/mail.png"
                jet.style.display = "block";

                setTimeout(function() {
                    jet.style.display = "none";
                }, 8 * 1000)
            }
            //7 
        jet.onclick = function() {
            jet.style.diplay = "none";
            console.log("closed")
        }
        const box2 = document.getElementById("item3");
        box2.ondragstart = function() {
                let image2 = jet.querySelector("img")
                console.log(image2)
                image2.src = "img/mail.png"
                jet.style.display = "block";

                setTimeout(function() {
                    jet.style.display = "none";
                }, 8 * 1000)
            }
            //8 
        jet.onclick = function() {
            jet.style.diplay = "none";
            console.log("closed")
        }
        const box2 = document.getElementById("item3");
        box2.ondragstart = function() {
                let image2 = jet.querySelector("img")
                console.log(image2)
                image2.src = "img/mail.png"
                jet.style.display = "block";

                setTimeout(function() {
                    jet.style.display = "none";
                }, 8 * 1000)
            }
            //9 
        jet.onclick = function() {
            jet.style.diplay = "none";
            console.log("closed")
        }
        const box2 = document.getElementById("item3");
        box2.ondragstart = function() {
                let image2 = jet.querySelector("img")
                console.log(image2)
                image2.src = "img/mail.png"
                jet.style.display = "block";

                setTimeout(function() {
                    jet.style.display = "none";
                }, 8 * 1000)
            }
            /*
            const jet2 = document.getElementById("disapear2");
            jet2.onclick = function() {
                jet2.style.display = "none";
                console.log("closed")
            }
            const box2 = document.getElementById("item3");
            box2.ondragstart = function() {
                let image2 = jet2.querySelector("img")
                console.log(image2)
                image2.src = "img/mail.png"
                jet2.style.display = "block";

                setTimeout(function() {
                    jet2.style.display = "none";
                    console.log("hei")
                }, 8 * 1000)
            }*/


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
    let title = document.getElementById("title");
    if (we.children.length == 0) {
        let endTime = Date.now();

        clearInterval(interval);

        we.innerHTML = "WEEE! Du hast es geschafft. Du hast " + (endTime - start) / 1000 + "Sekunden gebraucht";
        let btn = document.createElement("button");
        btn.id = 'myButton'
        btn.innerHTML = "NEU STARTEN";
        btn.onclick = function() {
            location.reload();
        };
        //document.body.appendChild(btn);
        we.appendChild(btn);
    }
    /*else if (we.children.length = !0) {
           let endTime = Date.now();


           clearInterval(interval);


           let btnrage = document.createElement("button");
           btnrage.id = 'ragequit'
           btnrage.innerHTML = "Rage quit";
           btnrage.onclick = function() {
               location.reload();
           };
           document.body.appendChild(btnrage);
           body.appendChild(btnrage);
       }*/
}


/*--- APP JS DVD LOGO ZEUGS --*/

/*let speed = 20;
//let scale = 0.17; // Image scale (I work on 1080p monitor)
let scale = 2;
let canvas;
let ctx;
let logoColor;

let dvd = {
    x: 500,
    y: 500,
    width: 200,
    height: 200,
    xspeed: 5,
    yspeed: 5,
    //img: new Image()
};
let dvd2 = {
    x2: 500,
    y2: 500,
    width2: 200,
    height2: 200,
    xspeed2: 5,
    yspeed2: 5,
    // img2: new Image()
};

(function main() {


    update();

})();

function update() {
    setTimeout(() => {

        dvd.x += dvd.xspeed;
        dvd.y += dvd.yspeed;
        jet.style.top = dvd.y + 'px';
        jet.style.left = dvd.x + 'px';
        dvd2.x2 += dvd2.xspeed2;
        dvd2.y2 += dvd2.yspeed2;
        jet2.style.top = dvd2.y2 + 'px';
        jet2.style.left = dvd2.x2 + 'px';
        //Check for collision 
        checkHitBox();
        update();
    }, speed)
}



//Check for border collision
function checkHitBox() {
    if (dvd.x >= window.innerWidth - 200 || dvd.x <= 0) {
        dvd.xspeed *= -1;

    }

    if (dvd.y >= window.innerHeight - 200 || dvd.y <= 0) {
        dvd.yspeed *= -1;

    }
    if (dvd2.x2 >= window.innerWidth - 200 || dvd2.x2 <= 0) {
        dvd2.xspeed2 *= -1;

    }

    if (dvd2.y2 >= window.innerHeight - 200 || dvd2.y2 <= 0) {
        dvd2.yspeed2 *= -1;

    }
}
*/


//Pick a random color in RGB format
/*function pickImg() {
    /*wuerfel = Math.floor(Math.random() * randomBG.length);
    bild = randomBG[wuerfel];*/
// dvd.img.src = bild;

//}
/*
let speed2 = 20;
//let scale = 0.17; // Image scale (I work on 1080p monitor)
let scale2 = 2;
let canvas2;
let ctx2;
let logoColor2;



*/

/*
(function main2() {


    update2();
})();*/
/*
function update2() {
    setTimeout(() => {

        dvd2.x += dvd2.xspeed;
        dvd2.y += dvd2.yspeed;
        jet2.style.top = dvd2.y + 'px';
        jet2.style.left = dvd2.x + 'px';
        //Check for collision 
        checkHitBox2();
        update2();
    }, speed)
}
*/


//Check for border collision
/*function checkHitBox2() {
    if (dvd2.x >= window.innerWidth - 200 || dvd2.x <= 0) {
        dvd2.xspeed *= -1;
        //  pickImg2();
    }

    if (dvd2.y >= window.innerHeight - 200 || dvd2.y <= 0) {
        dvd2.yspeed *= -1;
        //pickImg2();
    }
}

*/

let speed = 20;
//let scale = 0.17; // Image scale (I work on 1080p monitor)
let scale = 2;
let canvas;
let ctx;
let logoColor;

let dvd = {
    x: 500,
    y: 500,
    width: 200,
    height: 200,
    xspeed: 4,
    yspeed: 4,
    //img: new Image()
};


(function main() {


    update();

})();

function update() {
    setTimeout(() => {

        dvd.x += dvd.xspeed;
        dvd.y += dvd.yspeed;
        jet.style.top = dvd.y + 'px';
        jet.style.left = dvd.x + 'px';

        //Check for collision 
        checkHitBox();
        update();
    }, speed)
}



//Check for border collision
function checkHitBox() {
    if (dvd.x >= window.innerWidth - 400 || dvd.x <= 0) {
        dvd.xspeed *= -1;

    }

    if (dvd.y >= window.innerHeight - 300 || dvd.y <= 0) {
        dvd.yspeed *= -1;

    }

}

/*
let dvd2 = {
    x: 500,
    y: 500,
    width: 200,
    height: 200,
    xspeed: 5,
    yspeed: 5,
    //img: new Image()
};


(function main2() {


    update2();

})();

function update2() {
    setTimeout(() => {

        dvd2.x += dvd2.xspeed;
        dvd2.y += dvd2.yspeed;
        jet2.style.top = dvd2.y + 'px';
        jet2.style.left = dvd2.x + 'px';

        //Check for collision 
        checkHitBox2();
        update2();
    }, speed)
}



//Check for border collision
function checkHitBox2() {
    if (dvd2.x >= window.innerWidth - 200 || dvd2.x <= 0) {
        dvd2.xspeed *= -1;

    }

    if (dvd2.y >= window.innerHeight - 200 || dvd2.y <= 0) {
        dvd2.yspeed *= -1;

    }

}

*/
var popupShown = false;

function load() {
    if (!popupShown) window.open('http://...', '_blank');
    popupShown = true;
}

const targetDiv = document.getElementById("disapear");
//const btn = document.getElementById("toggle");
targetDiv.onclick = function() {
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
    } else {
        targetDiv.style.display = "block";
    }
};

function autoRefresh() {
    window.location = window.location.href;
}
setInterval('autoRefresh()', 180 * 1000);