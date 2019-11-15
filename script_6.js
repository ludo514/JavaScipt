function main() {
    let adn = prompt("Entrez l'adn")
    let condons = retourne_condon(adn,3)
    console.log(condons)
    proteines(condons)
}

main()


function retourne_condon(adn, nombre){
    adn = adn.split("")
    let condon = []
    let inter = ""
    let compte = nombre
    for (let i = 0; i < adn.length; i++){
        inter += adn[i]
        compte--
        if (inter.length === 3) {
            condon.push(inter)
            inter = ""
            compte = nombre
        }
    }
    return condon
}

function proteines(condons) {
    let condon = ""
    let proteines = []
    for(i in condons){
        condon += condons[i]
        proteines.push(verif_condons(condon))
        condon = ""
    }
    console.log(proteines)
}

function verif_condons(condon) {
    if (condon.includes("UC") || condon.includes("AG")){
        return "Sérine"
    }else if (condon.includes("CC")) {
        return "Proline"
    }else if (condon.includes("UUA") || condon.includes("UUG")) {
        return "Leucine"
    }else if (condon.includes("UUU") || condon.includes("UUC")){
        return "Phénylalanine"
    }else if (condon.includes("GG") || condon.includes("GA") || condon.includes("CGU") || condon.includes("CGC")) {
        return "Arginine"
    }else if (condon.includes("UAU") || condon.includes("UAC")) {
        return "Tyrosine"
    }
}