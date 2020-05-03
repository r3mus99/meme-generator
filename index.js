function setText() {
  document.getElementById("top").innerHTML =
    normalText1.value +
    "<highlighted id='high1'>" +
    highlightedText1.value +
    "</highlighted>" +
    normalText2.value +
    "<highlighted id='high2'>" +
    highlightedText2.value +
    "</highlighted>" +
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
  return (
    normalText1.value.length +
    highlightedText1.value.length +
    normalText2.value.length +
    highlightedText2.value.length +
    normalText3.value.length
  );
}

function setOverlayColor() {
  var o = document.getElementById("overlay");
  if (o) {
    o.style.background = this.computeOverlayGradient();
  }
}

function computeOverlayGradient() {
  const hexaColor = document.getElementById("overlayColor").value;
  const alpha = document.getElementById("overlayTransparency").value;
  const rgbaColor = hexToRGB(hexaColor, alpha);
  return `linear-gradient(
    142deg,
    rgba(0, 0, 0, 0) 18%,
    ${rgbaColor} 18%,
    ${rgbaColor} 77%,
    rgba(0, 0, 0, 0) 77%
  )`;
}

function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

hexToRGB("#FF0000", 0.5);

function setColor() {
  var h1 = document.getElementById("high1");
  if (h1) h1.style.color = document.getElementById("highlightedColor1").value;
  var h2 = document.getElementById("high2");
  if (h2) h2.style.color = document.getElementById("highlightedColor2").value;
}

function getActualTextSize() {
  return parseInt(
    window.getComputedStyle(document.getElementById("top")).fontSize,
    10
  );
}

function setTextSize(textSize) {
  var topElement = document.getElementById("top");

  topElement.style.fontSize = textSize + "px";
  console.log("text size: " + textSize + " px");
}

function updateTextSize(change) {
  this.setTextSize(getActualTextSize() + change);
}

function setWatermark(val) {
  const f = document.getElementById("watermarkFile").files[0].name;
  const w = document.getElementById("watermark");

  w.style.background = `url(./watermark/${f})`;
}

function setBackground() {
  var b = document.getElementById("backgroundFile");
  var m = document.getElementById("meme");

  m.src = "./background/" + b.files[0].name;
}

function setBackgroundFromWeb() {
  var b = document.getElementById("backgroundUrl");
  var m = document.getElementById("meme");
  // todo crop given image to square
  m.src = b.value;
}

function setSearchUrl() {
  const i = document.getElementById("searchInput").value;
  const u = document.getElementById("searchUrl");
  u.href = `https://www.google.com/search?as_st=y&tbm=isch&as_q=${i}&tbs=isz:l,iar:s`;
}

function generateMeme() {
  // todo object-fit on generated...
  html2canvas(document.getElementById("result"), { allowTaint: true }).then(
    function (canvas) {
      document.body.appendChild(canvas);
    }
  );
}
