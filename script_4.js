const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

function main() {
    var entrepreneur = recupAnnee(entrepreneurs)
    var age = recupAge(entrepreneurs)
    let prenom = alphabetique(entrepreneurs)
    recupEntrepreneurs(entrepreneurs)

    for (let i = 0; i < entrepreneur.length; i++) {
        console.log(entrepreneur[i])
    }

    for (let i = 0; i < age.length; i++) {
        console.log(age[i])
    }
    
    for(i in prenom){
        console.log(prenom[i])
    }
}

main()


function recupAnnee(objet) {
    let tableau = []
    for(let index in objet) {
        tableau.push({"first":objet[index].first, "last":objet[index].last})
    }
    return tableau
}

function recupEntrepreneurs(objet) {
    for(let index in objet) {
        if (objet[index].year >= 1970 && objet[index].year < 1980) {
            console.log(objet[index].year)
        }
      }
}

function recupAge(objet) {
    let age = []
    for(let index in objet) {
        resultat = 2019 - objet[index].year
        age.push({"prenom" : objet[index].first,"age" : resultat})
    }
    return age
}

function alphabetique(objet) {
    let prenom = []
    for(let index in objet) {
        prenom.push(objet[index].first)
    }
    prenom.sort()
    return prenom
}