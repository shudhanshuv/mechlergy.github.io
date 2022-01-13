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
<<<<<<< HEAD

// function popup(mylink, windowname)
// {
//   if (! window.focus)
//     return true;
//   var href;
//   if (typeof(mylink) == 'string')
//     href=mylink;
//   else 
//     href=mylink.href;
//   window.open(href, windowname, 'scrollbars=yes');
//   return false;
// }

// let buttons  = $('button'); 
// let isopned = true;

// $('#button-toggle').click(()=>{
//     if(isopned)
//     {
//         $('#down-menu').css('animation','scalereverse .3s 1');
//         setTimeout(()=>{
//             $('#down-menu').css('display','none');
//         },100)
//         isopned =false;

//         $("#btnicon .fa-chevron-down").toggleClass("rtoate180");

//         let toggle = $('.toggle');

//         for(var i = 0; toggle.length>i; i++) {
//             toggle[i].classList.remove('is-on');
//         }

//     }
//     else{
//         $('#down-menu').css({'display':'block','animation': 'scale .3s 1'});
//         for(var i=0; i<buttons.length; i+=1)
//         {
//             buttons[i].style.animation='op .8s 1';
//         }
//         isopned =true;

//         $("#btnicon .fa-chevron-down").toggleClass("rtoate180");
//     }
// });


// const toggle = $('.toggle');

// for(var i = 0; toggle.length>i; i++) {
// 	toggle[i].addEventListener('click', function() {
// 		this.classList.toggle('is-on');
// 	})
// }
=======
>>>>>>> 95ee45e77d639f20b05026727cd6e80ecf4db59c
