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
// Le sel reçoit la valeur de sucre
SEL=SUCRE; 
console.log(SEL);

SUCRE=TEMP;


console.log("j'ai du sel :" + SEL);
console.log("j'ai du sucre :" + SUCRE);

A=100;
B=200;
C=A+B; // C VA CONTENIR 300
console.log(C);
prenom="Yoel";
nom="Melki";
pm=prenom+nom; // pm => YoelMelki
console.log(pm)

// EX : DECLARER UNE VARIABLE PRIX H.T contenant 100
// Vous allez stocker dans une autre variable le prix TTC et de 
// l'afficher dans la log
PRIXHT=100;
PRIXTTC=PRIXHT*1.2;
console.log(PRIXTTC);


let text = "Hello world, welcome to the universe.";
let result = text.indexOf("welcome");
console.log(result);


// les conditions  ! 
age = 30;

if ( age > 17   ) {
    console.log("Vous êtes majeurs ! ");
}
if (age <18){
    console.log("Vous etes mineurs ! ")
}

// CREER UNE VARIABLE CONTENANT UNE VALEUR NUMERIQUE
// 1 INDIQUEZ SI CETTE VARIABLE EST POSITIF OU PAS !
// 2 INDIQUEZ SI CETTE VARIABLE EST PAIR OU IMPAIRE !

/*
CREEZ DES VARIABLES
NOM
PRENOM
Afficher dans la console la variable qui contient le plus de lettre
SOIT Le prenom VALEUR a plus de lettre et en comporte NB.
MEttre la derniere de la variable en majuscule
*/
