// var data;
// var timestamp = Math.floor(Date.now()/100)
// if (!navigator.geolocation) {
//   alert("Geolocation is not supported by this browser!");
// }
// //This will make appear a pop up asking for permission
// navigator.geolocation.getCurrentPosition(showPosition, error);

// //In case the permission is granted
// function showPosition(position) {
//   data = position;
//   pos();
// }

// //In case the permission is denied
// function error() {
//   alert(
//     "Unable to retrieve your location! Allow the browser to track your location!"
//   );
// }
// var lat;
// var lon;
// function pos() {
//   lat = data.coords.latitude;
//   lon = data.coords.longitude;
//   console.log(data.coords.latitude);
//   console.log(data.coords.longitude);
//   console.log(timestamp);
//   $(document).ready(function(){
//     $.getJSON('https://api.aladhan.com/v1/timings/'+timestamp+'?latitude='+data.coords.latitude+'&longitude='+data.coords.longitude+'&method=2&school=1&tune=0,35,0,60,95,110,0,75,0', function(data1){
//         var fajr = data1.data.timings.Fajr;
//         var zuhur = data1.data.timings.Dhuhr;
//         var asr = data1.data.timings.Asr;
//         var maghrib = data1.data.timings.Maghrib;
//         var isha = data1.data.timings.Isha;
//         var name = data1;
//         $('.fajar').html(fajr);
//         $('.zuhur').html(zuhur);
//         $('.asr').html(asr);
//         $('.maghrib').html(maghrib);
//         $('.isha').html(isha);
// })
// })
// }

$.getJSON("2021.json", function(result){
  var month = new Array();
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "Apr";
  month[4] = "May";
  month[5] = "Jun";
  month[6] = "Jul";
  month[7] = "Aug";
  month[8] = "Sep";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";

  var d = new Date();
  var n = month[d.getMonth()];

  var da = new Date();
  var na = d.getDate();
  if(n=="Feb"){
    var feb = $(result.Feb[0]);
    var data = feb.na;
    console.log(data);
  } else{
    console.log("no")
  }
});
