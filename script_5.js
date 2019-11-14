const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function main() {
    getRented(books)
    plusEmprunter(books)
    moinsEmprunter(books)
    trouveId(books)
    remove(books)
    var titre = alphabetique(books)

    for(let i in titre){
        console.log(titre[i])
    }
}

main()

function getRented(objet){
    for(let index in objet) {
        if (objet[index].rented > 1) {
            console.log(objet[index])
        }
    }
}

function plusEmprunter(objet){
    let rented = []
    for(let index in objet){
        rented.push(objet[index].rented)
    }
    let max = rented[0]
    for (let i = 0; i < rented.length; i++) {
        if (rented[i] > max){
            max = rented[i]
        }
    }
    console.log("La valeur max est : " + max)
}

function moinsEmprunter(objet){
    let rented = []
    for(let index in objet){
        rented.push(objet[index].rented)
    }
    let min = rented[0]
    for (let i = 0; i < rented.length; i++) {
        if (rented[i] < min){
            min = rented[i]
        }
    }
    console.log("La valeur min est : " + min)    
}

function trouveId(objet){
    for(let index in objet)
    {
        if (objet[index].id === 873495) {
            console.log("Livre à l'id 873495 : " + objet[index].title)
        }
    }
}

function remove(objet){
    for(let index in objet) {
        if (objet[index].id === 133712) {
            console.log("Suppresion de l'id 133712")
            objet.splice(objet[index],1)
        }
    }

    for(let index in objet){
        console.log(objet[index])
    }
}

function alphabetique(objet) {
    let titre = []
    for(let index in objet) {
        titre.push(objet[index].title)
    }
    titre.sort()
    return titre
}