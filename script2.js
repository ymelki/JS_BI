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

tab_note=[ 13   ,   7    ,    15  , 20 , 12   ];
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



let tab_age=[12,43,23,21,8];

min=100;

let tab_prenom=["Hugo","Pierre","Paul","Jean","Jacques"];
for (let i=0; i < tab_prenom.length ; i++){

    if (tab_prenom[i].length < min){
        min=i;
    }

}
console.log(tab_prenom[min]);

// fusion de tableau
// declarer tableau vide
tab_fusionne=Array();
// fusion des 2 tableau
for (let i = 0 ; i < tab_note.length; i++){
    tab_fusionne[i]=tab_note[i];
}

for (let i = 0 ; i < tab_prenom.length; i++){
    tab_fusionne[i+tab_note.length]=tab_prenom[i];
}

// Somme des deux tableau
somme_n=0;
somme_l=0;
for (let i = 0 ; i < tab_fusionne.length; i++){
    console.log(typeof(tab_fusionne[i]));

    if (typeof(tab_fusionne[i])=="number"){
        somme_n=somme_n+tab_fusionne[i];
    }
    else {
        somme_l=somme_l+tab_fusionne[i].length;
    }
}
result=somme_n+somme_l;
console.log(result);


console.table(tab_fusionne);

let prenom_i="Yoel Melki";
let j=0;
let prenom_ir="";
for (let i=prenom_i.length-1   ; i>=0;i--){
    console.log(prenom_i[i]);
    console.log(j);
    //prenom_ir=prenom_ir+prenom_i[i];
    prenom_ir=prenom_ir+prenom_i[i];
    
    j++; 
}
console.log("info " + prenom_ir);

let variable ="Academy Rocks";
let k=0;
let variable_r=Array();
for (let i = 0 ; i < variable.length; i++){
    if 
    (
    (variable[i].toUpperCase()=="A") ||
    (variable[i].toUpperCase()=="E") || 
    (variable[i].toUpperCase()=="I") || 
    (variable[i].toUpperCase()=="O") || 
    (variable[i].toUpperCase()=="U") || 
    (variable[i].toUpperCase()=="Y") 
    ) {


    }
    else {
        variable_r[k]=variable[i];

    }
    k++;
}
console.table(variable_r)
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

function sePresenter2(){
    let prenom="Yoel";
    console.log("hello world !" + prenom);

}

function sePresenter3(prenom , age){
    console.log("hello world !" + prenom+" et j ai"+age);

}
sePresenter2(); // 

// appel 
sepresenter();
sePresenter3("Yoel test",35)

// notion de retour de valeur

// fonction qui retourne la valeur 1
function test(){
    return 1;
}

test();

// EXO 
SEL=100;
SUCRE=120;

/* EXO 1 : creer une fonction qui prend en parametre les 2 variables
 et qui va les echangé vous les affichez dans la log
   EXO 2 : creer une fonction qui prend en parametre les 2 variables
 et qui va les echangé dans un tableau que vous renvoyé.
 Apres l'appel de la fonction vous affichez le nouveau tableau
 EXO 3creer une fonction qui prend en parametre un tableau
 et qui va les echangé dans un tableau que vous renvoyé.
 Apres l'appel de la fonction vous affichez le nouveau tableau
 EXO 4
 creer une fonction qui prend en parametre un tableau autant de valeur
 que vous voulez , avec 2 autres parametre corespondant a des nombres
 qui seront les indices du tableau qui seront echangé
 et qui va les echangé dans un tableau que vous renvoyé.
 Apres l'appel de la fonction vous affichez le nouveau tableau

 exo 5 
 Creer une fonction qui prend en parametre un prix ht et renvoie
 ce prix ttc
 Creer une fonction qui prend en parametre un tableau de prix ht
  et renvoie  les prix ttc

exo 6
creer une fonction qui prend en parametre une age et renvoie true si
il est majeur / false si il est mineur
creer une fonction qui prend en parametre un tableau age et
 renvoie un tableau de true si
il est majeur / false si il est mineur

 */