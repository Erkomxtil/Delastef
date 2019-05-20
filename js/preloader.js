document.addEventListener("DOMContentLoaded", function(event) {
  let counter = 0
  const count = document.querySelector('#counter')

  let preload = setInterval(function(){
    if(counter < 101){
      count.innerHTML = counter + '%'
      counter++
    } else {
      clearInterval()
    }
  })
  console.log("DOM fully loaded and parsed")
})
