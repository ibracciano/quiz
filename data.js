const prices = [
    {
        id: 1,
        price: "10.000 FCFA",
    },
    {
        id: 2,
        price: "20.000 FCFA",
    },
    {
        id: 3,
        price: "30.000 FCFA",
    },
    {
        id: 4,
        price: "40.000 FCFA",
    },
    {
        id: 5,
        price: "50.000 FCFA",
    },
    {
        id: 6,
        price: "60.000 FCFA",
    },
    {
        id: 7,
        price: "70.000 FCFA",
    },
    {
        id: 8,
        price: "80.000 FCFA",
    },
    {
        id: 9,
        price: "90.000 FCFA",
    },
    {
        id: 10,
        price: "100.000 FCFA",
    },
]

const data = [
    {
        id: 1,
        question: "Quelle est la capitale de la Côte d'Ivoire ?",
        answers: [
            {
                option: "A",
                text: "Abidjan",
                correct: true,
            },
            {
                option: "B",
                text: "Bouaké",
                correct: false,
            },
            {
                option: "C",
                text: "Yamoussoukro",
                correct: false,
            },
            {
                option: "D",
                text: "Daloa",
                correct: false,
            },
        ],
    },

    {
        id: 2,
        question: "Quelle est la superficie de la Côte d'Ivoire ?",
        answers: [
            {
                option: "A",
                text: "322000 km2",
                correct: false,
            },
            {
                option: "B",
                text: "126356 km2",
                correct: false,
            },
            {
                option: "C",
                text: "236363 km2",
                correct: false,
            },
            {
                option: "D",
                text: "322462 km2",
                correct: true,
            },
        ],
    },

    {
        id: 3,
        question: "Qui est le président actuel de la France ?",
        answers: [
            {
                option: "A",
                text: "Alassane Ouattara",
                correct: false,
            },
            {
                option: "B",
                text: "Karambiri Mamadou",
                correct: false,
            },
            {
                option: "C",
                text: "Junior Moscou",
                correct: false,
            },
            {
                option: "D",
                text: "Emmanuel Macron",
                correct: true,
            },
        ],
    },

    {
        id: 4,
        question: "En quelle année fut construit le mur de Berlin ? ",
        answers: [
            {
                option: "A",
                text: "1939",
                correct: false,
            },
            {
                option: "B",
                text: "1945",
                correct: false,
            },
            {
                option: "C",
                text: "1954",
                correct: false,
            },
            {
                option: "D",
                text: "1961",
                correct: true,
            },
        ],
    },

    {
        id: 5,
        question: "En quelle année Adolf Hitler a-t-il accédé au pouvoir en Allemagne ?",
        answers: [
            {
                option: "A",
                text: "1933",
                correct: true,
            },
            {
                option: "B",
                text: "1936",
                correct: false,
            },
            {
                option: "C",
                text: "1938",
                correct: false,
            },
            {
                option: "D",
                text: "1940",
                correct: false,
            },
        ],
    },

    {
        id: 6,
        question: "Le gouvernement qui parvint en 1952 à stabiliser le franc fut celui ",
        answers: [
            {
                option: "A",
                text: "d’Edgar Faure",
                correct: false,
            },
            {
                option: "B",
                text: "de Pierre Poujade",
                correct: false,
            },
            {
                option: "C",
                text: "d’Antoine Pinay",
                correct: true,
            },
            {
                option: "D",
                text: "de Camille Makosso",
                correct: false,
            },
        ],
    },

    {
        id: 7,
        question: "Combien de morts a fait la Première Guerre mondiale ?",
        answers: [
            {
                option: "A",
                text: "5,3 millions",
                correct: false,
            },
            {
                option: "B",
                text: " 7,8 millions",
                correct: false,
            },
            {
                option: "C",
                text: "9,4 millions",
                correct: true,
            },
            {
                option: "D",
                text: "11,2 millions",
                correct: false,
            },
        ],
    },

    {
        id: 8,
        question: "En 1941, les peuples de Yougoslavie repoussèrent les Allemands sous la conduite ?",
        answers: [
            {
                option: "A",
                text: "de Nicolae Ceaușescu",
                correct: false,
            },
            {
                option: "B",
                text: "de Lech Walesa",
                correct: false,
            },
            {
                option: "C",
                text: "d’Alexander Dubček",
                correct: false,
            },
            {
                option: "D",
                text: "du maréchal Tito",
                correct: true,
            },
        ],
    },

    {
        id: 9,
        question: "Le krach de Wall Street à New York eut lieu",
        answers: [
            {
                option: "A",
                text: "en octobre 1929",
                correct: true,
            },
            {
                option: "B",
                text: "en novembre 1932",
                correct: false,
            },
            {
                option: "C",
                text: "en janvier 1934",
                correct: false,
            },
            {
                option: "D",
                text: "en decembre 2003",
                correct: false,
            },
        ],
    },

    {
        id: 10,
        question: "En 1979, après la chute du chah, l’instauration d’un régime islamique fut dirigée par :",
        answers: [
            {
                option: "A",
                text: "Ferhat Abbas",
                correct: false,
            },
            {
                option: "B",
                text: "Mao Tsé-toung",
                correct: false,
            },
            {
                option: "C",
                text: "l’ayatollah Khomeiny",
                correct: true,
            },
            {
                option: "D",
                text: "Mickael Gorbatchev",
                correct: false,
            },
        ],
    }
]



export { prices, data }