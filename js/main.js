//disable image interaction / right click
$('img').on('dragstart', function (event) {
    event.preventDefault();
});
$("body").on("contextmenu", "img", function (e) {
    return false;
});

//index video
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setScreen() {
    var vidNr = randomInteger(1, 7);
    var rareSeed = randomInteger(1, 50);

    if (rareSeed == 33) {
        document.getElementById("homepage").src = "assets/homepage/homepage99.mp4";
    } else {
        document.getElementById("homepage").src = "assets/homepage/homepage" + vidNr + ".mp4";
    }
}

//load header and footer
$(function () {
    $('#header').load('header.html');
});
$(function () {
    $('#footer').load('footer.html');
});

//draggable
$(function () {
    var a = 7;
    $('.draggable').draggable({
        start: function(event, ui) { $(this).css("z-index", a++); }
    });
    $('.draggable').click(function() {
        $(this).addClass('top').removeClass('bottom');
        $(this).siblings().removeClass('top').addClass('bottom');
        $(this).css("z-index", a++);

    });
});

//fluctuating text content on the eva page
var texts = new Array();
texts.push("Eva Hakai is an internet music label");
texts.push("Eva Hakai is a creative collective");
texts.push("Eva Hakai is a physical music distributor");
texts.push("Eva Hakai is an internet subordinate");
texts.push("Eva Hakai is a reaction to the current musical zeitgeist");
texts.push("Eva Hakai is for the online era avant-teens");
texts.push("Eva Hakai is not dead");
texts.push("Eva Hakai is a clothing brand");
texts.push("Eva Hakai is something to represent");
texts.push("Eva Hakai is not clearly defined");
texts.push("Eva Hakai is completely undefined actually");
texts.push("Eva Hakai is a loose mesh of musicians");
texts.push("Eva Hakai is a ton of work");
texts.push("Eva Hakai is cooler than your average net label");
texts.push("Eva Hakai is a part of history");

var point = 0;

function changeText() {
    $('#evaIs').html(texts[point]);
    if (point < (texts.length - 1)) {
        point++;
    } else {
        point = 0;
    }

}

setInterval(changeText, 50); /*Call it here*/
changeText();

//image draggable
$(".draggable").draggable();

//epic cursor button
var currentCursor = null;
var newCursor = null;

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkNonduplicateCursor() {
    while (currentCursor == newCursor) {
        newCursor = randomInteger(1, 5);
    }
    currentCursor = newCursor;
    console.log(currentCursor);
    return currentCursor;
}

function change() {
    switch (checkNonduplicateCursor()) {
        case 1:
            document.body.style.cursor = "url(assets/cursors/sword.gif),auto";
            break;
        case 2:
            document.body.style.cursor = "url(assets/cursors/asuka.gif),auto";
            break;
        case 3:
            document.body.style.cursor = "url(assets/cursors/miku.gif),auto";
            break;
        case 4:
            document.body.style.cursor = "url(assets/cursors/sanrio.gif),auto";
            break;
        case 5:
            document.body.style.cursor = "url(assets/cursors/tsukasa.gif),auto";
            break;
    }
}

//bernkastel
function bernkastel() {
    var el;
    var ranInt = randomInteger(1, 1000);
    if (ranInt != 1) {
        el = document.getElementById('bernkastel');
        el.remove();
    }
    if (ranInt != 333) {
        el = document.getElementById('ether');
        el.remove();
    }
    console.log(ranInt);
}

//nullify
function nullify() {
    var el = document.getElementById('bernkastel');
    el.remove();

    var et = document.getElementById('ether');
    et.remove();
}

//eth
addEventListener("load", () => { // "load" is safe but "DOMContentLoaded" starts earlier
    var index = 0;
    const slides = document.querySelectorAll(".slides");
    const classHide = "slides-hidden", count = slides.length;
    nextSlide();

    function nextSlide() {
        slides[(index++) % count].classList.add(classHide);
        slides[index % count].classList.remove(classHide);
        setTimeout(nextSlide, 50);
    }
});

//audio
function playAudio() {
    document.getElementById('player').play();
}

// prisms
var mesh = new MeshSpin();
mesh.getRotationOffset = mesh.rotateByMouse;
mesh.getRotationOffset = function () {
    r = mesh.rotateByMouse();
    return {x: r.x - 0.01, y: r.y - 0.005, z: 0.005};
};
mesh.props.viewBox = [-200, -100, 400, 200];
mesh.props.scaleFactor = 5;
mesh.setup('wrapper');
mesh.run();