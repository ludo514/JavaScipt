
chiffre = prompt("Entre un chiffre")
Number(chiffre)
console.log("Le résultat est : " + factorielle(chiffre))

function factorielle(n){
    if (n === 0) {
        return 1;
    }else{
        return n*factorielle(n-1);
    };
};