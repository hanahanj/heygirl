function Gosling(ratio, imageurl){
  this.ratio = ratio;
  this.imageurl = imageurl;
}

 var getGosling = {
  init: function(myGosling){
    this.myGosling = myGosling;
  },

  horizontal: function(){
    return this.myGosling.filter(function(myGosling){
      return myGosling.ratio === "horizontal";
    });
  },

  vertical: function(){
    return this.myGosling.filter(function(myGosling){
      return myGosling.ratio === "vertical";
    });
  }, 

  square: function (){
    return this.myGosling.filter(function(myGosling){
      return myGosling.ratio === "square";
    });  
  }
 };

 function Randomize(images){
    return Math.floor(Math.random() * images.length)
 }

var myGosling = [ 
new Gosling("horizontal", "http://hanahanj.github.io/cats/horizontal1.jpeg"), 
new Gosling("horizontal", "http://hanahanj.github.io/cats/horizontal2.jpeg"), 
new Gosling("horizontal", "http://hanahanj.github.io/cats/horizontal3.jpeg"), 
new Gosling("horizontal", "http://hanahanj.github.io/cats/horizontal4.jpeg"), 

new Gosling("vertical", "http://hanahanj.github.io/cats/vertical1.jpeg"), 
new Gosling("vertical", "http://hanahanj.github.io/cats/vertical2.jpeg"), 
new Gosling("vertical", "http://hanahanj.github.io/cats/vertical3.jpeg"), 

new Gosling("square", "http://hanahanj.github.io/cats/square1.jpeg"),
new Gosling("square", "http://hanahanj.github.io/cats/square1.jpeg"),
new Gosling("square", "http://hanahanj.github.io/cats/square1.jpeg")
]

function imageRatio(image) {
  var proportion = image.height/image.width;

  if(proportion > 1) {
    return "vertical";
  } else if(proportion === 1) {
    return "square";
  } else if(proportion < 1) {
    return "horizontal";
  }
}     
           
(function (document) {
  
  getGosling.init(myGosling);
  var images = document.getElementsByTagName('img'), length = images.length
 
  for (var i = 0; i < length; i++) {
    var ratio = imageRatio(images[i]);
    var number = Randomize(getGosling[ratio]());
    var img = getGosling[ratio]()[number];
    images[i].src = img.imageurl
  }

})(document);
