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
C2=A+""+B // 100200
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
if (age === 18){
    console.log("Vous etes juste mineurs ! ")
}

if (age != 18){
    console.log("Vous etes juste mineurs ! ")
}
age2=20;
sexe="M";

if (( age > 17  )  || ( sexe=="M"  ) ) {
    console.log("Soit vous etes majeur ! Soit vous etes un homme !");
}

if (( age > 17  )  && ( sexe=="M"  )    ){
    console.log("Vous etes un homme majeur !");
}
else {
    console.log("Vous n'etes pas un homme majeur !");
}


// CREER UNE VARIABLE CONTENANT UNE VALEUR NUMERIQUE
// 1 INDIQUEZ SI CETTE VARIABLE EST POSITIF OU PAS !
// 2 INDIQUEZ SI CETTE VARIABLE EST PAIR OU IMPAIRE !
x=5;
if (x > 0 ){
    console.log("ce nombre est positif !");
}
else {
    console.log("ce nombre est négatif !");
}
y=12;
if ((x % 2) == 0 ){
    console.log("ce nombre est pair !");
}
else {
    console.log("ce nombre est impair !");
}

/*
CREEZ DES VARIABLES
NOM
PRENOM
3. Afficher dans la console la variable qui contient le plus de lettre
4. SOIT Le prenom VALEUR a plus de lettre et en comporte NB.
5. Mettre la derniere de la variable en majuscule
6. inverse la premiere lettre du prenom et du nom
yelki
moel

*/
nom="melki";
prenom="yoel";

nb_nom=nom.length; // nombre de lettre du nom
nb_prenom=prenom.length // nombre de lettre du prenom

if (nb_nom > nb_prenom   ){
    // 1 .EXTRAIT LA DERNIERE LETTRE
    //    LENGTH -1 JUSQU A LENGTH
    // 2 .METTRE EN MAJ
    // 3 .CONCATANETER AVEC LE DEBUT SANS LA DERNIERE LETTRE 
    //    EXTRAIRE LE NOM DEPUIS LE CARACTERE 0
    //    JUSQU AU NOMBRE DE CARACTERE LENGTH -1
    last=nom.substring(nom.length-1,nom.length); // derniere lettre
    last=last.toUpperCase();// Maj
    deb=nom.substring(0,nom.length-1); // debut de la chaine
    prenom_maj=deb+last;
    
    console.log("Le nom qui est " + nom + "contient " + nb_nom + "lettre" );
    console.log(prenom_maj );

}
else {
    console.log("Le prénom qui est " + prenom + " contient " + nb_prenom + " lettre" );
}


// Les boucles
// je veux afficher dans ma page
// les nombres de 0 à 1000
/**
 *1 Je veux demarrer à 0
 *2 Je veux m'arreter à 1000
 *3 Je veux que a chaque tour tu incremente de 1
 * 
 * 
 */
for (let i=0   ;  i<10   ; i=i+1  ) {
    console.log("Le nombre est : " + i);
}
// console.log(i); // affiche ? 

// 1. Afficher 10 fois le caractere "*"
// 2. afficher un carré de 10 d'étoile de côté.
// 3. afficher la table de 8
// 4. afficher toutes les tables de multiplication
// 5. afficher la factorielle d'un nombre.

for (let i=0; i< 9; i++){
    document.write("*");
}
nb=10;
document.write("<br><br><hr><br>")
for (let i=0; i<nb;i++){
    for (let i=0; i<nb;i++){
        document.write("*")
    }
    document.write("<br>")   

}

for  (let i=0; i<11;i++){
    let resultat=i*8;
    console.log("8 * " + i + " =  " + resultat)
}

for  (let i=0; i<11;i++){
   
    console.log("Table de " + i);

    for  (let j=0; j<11;j++){
        let resultat=i*j;
        console.log(j+" * " + i + " =  " + resultat)
    }
}


let resultat=1; // ACCUMULATION
// 5 => 1 * 2 * 3 * 4  * 5
for (let i=1; i<6 ; i++){
    resultat=resultat*i;
    console.log(i);
}
console.log(resultat);

