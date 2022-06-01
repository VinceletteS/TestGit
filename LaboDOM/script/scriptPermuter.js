var n = 0;
function permuter(nb1, nb2, nb3) {
    n++;
    if (n <= 10) {
        nb0 = document.getElementById("nb1").value;
        document.getElementById("nb1").value = document.getElementById("nb2").value;       
        document.getElementById("nb2").value = document.getElementById("nb3").value;
        document.getElementById("nb3").value = nb0;
        document.getElementById("Résultat").innerHTML = "Nombre de permutation = " + n;
        document.getElementById("Résultat").style.color = "white";
        document.getElementById("Résultat").style.fontSize = "40px"
       
    } else {
        document.getElementById("Résultat").innerHTML = "Le nombre maximal de permutations est atteint."
    }


}