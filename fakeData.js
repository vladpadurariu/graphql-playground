const UserList = [
    {
        id: 1,
        name: "John",
        username: "Johnny",
        age: 20,
        nationality: "CANADA"
    },
    {
        id: 2,
        name: "Vlad",
        username: "Vladut",
        age: 39,
        nationality: "ROMANIA",
        friends: [
            {
                id: 3,
                name: "Sarah",
                username: "lesbois",
                age: 22,
                nationality: "PHILIPINES"
            },
            {
                id: 5,
                name: "Julia",
                username: "jul<3",
                age: 19,
                nationality: "GERMANY"
            }
        ]
    },
    {
        id: 3,
        name: "Sarah",
        username: "lesbois",
        age: 22,
        nationality: "PHILIPINES"
    },
    {
        id: 4,
        name: "Rajesh",
        username: "Raj",
        age: 27,
        nationality: "INDIA"
    },
    {
        id: 5,
        name: "Julia",
        username: "jul<3",
        age: 19,
        nationality: "GERMANY",
        friends: [
            {
                id: 3,
                name: "Sarah",
                username: "lesbois",
                age: 22,
                nationality: "PHILIPINES"
            }
        ]
    }
];

const MoviesList = [
    {
        id: 1,
        name: "LOLEnstein",
        year: 2000,
        isInTheaters: true
    },
    {
        id: 2,
        name: "LOLField",
        year: 2020,
        isInTheaters: true
    },    
    {
        id: 3,
        name: "A field full of LOLstices",
        year: 1988,
        isInTheaters: true
    },    
    {
        id: 4,
        name: "In the name of LOL",
        year: 2030,
        isInTheaters: false
    },
];

module.exports = { UserList, MoviesList };