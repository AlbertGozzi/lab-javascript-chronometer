const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  // console.log("Print seconds")
  // console.log(secUni);
  // console.log(chronometer.getSeconds());
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  // console.log(secUni);
}

// ==> BONUS
function printMilliseconds() {
  let milliseconds = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
  if (milliseconds.length === 3) {
    milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMilliseconds())[0];
    milUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMilliseconds())[1];
  } else {
    milDec.innerHTML = 0;
    milUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMilliseconds())[0];
  }
}

function printSplit() {
  let newSplit = document.createElement('li');
  newSplit.innerHTML = chronometer.splitClick();
  splits.append(newSplit);
}

function clearSplits() {
  let splits = document.getElementById('splits');
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.setAttribute("class", 'btn stop');
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRight.setAttribute("class", 'btn split');
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.setAttribute("class", 'btn start');
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.setAttribute("class", 'btn reset');
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.getAttribute("class") === 'btn start') {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);
  } else {
    setStartBtn()
    setResetBtn();
    chronometer.stopClick();
  };
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.getAttribute("class") === 'btn reset') {
    clearSplits();
    chronometer.currentTime = 0;
    printTime();
  } else {
    printSplit();
  };
});
