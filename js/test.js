document.body.onload = addElement;

function addElement () {
  // crée un nouvel élément div
  var newDiv = document.createElement("div");
  // et lui donne un peu de contenu
  var contenuHtml = '<h2> On essaie pour voir </h2>' 
    + '<p>Bla bla alblaj lkjdmflkj lkjjko ljkpoiurjlj</p>'
    + '<p>Paragraphe 2 on teste aussi </p>'
  newDiv.innerHTML =  contenuHtml
  
  // ajoute le nouvel élément créé et son contenu dans le DOM
  var currentDiv = document.querySelector('.spoiler');
  document.body.insertBefore(newDiv, currentDiv);
}