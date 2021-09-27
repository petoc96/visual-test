// $(function() {
//   for (let i = 0; i < 10; i++) {
//     setInterval(function() {
//       $("#left").hide(); 
//       $("#right").show(); 
//       setTimeout(function() {
//         $("#left").show();
//         $("#right").hide(); 
//       },500);
//     },1000); 
//   }
// })

function displayTime() {
  $("#left").hide();
  $("#right").show();
  setTimeout(function() {
    $("#left").show();
    $("#right").hide();
  }, 500);
}
// $("#right2").hide();
function startGame() {
  setInterval(displayTime, 1000);
}