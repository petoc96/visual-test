let nIntervId;
let nSeconds = 0;
const LIMIT = 31;

function displayTime() {
  nSeconds += 1;
  $("#left").hide();
  $("#right").show();
  setTimeout(function() {
    $("#left").show();
    $("#right").hide();
  }, 500);
  if (nSeconds == LIMIT) {
    stopGame();
  }
}

function startGame() {
  if (!nIntervId) {
    nIntervId = setInterval(displayTime, 1000);
  }
}

function stopGame() {
  clearInterval(nIntervId);
  nIntervId = null;
  nSeconds = 0;
}