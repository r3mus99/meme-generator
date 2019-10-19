function setText() {
    document.getElementById('top').innerHTML =
        normalText1.value + "<highlighted id='high1'>" + highlightedText1.value + "</highlighted>" +
        normalText2.value + "<highlighted id='high2'>" + highlightedText2.value + "</highlighted>" +
        normalText3.value;

    this.setColor();
    this.comptuteTextSize();
}

function comptuteTextSize() {
    var letterCount = getLetterCount();
    var textSize = 80;
    if (letterCount < 40) {
        textSize = 80;
    } else if (letterCount < 50) {
        textSize = 70;
    } else if (letterCount < 60) {
        textSize = 60;
    } else if (letterCount < 70) {
        textSize = 50;
    } else if (letterCount < 80) {
        textSize = 40;
    } else if (letterCount < 90) {
        textSize = 30;
    } else {
        textSize = 20;
    }

    this.setTextSize(textSize);
}

function getLetterCount() {
    return normalText1.value.length + highlightedText1.value.length
        + normalText2.value.length + highlightedText2.value.length
        + normalText3.value.length;
}

function setColor() {
    var h1 = document.getElementById('high1');
    if (h1) h1.style.color = document.getElementById('highlightedColor1').value;
    var h2 = document.getElementById('high2');
    if (h2) h2.style.color = document.getElementById('highlightedColor2').value;
}

function getActualTextSize() {
    return parseInt(window.getComputedStyle(document.getElementById("top")).fontSize, 10);
}

function setTextSize(textSize) {
    var topElement = document.getElementById("top");

    topElement.style.fontSize = (textSize) + "px";
    console.log('text size: ' + textSize + ' px');
}

function updateTextSize(change) {
    this.setTextSize(getActualTextSize() + change);
}

function setOverlay(val) {
    if (val == "none") {
        document.getElementById('overlay').src = "";
    } else {
        document.getElementById('overlay').src = "./overlay/" + val + ".png";
    }
}

function setBackground() {
    var b = document.getElementById('backgroundFile');
    var m = document.getElementById('meme');

    m.src = "./background/" + b.files[0].name;
}

function setBackgroundFromWeb() {
    var b = document.getElementById('backgroundUrl');
    var m = document.getElementById('meme');
    // todo crop given image to square
    m.src = b.value;
}

function generateMeme() {
    // todo object-fit on generated...
    html2canvas(document.getElementById('result'), { allowTaint: true }).then(function (canvas) {
        document.body.appendChild(canvas);
    });
}