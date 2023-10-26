const colCount = 16;
const siteName = 'https://i.imgur.com/';
const codelen = 5;

const heightClasses = {
    2:   'hx2',
    4:   'hx4',
    5:	 'hx5',
    8:   'hx8',
};

const heightQuantificators = {
    2:     1,
    4:     2,
    5:	   3,
    8:	   5,
};

const widthClasses = {
    2:   'wx2',
    4:   'wx4',
    8:   'wx8',
};


const widthQuantificators = {
    2:     1,
    4:     2,
    8:	   4,
};


let charPool;

let imgContainer;

let scrollLock = false;

const MAX_DISPLAYED_COUNT = 100;
const MAX_QUEUE = 50;
let queue = 0;

const imgPool = [];

window.onload = () => {
    document.documentElement.style.setProperty('--cols', colCount);
    imgContainer = document.getElementById('img-container');
    initChars();
    repeat(loadImages, 5);
    poolLoop();
};

window.onscroll = () => {
    if (scrollLock || document.body.scrollTop + 2 * window.innerHeight < document.body.scrollHeight) return;
    scrollLock = true;

    repeat(loadImages, 5);

    debounceScroll = setTimeout(() => {
        scrollLock = false;
    }, 500);

};

function loadImages() {
    repeat(loadImage, colCount);
    clearOld();
}

function clearOld() {
    if (imgContainer.children.length <= MAX_DISPLAYED_COUNT) return;
    for(let i = 0; i < 10; i++) {
        imgContainer.children[0].remove();
    }

}

function loadImage() {
    if (queue >= MAX_QUEUE) return;
    queue += 1;

    if (imgPool.length > 0) {
        let newImg = imgPool.pop();
        configImage(newImg);
        imgContainer.appendChild(newImg);
        queue -= 1;

        return;
    }

    const link = generateLink();

    fetch(link)
        .then(res => res.blob())
        .then(blob => {
            // if (blob.type !== 'image/gif') {
            //	loadImage();
            //	return;
            // }
            const newImg = new Image();
            newImg.src = URL.createObjectURL(blob);
            newImg.className = 'blob ';
            newImg.setAttribute('data', link);

            newImg.onload = () => {
                queue -= 1;
                if (((newImg.width == 198) && (newImg.height == 160)) || ((newImg.width == 161) && (newImg.height == 81))) {
                    // assume this is an imgur error image and retry
                    return;
                } else {
                    loadImage();
                }
                configImage(newImg);
                imgContainer.appendChild(newImg);
                URL.revokeObjectURL(newImg.src);
            }
        });
}

function configImage(newImg) {

    Object.keys(widthQuantificators).forEach(qType => {
        if (newImg.naturalWidth > widthQuantificators[qType] * window.innerWidth / colCount) {
            newImg.className += widthClasses[qType] + ' ';
        }
    });
    Object.keys(heightQuantificators).forEach(qType => {

        if (newImg.naturalHeight > heightQuantificators[qType] * window.innerHeight / colCount) {

            newImg.className += heightClasses[qType] + ' ';
        }
    });
}

function registerWorker() {
    work = new Worker("ww.js");

    ww.onpush(img => {
        configImage(newImg);
        imgContainer.appendChild(newImg);
        queue -= 1;
    });
}

function generateLink() {
    return siteName + generateCode() + '.jpg';
}

function generateCode() {
    let code = '';

    for (let i = 0; i < codelen; i++) {
        code += charPool[Math.round((charPool.length - 1) * Math.random())];
    }

    return code;
}

function initChars() {
    const smallchars = 'abcdefgihjklmnopqrstuvwxyz';
    const bigchars = smallchars.toUpperCase();
    const numbers = '1234567890';

    charPool = smallchars + bigchars + numbers;
}

function repeat(fn, times = 1) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}

function poolLoop() {
    const link = generateLink();
    fetch(link)
        .then(res => res.blob())
        .then(blob => {
            // if (blob.type !== 'image/gif') {
            //	poolLoop();
            //	return;
            // }
            const newImg = new Image();
            newImg.src = URL.createObjectURL(blob);
            newImg.className = 'blob ';
            newImg.setAttribute('data', link);

            newImg.onload = () => {
                poolLoop();
                if (((newImg.width == 198) && (newImg.height == 160)) || ((newImg.width == 161) && (newImg.height == 81))) return;
                imgPool.push(newImg);
            }
        });
}