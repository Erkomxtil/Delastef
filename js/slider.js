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
counter()

/* Pour l'affichage dynamique des images */
function augmenter() {
 if(count < 2){
    count++
    if(sliders[count] != undefined){
      sourceImg.src= sliders[count].src
    }
 } else if (count === 2){
   count = 0
   sourceImg.src= sliders[count].src
 }
}
setInterval("augmenter()", 5000)
