// on utilise un tableau pour la collection des couleurs. Ce tableau est comme une étagère avec cinq jouets de couleur différente. Chaque couleur est un élément dans le tableau, et vous pouvez les prendre en utilisant leur numéro (0 pour "red", 1 pour "blue", etc.).
const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white'];
let currentColor = '';

// cibler les éléments du DOM

// Cibler le bouton qui, lorsqu'il est cliqué, déclenchera le changement de couleur et la vérification de la réponse.
const button = document.getElementById('btn');
// Cibler l'élément qui affichera la couleur à deviner
const texte = document.getElementById('text');
// Cibler le champ où l'utilisateur entre sa réponse.
const input = document.getElementById('txt');
// Cibler l'élément où le résultat sera affiché après que l'utilisateur ait deviné la couleur.
const resultats = document.getElementById('result');

// fonction pour le changement de couleur
function changeColor() {
  // générer un nombre aléatoire entre 0 et la longueur du tableau des couleurs
  const random = Math.floor(Math.random() * colors.length);
  // changer la couleur de l'élément texte
  texte.style.color = colors[random];
  // afficher la couleur à deviner
  texte.textContent = colors[random];
}
// gérer les événements
// Ajouter une fonctionnalité qui se déclenche lorsqu'un utilisateur clique sur le bouton.
button.addEventListener('click', function() {
    // appeler la fonction changeColor
    changeColor();
    // vérifier si la réponse de l'utilisateur est correcte
    // déclarer userGuess pour stocker la réponse de l'utilisateur
    const userGuess = input.value.toLowerCase();
    // déclarer currentColor pour stocker la couleur actuelle déjà affichée
    if (userGuess === currentColor){
        resultats.textContent = 'Bravo! Vous avez deviné la couleur!';
    }else{
        resultats.textContent = 'Désolé! Essayez encore!';
    };
    // vider le champ de texte après que l'utilisateur ait deviné la couleur
    input.value = '';

});