document.getElementById("b1").addEventListener("click",mafonction);
let color=["yellow","grey","green","black"];


function mafonction(){
    let nb = Math.floor(Math.random() * 3) ;
  console.log("test");
  document.getElementById("d1").innerHTML="nouveau texte ! ";
  document.getElementById("d1").style.backgroundColor=color[nb];
}