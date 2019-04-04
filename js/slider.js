let sourceImg = document.querySelector(".image_slide")
let buttonForward = document.querySelector(".btn_forward")
let buttonBack = document.querySelector(".btn_back")
let count = 00
sourceImg.src="img/slide01.jpg"

var sliders = [
  {
    "src": "img/slide01.jpg",
    "alt": "Desert"
  },
  {
    "src": "img/slide02.jpg",
    "alt": "Bunny"
  },
  {
    "src": "img/slide03.jpg",
    "alt": "People"
  }
]

var sliders_count = function (){


/*   button.onclick = function() { 
    while (count < 3 ){
      sourceImg.src= sliders[count++].src
    }
  }
  buttonBack.onclick = function(){
    while (count > 0) {
      sourceImg.src= sliders[count--].src 
    }
  }*/
}

function counter (){
  buttonForward.addEventListener("click", function(){
    console.log(count)
    if (count <= 1){
      count++
      sourceImg.src= sliders[count].src 
      console.log(sourceImg.src) 
    }
  })

  buttonBack.addEventListener("click", function(){
    console.log(count)
    if (count >= 1){
      count--
      sourceImg.src= sliders[count].src 
    }
  })
}

console.log(counter())

