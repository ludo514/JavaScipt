chiffre = prompt("Combien d'étage veux-tu ?")
Number(chiffre)
console.log(pyramid(chiffre))

function pyramid(n) {
    var espace = n
    for (let colonne = 0; colonne < n; colonne++) {
        console.log(" ".repeat(espace) + "#".repeat(colonne))
        espace--;
    }
}