function main() {
    let adn = prompt("Entrez l'adn")
    for (let i = 0; i < adn.length; i++) {
        retourne_condon(adn)
    }
    
}

main()


function retourne_condon(adn){
    adn = adn.split("")

    for (let i = 0; i < adn.length; i++){
        if (i < 3) {
            let condon = []
            condon.push(adn[i])
            if (condon.length === 3) {
                console.log(condon)
            }
        }
        if(i > 3){
            adn.splice(adn[i],1)
        }
    }
}