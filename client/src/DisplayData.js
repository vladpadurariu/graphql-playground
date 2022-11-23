import React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_ALL_USERS = gql`
    query Users {
        users {
            id
            name
            username
            age
            nationality
        }
    }
`;

const QUERY_ALL_MOVIES = gql`
    query Movies {
        movies {
            name
        }
    }
`;

function DisplayData() {
    const {data, loading, error} = useQuery(QUERY_ALL_USERS);
    const {data: movieData } = useQuery(QUERY_ALL_MOVIES);

    loading ? <h2>Loading...</h2> : (data ? console.log(data) : console.log(error));

    return (
        <div> {data && data.users.map((user) => {
                return (
                    <div>
                        
                        <h2>Name: {user.name}</h2>
                        <h2>Username: {user.username}</h2>
                        <h2>Age: {user.age}</h2>
                        <h2>Nationality: {user.nationality}</h2>
                    </div>
                );
            }) } 

            {movieData && movieData.movies.map((movie) => {
                return <h3>Movie Name: {movie.name}</h3>
            })}
        </div>
    );
}

export default DisplayData;