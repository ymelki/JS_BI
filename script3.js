function echanger(a,b){
    temp=a;
    a=b;
    b=temp;
    console.log("la valeur de a est "+ a + ". la valeur de b est "+ b);
}

function echanger_tab(a,b){
    tab=Array();
    tab[0]=b;
    tab[1]=a;
    return tab;
}
//appel
echanger(1,2);

function echange2_tab(tab){

    let tab1=Array();
    tab1[0]=tab[1];
    tab1[1]=tab[0];

    return tab1;
}

function echange3_tab(tab , i , j){
    temp=tab[i];
    tab[i]=tab[j];
    tab[j]=temp;    

    return tab;
}

function check_age(nb){
    if (nb > 17){
        return true;
    }
    else{
        return false;
    }
}

function check_age_tab(tab){
    let tab_age=Array();
    for (let i = 0; i < tab.length ; i++){
        if (tab[i] > 17){
            tab_age[i]=true;
        }
        else {
            tab_age[i]=false;
        }
        
    } 
    return tab_age;
}
console.table(echanger_tab(10,20));

console.table(echange2_tab([12,34]));

console.table(echange3_tab([12,34,32,35,15] , 0, 4    ));

console.log(check_age(12));  //false
console.log(check_age(20));  //true

console.table(check_age_tab([12,34,32,35,15]))



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

 

EXO 1 : une fonction qui calcule la moyenne d'un tableau
EXO 2 : une fonction qui calcule le max d'un tableau
EXO 3 : une fonction qui calcule le min d'un tableau
Exo 4 : une fonction qui demande le niveau d'un jeu et qui renvoie son niveau
Exo 5 : une fonction qui inverse les lettres
 d'une chaine de caractere
Exo 6 : une fonction qui renvoie true ou false si une chaine
 de caractere est un palindrome.
Exo 7 : une fonction qui trie un tableau de nombre
// il faudra une fonction d'échanger de valeur d'un tableau
//                        qui recupère l'indice du min d'un tableau
**/

// def
function moyenne(tab){
    let somme=0;
    for (let i = 0 ; i < tab.length; i++){
        somme=somme+tab[i];

    }
    moyenne=somme/tab.length;
    return moyenne;
    
}


function max(tab){
    let max=0;
    for (let i = 0 ; i < tab.length; i++){
        if (tab[i] > max){
            max=tab[i];
        }
    }
    return max;
}



function min(tab){
    let min=99999;
    for (let i = 0 ; i < tab.length; i++){
        if (tab[i] < min){
            min=tab[i];
        }
    }
    return min;
}

function inverse(chaine){
    let chaineinverse="";
    for (let i = chaine.length - 1; i >=0; i--){
        chaineinverse=chaineinverse+chaine[i];
    }
    return chaineinverse;
}

function palindrome(chaine1,chaine2){
    if (chaine1 == inverse(chaine2)  ){
    return true;
    }
    else{
    return false;
    }
}
//appel
console.log(moyenne([0,20]));

console.log(max([0,20]));

console.log(min([0,20]));

console.log(inverse("bonjour ! "));

// il faudra une fonction d'échanger de valeur d'un tableau
//                        qui recupère l'indice du min d'un tableau

function min_tab(tab,k){
    min=999;
    j=100;
    for (let i=k; i < tab.length; i++){
        if (tab[i]<min){
            min=tab[i];
            j=i;
        }

    }
    return j ;

}

//console.log(min_tab([12,34,2,0,56]));

console.table(echange3_tab([12,34,32,35,15] , 0, 4    ));


function trie_test(tab){

    for (n=0; n< tab.length;n++){
        for (let i=n; i< tab.length;i++){
            indice=min_tab(tab,n);
            console.log(indice);
            echange3_tab( tab , n,indice   );
        }
        n++;
    }
    
        return tab;
}


function trie_test2(tab){

    for (n=0; n< tab.length;n++){
            indice=min_tab(tab,n);
            console.log(indice);
            echange3_tab( tab , n,indice   );
    
    }
    
    return tab;
}
console.log(min_tab([3,2,45,34,56],1));
console.table([3,2,45,34,56]);
console.table(trie_test2([3,2,45,34,56]));
//console.table(trie_test([3,2,45,34,56]))
for (let n=0;n<tab.length;){

}
indice=min_tab(tab,n);
            indice=min_tab(tab,n);
            console.log(indice);
            echange3_tab( tab , n,indice   );