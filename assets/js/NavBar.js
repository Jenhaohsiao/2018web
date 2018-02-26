// NavBar
navbar_mobile();
function navbar_mobile() {
    var myTopnav = document.getElementById("myTopnav");

    if (myTopnav.className === 'topnav'){
        myTopnav.className += " responsive";
    } else {
        myTopnav.className = "topnav";
    }

}

$(window).scroll(function () {
    if ($(this).scrollTop() > 125) {
        $('#navbar').addClass('navbar_BG_changed') 
        $('#navbar').removeClass('navbar_BG_default') 
    } else {
        $('#navbar').removeClass('navbar_BG_changed')
        $('#navbar').addClass('navbar_BG_default') 
    }
})

// NavBar end