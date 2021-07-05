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

//array shuffle
function shuffle(arr) {
    var currentIndex = arr.length, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]];
    }
}

//index video
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
        start: function (event, ui) {
            $(this).css("z-index", a++);
        }
    });
    $('.draggable').click(function () {
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

setInterval(changeText, 50);
changeText();

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

//eth
addEventListener("load", () => {
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

//prism images
var imageLinks = new Array();
var imageCount = 1;

imageLinks.push("https://media.discordapp.net/attachments/844906820753293342/855534397918937118/machi_maho.png");
imageLinks.push("https://media.discordapp.net/attachments/320231633968037890/832176275724173312/159590846_158780396064499_8190797422735316054_n.jpg");
imageLinks.push("https://media.discordapp.net/attachments/320231633968037890/822496623481192538/a4125814452_10.png");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/816046817485389824/EvZgj1sXMAAsMmM.png");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/807323533700235345/1565762407319.png");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/806454519005315093/EtSo21BVgAAar-g.png");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/805464834485387287/1x4lvpEOn_4J7tI_wqIeN3w.png");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/805452136834007090/Untitled.png");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/804839416022958100/EsjO5qCXMAEYPi3.png");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/798251503793602580/ezgif-2-c8c5e6237b19.gif");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/793931697900879882/Eqgr3dcUUAA2OQN.png");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/789196948078067793/IMG_20201023_221332.jpg");
imageLinks.push("https://i.redd.it/oq9niqbp08261.png");
imageLinks.push("https://i.pinimg.com/originals/41/c6/ae/41c6ae4ffcd791622f85665f7ab1b242.gif");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/784828325629526056/EofTvMVXMAUQYLP.png");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/781630320906469376/unnamed.gif");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/781534026594385921/EnrqfWFUYAAbWrs.png");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/779015828874985482/EnI9VIIXYAEzKkX.png");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/779015856330899536/EnJFzZBXYAIKKXx.png");
imageLinks.push("https://pbs.twimg.com/media/E3WQxqwVkA8VUX5.jpg");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/777110905845448744/unknown.png");
imageLinks.push("https://web.archive.org/web/20091027091602if_/http://www.geocities.com/anelahmetovic/icanthearvoices.gif");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/755384773924618290/20171218_095712.jpg");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/737969514523787294/Screenshot_20191228-174057__01.jpg");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/737969472593461268/Screenshot_20191228-174042__01.jpg");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/700877197724090378/EV2OLD3UwAAdn5U.png");
imageLinks.push("https://cdn.discordapp.com/attachments/670285911673536526/698051798665134170/image0.gif");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/670942649082970112/1458014818447.png");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/659378150412779550/EMlSI3zXYAAY4Au.png");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/652231277667155989/EJj_YHRXUAEygvW.png");
imageLinks.push("https://pbs.twimg.com/media/E3ygXSBWQAET_Au?format=jpg");
imageLinks.push("https://cdn.discordapp.com/attachments/844906820753293342/856887899780939786/unknown.jpeg");
imageLinks.push("https://cdn.discordapp.com/attachments/777265352492318742/857343800653512744/ezgif-2-6bb49f72b6bf.gif");
imageLinks.push("https://cdn.discordapp.com/attachments/417089719747215370/817506600657879040/1551352447436.png");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/858973412679483392/20210627_165714.jpg");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/858973615181791273/20210622_215733.jpg");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/858989031249805343/Untitled-1.png");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/859022864488857600/E49pvRLX0Agr7Zo.png");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/859031323061387284/20210628_132333.jpg");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/860081448652636220/Untitled-1.png");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/860887058100256798/Screenshot_20210702-215310.jpg");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/861271804344926268/Screenshot_1.png");
imageLinks.push("https://cdn.discordapp.com/attachments/320231633968037890/860887058842386482/20210703_142224.jpg");

shuffle(imageLinks);

var vsmile1 = imageLinks.indexOf("https://cdn.discordapp.com/attachments/320231633968037890/779015828874985482/EnI9VIIXYAEzKkX.png");
var vsmile2 = imageLinks.indexOf("https://cdn.discordapp.com/attachments/320231633968037890/779015856330899536/EnJFzZBXYAIKKXx.png");
if (vsmile1 + 1 != vsmile2) {
    var b = imageLinks[vsmile1 + 1];
    imageLinks[vsmile1 + 1] = imageLinks[vsmile2];
    imageLinks[vsmile2] = b;
}

imageLinks.forEach(setImages);

function setImages() {
    document.getElementById("img" + imageCount).src = imageLinks[imageCount - 1];
    imageCount++;
}

var jlr = imageLinks.indexOf("https://cdn.discordapp.com/attachments/320231633968037890/858973615181791273/20210622_215733.jpg");
jlr += 1;
var jlrImg = document.getElementById("img" + jlr);
jlrImg.style.cursor = "pointer";
jlrImg.addEventListener('click', function () {
    window.open("https://twitter.com/touhoufan2009", '_blank').focus();
});

//scroll to top cause idk
function scrolltop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}