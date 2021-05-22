//disable image interaction / right click
$('img').on('dragstart', function(event) { event.preventDefault(); });
$("body").on("contextmenu", "img", function(e) {
    return false;
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
texts.push("Eva Hakai is ﷽");
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

//image deaggable
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
    if (randomInteger(1,1000) != 1) {
        var el = document.getElementById('bernkastel');
        el.remove();
    }
}