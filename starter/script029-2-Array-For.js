/*****************************
* 029-2 - Boucles pour parcourir des tableaux
*/

// Il existe plusieurs méthodes pour parcourir un tableau indicé élément par élément.

// 1. Parcourir automatiquement un tableau indicé à l'aide d'une boucle
// 		FOR  ou  WHILE  ou  FOR OF

/*
for (let i = 0; i < tableau.length; i++) {
  console.log(tableau[i]);
}
Avec la boucle  for, on fait varier l'indice du tableau de 0 (indice du premier élément)
à taille du tableau - 1 (indice du dernier) pour accéder aux éléments les uns après les autres. 
*/

/*
EXERCICE 1 :
1. Créer un tableau films qui contient les films
	"Forrest Gump", "Bohemian Rhapsody", "Le Seigneur des anneaux" et "Harry Potter"
2. Parcourir ce tableau pour afficher les films qu'il contient
	1°) avec une boucle for
	2°) avec une boucle while
	3°) avec une boucle for of
*/

const films = ["Forrest Gump", "Bohemain Rhapsody", "Le seigneur des anneaux", "Harry Potter"];
//
//
// // Boucle FOR
//
// for (let i = 0; i < films.length; i++) {
//   console.log(films[i]);
// }

// Boucle WHILE

// let i = 0;
// while (i < films.length ) {
//   console.log(films[i]);
//   i++;
// }



// Boucle FOR OF
/*
Une troisième solution pour parcourir un tableau est d'utiliser la boucle  for-of (ES6) :
for (const element of tableau) {
  console.log(element);
}
Elle a l'avantage de ne pas nécessiter la gestion d'un compteur de boucle.
*/


// for (const film of films) {
//   console.log(film);
// }


/*
EXERCICE 2 : 
- stocker le tableau suivant dans une variable john : ['John', 'Smith', 1990, 'designer', false, 'blue']
- parcourir ce tableau pour afficher les informations qu'il contient
	1°) avec une boucle for
	2°) avec une boucle while
	3°) avec une boucle for of
*/

const john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
//
//
//
// // Boucle FOR
// for (let i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }
//
//
// // Boucle WHILE
// let i = 0;
// while (i < john.length){
//   console.log(john[i]);
//   i++;
// }
//
//
// // Boucle FOR OF
//
// for (const element of john){
//   console.log(element)
// }


/*
EXERCICE 3 :
- créer un tableau "nombres" qui contient les 5 premiers entiers
- afficher "Voici mon tableau de nombres :" et votre tableau
- créer un tableau vide "carres" qui contiendra les carrés de vos nombres
- faire une boucle qui parcourt le tableau "nombres"
	et ajoute dans le tableau "carres" le carré de chaque nombre
- afficher "Voici mon tableau de carrés :" et le tableau contentant les carrés
*/


// const nombres = [1, 2, 3, 4, 5,];
// console.log(`voici mon tableau nombres : ${nombres}`);
//
// const carres = [];
//
// for (let i = 0; i < nombres.length; i++) {
//   let carreDeNombre = nombres[i]**2;
//   carres.push(carreDeNombre);
//   console.log(carreDeNombre);
//
// }
//
// console.log(`voici mon tableau nombres : ${carres}`);


// 2. Parcourir automatiquement un tableau indicé à l'aide de la méthode forEach()

/*
tableau.forEach(function(element){…})
OU
tableau.forEach(element => {…})
La méthode forEach() du tableau permet d'appliquer une fonction sur chaque élément du tableau
*/

/* 
EXERCICE 4 :
Utiliser la méthode forEach pour
	- afficher les films
	- afficher les infos de John
*/


// première écriture



// écriture ES6
films.forEach(film => console.log(film));
john.forEach(info => console.log(info));

/*
EXERCICE 3 :
- créer un tableau "nombres" qui contient les 5 premiers entiers
- afficher "Voici mon tableau de nombres :" et votre tableau
- créer un tableau vide "carres" qui contiendra les carrés de vos nombres
- parcourir le tableau "nombres" avec une boucle forEach et
	ajouter dans le tableau "carres" le carré de chaque nombre
- afficher "Voici mon tableau de nombres au carré :" et le tableau contentant les carrés
*/


const nombres = [1, 2, 3, 4, 5,];
console.log(nombres);
const carres = [];

nombres.forEach(nombre => (
  carres.push(nombre**2)
));
console.log(carres);





/* ***************************************************** */
/* FACULTATIF (moins important) */

// intructions 'continue' et 'break'

/* 
EXERCICE :
1. Parcourir le tableau John et, grâce à 'continue', n'en afficher que les données textuelles
	(précéder d'un titre "Les infos textuelles de John :")
2. Parcourir le tableau John et, grâce à 'break', s'arrêter au premier chiffre rencontré
	(précéder d'un titre "Les infos de John jusque sa date de naissance :")
3. Parcourir le tableau John à l'envers
*/
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// // continue
// console.log("Les infos textuelles de John :");
//
//
// // break
// console.log("Les infos de John jusque sa date de naissance :");
//
//
//
// // En bouclant à l'envers
// console.log("Les infos de John à l'envers :");



/* ***************************************************** */

/* 
RÉSUMÉ : 
Il existe plusieurs possibilités pour parcourir un tableau élément par élément :
  - la boucle  for 
      for (let i = 0; i < monTableau.length; i++) {
        // monTableau[i] permet d'accéder à l'élément courant du tableau
      }
  - la méthode  forEach()
      monTableau.forEach(monElement => {
        // monElement permet d'accéder à l'élément courant du tableau
      });
  - la boucle   for-of
      for (const monElement of monTableau) {
       // monElement permet d'accéder à l'élément courant du tableau
      }
*/