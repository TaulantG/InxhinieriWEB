const myArray=[
    "img/img1.jpg",
    "img/img2.gif"
]
var img = document.getElementById('slideshow');
let i = 0;

function next(){
    i++;
    if(i > myArray.length-1){
        i = 0;
        img.src = myArray[i];
    }else{
        img.src = myArray[i];
    }
}

document.body.addEventListener('load',next());

function previous(){
    i--;
    if(i < 0){
        i = myArray.length-1;
        img.src = myArray[i];
    }else{
        img.src = myArray[i];
    }
}

document.body.addEventListener('load',previous());

var autoplayInterval = setInterval(function() {

    document.getElementById("button").click();
    
   
  }, 10000); 

function stopAutoplay() {

  clearInterval(autoplayInterval);

}