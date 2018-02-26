var url =
    "https://api.unsplash.com/photos/random/" +
    "?client_id=" +
    "a72143acfcbff29ebf335423893f1cfcb02bb2c9d854b0691008900f0fc5ec86" +
    "$orientation=landscape"+
    "&query=Metropolitan"+
    "&query=city"+
    "&query=Street"+
    "&count=3";

    
var heroBackgroundContainer = document.getElementById("#hero_background");
var newJson;

function makeRequest() {
  xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var pictureJson = JSON.parse(this.responseText);
    console.log(pictureJson);
    newJson =  pictureJson;
  };
  xhr.open("GET", url, true);

  xhr.send();
  console.log('set image');
  var imageUrl = pictureJson.urls.reg.regular;
  document.getElementById("hero_background").style.backgroundImage = "url(" + imageUrl +")";
}



function addimage(){
    console.log('addimage');
     
}

document.onload = makeRequest()


