
// set image size

var w = 0;
var h = 0;
getSize();

function getSize() {

    w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

    h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

    var trTopSize = h * 0.9;
    document.getElementById('hero_background').style.height = trTopSize+"px";
    if (w > 768){
        document.getElementById("dot_hero").style.top = (trTopSize-30)+"px";
    }else{
        document.getElementById("dot_hero").style.top = (trTopSize-15)+"px";
    }
    

    console.log(document.getElementById("dot_hero").style.top);

}

window.onresize = getSize;