/**
 * 1. CREEZ 2 VARIABLES numeriques pour lesquelles vous affecter 
 * un nombre
 * 2. CALCULER dANS UNE 3 VARIABLES la somme , puis la moyene
 * 3. PAREIL AVEC 3 VARIABLE PUIS 4 VARIABLES
 * 4. COMMENT FAIRE AVEC UN NOMBRE INDEFENIT DE VARIABLES ?
 * 
 * 
 */
note1=12;
note2=9;
note3=15
somme=note1+note2+note3; // 12+9
let moyenne2=somme/3;

tab_note=[ 13   ,   7    ,    15     ];
console.table(tab_note);
console.log(tab_note[1]);
somme=0;
for (let i = 0; i< tab_note.length; i++ ){
    console.log(tab_note[i]);
    somme=somme+tab_note[i];
}
console.log(somme);
let moyenne=somme/tab_note.length;
console.log(somme);



bnote1=12;
bnote2=15;
bnote3=3
max=0;
if (bnote1 > bnote2){
   max = bnote1;
}
else {
    max=bnote2;
}

console.log("la valeur max est " + max);
max=0;
if (bnote1 > bnote2 && (bnote2 < bnote3)){
    max = bnote1;
 } 
 if (bnote2 > bnote1 && (bnote2 > bnote3)){
    max = bnote2;
 } 
btab_note=[10,4,3,15,3,4,15]
max=0;
for (let i=0; i < btab_note.length ; i++){

    if (btab_note[i] > max){
        max=btab_note[i];
    }

}


min=20;
for (let i=0; i < btab_note.length ; i++){

    if (btab_note[i] < min){
        min=btab_note[i];
    }

}




/**
 * 1. Créer un tableau ‘age’ comprenant 5 nombres entiers
2. Ecrire le codequi permet de
 calculer la somme totale des âges
3. Ecrire le code qui permet de calculer
 la moyenne des âges
 Ecrire le code permettant de trouver l'age maximum
 et minimum
4. Créer un tableau ‘prenom’ comprenant
 5 éléments différents de type String.
5. Ecrire le codepour définir
 l'élément le plus petit du tableau
  prenom (celui comportant le moins de lettres)
6. Fusionner les deux tableaux ‘note’
 et ‘prenom’ en un nouveau tableau nommé ‘students’
7. Ecrire le codequi permet
 de sommer les nombres et les longueurs 
 de chaque élément de type String


 ----
 8. Inverser les lettres du nom
  (par exemple Henri devient irneH) avec un boucle
9. Supprimer toutes les 
voyelles dans la phrase suivante "Academy Rocks”
 */
/// definition ! 
function sepresenter(){
    console.log("hello world !");
}


// appel 
sepresenter();