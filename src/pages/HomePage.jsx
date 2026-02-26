//importo axios
import axios from "axios"
//importo state e effect
import { useState, useEffect } from "react"

import CardMovie from "../components/CardMovies"

//creo variabile per gestire endpoint
const endpoint = "http://localhost:3000/api/movies";

const HomePage = () => {

    //imposto variabile di stato
    const [movies, setMovies] = useState([]);

    //funzione che gestisce chiamata a BE
    const fetchMovie = () => {
        axios.get(endpoint)
            .then(res => {
                setMovies(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };


    //funzione rendering listato movie
    const renderMovies = () => {
        return movies.map(movie => {
            return (

                <CardMovie key={movie.id} movieProp={movie} />

            )
        })
    }

    //richiamo funz di fetch al montaggio home page
    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <>
            <h1 className="text-primary">Bool Movies</h1>
            <h2><i>The boolean nerd movies community</i></h2>
            <div>
                <section className="row row-cols-3 mt-4">
                    {renderMovies()}
                </section>
            </div>
        </>
    )
}

export default HomePage