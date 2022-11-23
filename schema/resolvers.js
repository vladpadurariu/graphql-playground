const { UserList, MoviesList } = require("../fakeData");
const _ = require("lodash");

const resolvers =  {
    Query: {
        users: () => {
            return UserList;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, {id: Number(id)});
            return user;
        },

        movies: () => {
            return MoviesList;
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MoviesList, { name });
            return movie;
        }
    },

    User: {
        favMovies: () => {
            return _.filter(MoviesList, (movie) => movie.year >= 2000 && movie.year <= 2010);
        }
    }
};

module.exports = { resolvers };