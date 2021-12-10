function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}



// // Countdown

var countDownDate = new Date("Dec 25, 2021 15:37:25").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
      
    var distance = countDownDate - now;
      
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    document.getElementById("days").innerHTML = days + " days";
    document.getElementById("hour").innerHTML = hours + " hr";
    document.getElementById('min').innerHTML= minutes + " min";
    document.getElementById('sec').innerHTML= seconds + " sec";
      
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("clock").innerHTML = "EXPIRED";
    }
}, 1000);