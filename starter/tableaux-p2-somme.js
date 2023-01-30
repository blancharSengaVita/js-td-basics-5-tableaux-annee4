/*
TABLEAUX - PRÉPA 2 : Somme des valeurs
1. Initialisez un tableau qui contient les nombres 11, 3, 7, 2, 9 et 10 ;
2. Affichez-le (précédé du texte : "Voici mon tableau de nombres :") ;
3. Calculez puis affichez la somme des valeurs du tableau nombres
	(précédé du texte : "La somme des nombres de mon tableau est …")
	1°) à l'aide de la méthode froEach()
	2°) en utilisant la boucle for/of

*/

const tableaux = [3, 11, 7, 2, 9, 10];
console.log(`voici mon tableau de nombres : ${tableaux}`);

let max = 0;
tableaux.forEach(nombre => (max += nombre))

console.log(max);
/*

Version alternative (avec BONUS) : 
1. Initialisez
	- une variable message à une chaîne vide ;
	- une variable somme à 0 ;
2. Parcourez votre tableau de nombres à l'aide d'une boucle for pour
	construitre le message : "… + … + … = " ;
3. Parcourez votre tableau de nombres à l'aide d'une boucle for-of pour
	calculer la somme des valeurs du tableau
4. Affichez le message final : "… + … + … = …"
*/

// Solution avec la méthode forEach()









// Solution avec la méthode for/of








// *******************************
// Solution avec BONUS





