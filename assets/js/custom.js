

// Skills
var skillIcon_text_Left =  document.getElementById("icon_and_text_left");
var skillIcon_text_Right =  document.getElementById("icon_and_text_right");
var skillicon_and_text_Left_small = document.getElementById("icon_and_text_Left_small"); 
var skillicon_and_text_Right_small =  document.getElementById("icon_and_text_Right_small"); 
var skillIconLeft = document.getElementById("skillIconLeft");
var skillIconRight = document.getElementById("skillIconRight");
var skill_text_left = document.getElementById("skill_text_left");
var skill_text_Right = document.getElementById("skill_text_Right");
var skillIcon_text_All = document.getElementById("skills_All");
var skillIcon_text_Left_show = document.getElementById("skills_Left");
var skillIcon_text_Right_show = document.getElementById("skills_Right");
var skillIconLeftSmall= document.getElementById("skillIconLeftSmall");
var skillIconRightSmall= document.getElementById("skillIconRightSmall");

var showSkillState = "all"


function show_shadow_left() {
    skillIcon_text_Left.style.filter = "drop-shadow(0px 0px 45px #bfb4b4)";
    skillicon_and_text_Left_small.style.filter = "drop-shadow(0px 0px 45px #bfb4b4)";
}

function no_shadow_left() {
    skillIcon_text_Left.style.filter = "";
    skillicon_and_text_Left_small.style.filter = "";
}

function show_shadow_right() {
    skillIcon_text_Right.style.filter = "drop-shadow(0px 0px 45px #bfb4b4)";
    skillicon_and_text_Right_small.style.filter = "drop-shadow(0px 0px 45px #bfb4b4)";
}

function no_shadow_right() {
    skillIcon_text_Right.style.filter = "";
    skillicon_and_text_Right_small.style.filter = "";
}

function show_detail_left(){
   
    function showLeft(){
        skillIcon_text_All.style.display = "none";
        skillIcon_text_Left_show.style.display = "block"
        
        var iconSize = 120;
        var id = setInterval(makeSmall, 1);
        function makeSmall(){
            if (iconSize == 65){
                clearInterval(id);
            }else {
                iconSize = iconSize - 1 ;
    
                skillIconLeftSmall.style.height = iconSize + "px";
                skillIconLeftSmall.style.width = iconSize + "px";
            }
        }

        showSkillState = "left";
    }

    function showAll(){

        var iconSize = 65;
        var id = setInterval(makeSmall, 1);
        function makeSmall(){
            if (iconSize == 120){
                clearInterval(id);
            }else {
                iconSize = iconSize + 1 ;
    
                skillIconLeftSmall.style.height = iconSize + "px";
                skillIconLeftSmall.style.width = iconSize + "px";
            }
        }


            skillIcon_text_All.style.display = "block";
            skillIcon_text_Left_show.style.display = "none";
        

        showSkillState = "all";
    }

    if (showSkillState == "all"){
        showLeft();

    }else if (showSkillState == "left"){
        showAll();

    }

    

}

function show_detail_right(){
   
    function showRight(){
        skillIcon_text_All.style.display = "none";
        skillIcon_text_Right_show.style.display = "block"
        
        var iconSize = 120;
        var id = setInterval(makeSmall, 1);
        function makeSmall(){
            if (iconSize == 65){
                clearInterval(id);
            }else {
                iconSize = iconSize - 1 ;
    
                skillIconRightSmall.style.height = iconSize + "px";
                skillIconRightSmall.style.width = iconSize + "px";
            }
        }

        showSkillState = "Right";
    }

    function showAll(){

        var iconSize = 65;
        var id = setInterval(makeSmall, 1);
        function makeSmall(){
            if (iconSize == 120){
                clearInterval(id);
            }else {
                iconSize = iconSize + 1 ;
    
                skillIconLeftSmall.style.height = iconSize + "px";
                skillIconLeftSmall.style.width = iconSize + "px";
            }
        }


            skillIcon_text_All.style.display = "block";
            skillIcon_text_Right_show.style.display = "none";
        

        showSkillState = "all";
    }

    if (showSkillState == "all"){
        showRight();

    }else if (showSkillState == "Right"){
        showAll();

    }

    

}

// Projects section


/* Slideshow JavaScript */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.add("active");
}
/* Slideshow JavaScript */


// Modal

// Get the modal
var project_soh_modal = document.getElementById('project_soh');
var project_soh_Btn = document.getElementById("project_soh_Btn");
var span = document.getElementsByClassName("close")[0];
project_soh_Btn.onclick = function() {
    project_soh_modal.style.display = "block";
}
span.onclick = function() {
    project_soh_modal.style.display = "none";
}


var project_sc_modal = document.getElementById('project_sc');
var project_sc_Btn = document.getElementById("project_sc_Btn");
var span1 = document.getElementsByClassName("close")[1];
project_sc_Btn.onclick = function() {
    project_sc_modal.style.display = "block";
}
span1.onclick = function() {
    project_sc_modal.style.display = "none";
}

var project_Tbiker_modal = document.getElementById('project_Tbiker');
var project_Tbiker_Btn = document.getElementById("project_Tbiker_Btn");
var span2 = document.getElementsByClassName("close")[2];
project_Tbiker_Btn.onclick = function() {
    project_Tbiker_modal.style.display = "block";
}
span2.onclick = function() {
    project_Tbiker_modal.style.display = "none";
}



window.onclick = function(event) {
    if (event.target == project_soh_modal) {
        project_soh_modal.style.display = "none";
    }else  if (event.target == project_sc_modal) {
        project_sc_modal.style.display = "none";
    }else  if (event.target == project_Tbiker_modal) {
        project_Tbiker_modal.style.display = "none";
    }
}