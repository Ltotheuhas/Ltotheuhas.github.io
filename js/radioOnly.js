//disable image interaction / right click / middle click
$('img').on('dragstart', function (event) {
    event.preventDefault();
});
$("body").on("contextmenu", "img", function (e) {
    return false;
});
$("body").on("contextmenu", "a", function (e) {
    return false;
});
window.addEventListener("auxclick", (event) => {
    if (event.button === 1) event.preventDefault();
});

//random int generator
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//load header and footer
$(function () {
    $('#header').load('header.html');
});
$(function () {
    $('#footer').load('footer.html');
});

//epic cursor button
var currentCursor = null;
var newCursor = null;

function checkNonduplicateCursor() {
    while (currentCursor == newCursor) {
        newCursor = randomInteger(1, 5);
    }
    currentCursor = newCursor;
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
}

//nullify
function nullify() {
    var el = document.getElementById('bernkastel');
    el.remove();

    var et = document.getElementById('ether');
    et.remove();
}

//radio pointer events, make it werk
$(function () {
    $('#tamagotchi').on('mousedown', function(e) {
        console.log("fuck");
        $(this).css("pointer-events", "none");
        $('#winamp-container').css("pointer-events", "auto");
    });

    $('#winamp-container').on('mousedown', function(e) {
        console.log("you");
        $(this).css("pointer-events", "none");
        $('#tamagotchi').css("pointer-events", "auto");
    });
});