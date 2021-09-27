let nIntervId;
let nSeconds = 0;
const LIMIT = 31;
const COLORS = ["blue", "red", "orange", "green", "black", "purple"];

function displayTime() {
  nSeconds += 1;
  $("#left").hide();
  $("#right").css("background-color", getRandomColor());
  $("#right").show();
  setTimeout(function() {
    $("#right").hide();
    $("#left").css("background-color", getRandomColor());
    $("#left").show();
  }, 500);
  if (nSeconds == LIMIT) {
    stopGame();
  }
}

function startGame() {
  if (!nIntervId) {
    $("#start").hide();
    $("#stop").show();
    nIntervId = setInterval(displayTime, 1000);
  }
}

function stopGame() {
  clearInterval(nIntervId);
  setTimeout(function() {
    $("#left").hide();
    $("#right").hide();
    $("#stop").hide();
    $("#start").show();
  }, 500);
  nIntervId = null;
  nSeconds = 0;
}

function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}