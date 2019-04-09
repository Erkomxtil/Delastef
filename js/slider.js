let sourceImg = document.querySelector(".image_slide")
let buttonForward = document.querySelector(".btn_forward")
let buttonBack = document.querySelector(".btn_back")
let count = 0

/* Image de départ */
sourceImg.src="img/slide01.jpg"

/* Tableau d'images */
let sliders = [
  {
    'src': "img/slide01.jpg",
    'alt': "Desert"
  },
  {
    'src': "img/slide02.jpg",
    'alt': "Bunny"
  },
  {
    'src': "img/slide03.jpg",
    'alt': "People"
  }
]

/* Bouton du slider */
let counter = function (){
  buttonForward.addEventListener('click', function(){
    if (count <= 1){
      count++
      sourceImg.src= sliders[count].src 
    }
  })

  buttonBack.addEventListener("click", function(){
    if (count >= 1){
      count--
      sourceImg.src= sliders[count].src 
    }
  })
}

/* Pour l'affichage dynamique des images */
let countVar = 0
let countFunction = function(){
  let countTiming = setInterval(function(){ 
    return countVar = countVar++
  },1000)
}

console.log(countVar)
counter()
