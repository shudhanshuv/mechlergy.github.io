function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}



// // Countdown

var countDownDate = new Date("jan 31, 2022 15:37:25").getTime();

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


var coll = document.getElementsByClassName("title");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    
    /*if the max-height is currently 500px then make it 0, else make it 500px. Max-height allows the dropdowns to resize to whatever they need to be instead of always expanding to 500px. If we used ".height = auto;" in the JS then it would just snap to place. As far as I know, there is no easy way to make the transition smooth using auto. Trust me on this one. Or don't. Whatever.*/
    
    if (content.style.maxHeight === "500px") {
      content.style.maxHeight = "0";
    } else {
      content.style.maxHeight = "500px";
    }
  });
}



const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/hit/mechlergy.com/visits')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}