// EXO :
// une variable nb=5
// 1+2+3+4+5
let nb2=5
let resultat2=0; // ACCUMULATION
// 5 => 1 * 2 * 3 * 4  * 5
for (let i=1; i<=nb2 ; i++){
    resultat2=resultat2+i;
    console.log(i);
}
console.log("--"+resultat2);

// BOUCLE WHILE
// 1 DEMARRAGE DE LA BOUCLE 0 INITIALISATION
// 2 CONDITION DE FIN DE BOUCLE
// 3 INCREMENTATION : A CHAQUE TOUR DE BOUCLE DE COMBIEN D ITERE

for (let i=1; i<10 ; i++){ 
    console.log(i);
}

let i=1;
while( i < 10 ){
    console.log(i);
    i++;
}


// RENVOIE UN NOMBRE ENTRE 1 ET 100

let ordinateur = Math.floor(Math.random() * 100) + 1;
console.log(ordinateur);

// boucle while 
// tester qu on ai 6 chances
// qu on ai bien ecrit un nombre si non on redemande d ecrire
// sans perdre une chance et ce que le nombre compris entre 1
// et 100


// TANT que 
// le niveau correspondu bien à un type nombre =1
// 2
// 3 alors a ce moment la je propose d'aller dans la 2 boucle 
niveau=10;
while(
    ((  niveau != 0 ) && (  niveau != 1 ) && (  niveau != 2 ) && (  niveau != 3 ))){
        niveau = prompt("Niveau : 1 facile , Niveau 2 : Moyen , Niveau 3 : Difficile");
    console.log(niveau);
   
        if (niveau==1) {
            fin = 20;
        }
        if (niveau==2) {
            fin = 10;
        }
        if (niveau==3) {
            fin = 5;
        }

    } 

let k =0; 
while ( (k <=fin)   ) {
    if (niveau==0) { 
        k--;
    }
    let check=1;
    console.log("nb chance : "+k);
    let utilisateur = prompt("devinez un nb entre 1 et 100?");
    console.log(utilisateur);
    console.log(typeof utilisateur);
    console.log(isNaN(utilisateur));
    if ((isNaN(utilisateur) == true) ||  (utilisateur<0 ) ||  (utilisateur>100 )  ){
        console.log("Vous devez écrire un nombre entre 0 et 100 !")
        check=0;
    } 
    else {
        utilisateur=parseInt(utilisateur);
    }
    // condition 1 == 2 > 3 <
    if (  utilisateur === ordinateur   ) {
        console.log("Bravo ! ");
        break;

    }
    if (   utilisateur > ordinateur  ) {
        console.log("Top grand ! Essayez un chiffre plus petit !  ")

    }
    if (   utilisateur < ordinateur  ) {
        console.log("Trop petit ! Essayez un chiffre plus grand !  ")

    }
    if (check==1) {
        k++;
    }

}
/*
3. Vous devez coder un petit jeu. 
a. Créer une variable 'ordinateur' 
qui permet de lui assigner une valeur aléatoire entre 1 et 100
b. Permettre à l'utilisateur de donner un chiffre 
entre 1 et 100 dans la console et l'assigner // prompt("devinez un nb entre 1 et 100?")
à une variable nommée 'utilisateur’
c. Si le choix de l'utilisateur est égal au choix
 de l'ordinateur, imprimer "Bravo, vous avez trouvé"
Si le choix de l'utilisateur est supérieur
 au choix de l'ordinateur, imprimer dans la console "Trop grand"
Si le choix de l'utilisateur est inférieur au choix de l'ordinateur,
 imprimer dans la console "Trop petit"
d. Maintenant nous allons faire tourner le programme
 pour que l'utilisateur ait 6 tentatives pour trouver le choix de l'ordinateur.
Faire une boucle qui intègre le code du b. et du c.
Rajouter une dernière condition en dessous 
de la boucle qui précise que si le nombre de tentatives
 est supérieur à 6, alors on imprime dans la console
  "Vous avez perdu ! Le nombre était [choix de l'ordinateur]”. Jeu avec des niveaux

*/