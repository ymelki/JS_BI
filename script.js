// affiche dans la console le texte entre guillemet !
console.log("je test le JS ! ")

/* 
1. LES VARIABLES
 - Les nombres , 
 - Les chaines de caracteres,
 - Les booleens
 - Les tableau

2. LES CONDITIONS
3. LES BOUCLES
4. LES FONCTIONS
*/


// les variables
prenom="Yoel"; // chaine de caractere / string
age = 35; // Numérique : sans guillemet


// concatenations

console.log("Je m'appelle " + prenom + ". et j'ai " + age + " ans.");

// EXO 
SEL=100;
SUCRE=120;

console.log("j'ai du sel :" + SEL);
console.log("j'ai du sucre :" + SUCRE);

// VOUS ECRIVEZ DU CODE : INVERSER LES VARIABLES
// TEMP Qui correspond à la nouvelle bouteille !
TEMP=SEL;
console.log(TEMP);
// Le sel recoit la valeur de sucre
SEL=SUCRE; 
console.log(SEL);

SUCRE=TEMP;


console.log("j'ai du sel :" + SEL);
console.log("j'ai du sucre :" + SUCRE);