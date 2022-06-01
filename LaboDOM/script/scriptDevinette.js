var nbEssai = 9;
function getRandomInt(max) {
    return Math.floor(Math.random()*Math.floor(max));
}

function verifier() {
    var nB=document.getElementById("nombre").value;
    nbEssai=document.getElementById("nbEssai").value;
    var trouve=false;
    var nbE=nbEssai-1;

    //alert(nombreCache);//pour déboguer
    //alert(nbEssai);//pour déboguer
    if(nbEssai>0) 
    {
        if(nB<nombreCache) {
            
            document.getElementById("nbEssai").innerHTML=nbE;
            document.getElementById("message").innerHTML="Non, le nombre est plus grand.";
           

        } else if(nB>nombreCache) {
            
            document.getElementById("nbEssai").innerHTML=nbE;
            document.getElementById("message").innerHTML="Non, le nombre est plus petit.";
           

        } else if(nB=nombreCache) {
            trouve==true;
           var essai=9-nbE;
            document.getElementById("message").innerHTML="Bravo! Vous avez trouvé la réponse en "+essai+" essais!"
           
        }
    } 
    else if(nbEssai=0)
    {
        document.getElementById("message").innerHTML="Game Over!!! La bonne réponse était "+nombreCache;

    }

}
//function rejouer()