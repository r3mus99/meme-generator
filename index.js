function setText() {
    document.getElementById('top').innerHTML =
        normalText1.value + "<highlighted id='high1'>" + highlightedText1.value + "</highlighted>" +
        normalText2.value + "<highlighted id='high2'>" + highlightedText2.value + "</highlighted>" +
        normalText3.value;

    this.setColor();
}

function setColor() {
    var h1 = document.getElementById('high1');
    if (h1) h1.style.color = document.getElementById('highlightedColor1').value;
    var h2 = document.getElementById('high2');
    if (h2) h2.style.color = document.getElementById('highlightedColor2').value;
}

function updateTextSize(change) {
    var topElement = document.getElementById("top");
    var actualSize = parseInt(window.getComputedStyle(document.getElementById("top")).fontSize, 10);

    topElement.style.fontSize = (actualSize + change) + "px";
}

function setOverlay(val) {
    if (val == "none") {
        document.getElementById('overlay').src = "";
    } else {
        document.getElementById('overlay').src = "./overlay/" + val + ".png";
    }
}

function setBackground() {
    // var x = document.getElementById("backgroundFile");
    // alert(x.files[0].name);
    document.getElementById('meme').src = "./background/" + document.getElementById('backgroundFile').files[0].name;
}

function generateMeme() {
    html2canvas(document.getElementById('result')).then(function (canvas) {
        document.body.appendChild(canvas);
    });
}