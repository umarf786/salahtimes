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
console.log(n);

var da = new Date();
var na = da.getDate();
var nas = "_" + na;
console.log(nas);
$.getJSON("2021.json", function(result){
  if(n=="Oct"){
    var feb = $(result.Feb);
    var data = feb;
    console.log(data);
    var dataday = data[0][nas];
    console.log(data[0][nas]);

    var fajr = data[0][nas]["Subah\nSadiq"];
    var sunrise = data[0][nas].Sunrise;
    var zuhur = data[0][nas].Zohar;
    var asr = data[0][nas].Asar;
    var maghrib = data[0][nas].Sunset;
    var isha = data[0][nas].Esha;
    $('.fajar').html(fajr);
    $('.sunrise').html(sunrise);
    $('.zuhur').html(zuhur);
    $('.asr').html(asr);
    $('.maghrib').html(maghrib);
    $('.isha').html(isha);


  } else{
    console.log("no")
  }
});
