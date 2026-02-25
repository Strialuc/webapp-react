// import axios
import axios from "axios";
// import state e effect
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import CardReview from "../components/CardReview"

const endpoint = "http://localhost:3000/api/books/";


const MoviePage = () => {

    // prendiamo id libro da url rotta
    const { id } = useParams();

    // creiamo istanza del navigate per poterlo utilizzare
    const redirect = useNavigate();

    // settiamo la var di stato per il libro
    const [movie, setMovie] = useState({});

    // funzione che gestisce la chiamata alla rotta show di BE
    const fetchBook = () => {
        axios.get(endpoint + id)
            .then(res => { setMovie(res.data); })
            .catch(err => {
                console.log(err);
                if (err.status = 404) redirect('/404');
            })
    }

    // richiamo funzione di fetch al montaggio della page
    useEffect(fetchBook, []);

    //funzione render reviews
    const renderReviews = () => {
        return (movie.reviews?.map(rev => {
            return (
                <CardReview revProp={rev} key={rev.id} />
            )
        }))
    }
    return (
        <>
            <header id="movie" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    <img src={movie.image} alt={movie.title} />
                </div>
                <h1>{movie.title}</h1>
                <h3 className="text-muted"><i>By {movie.director}</i></h3>
                <p>{movie.abstract}</p>
            </header>
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>
                {renderReviews()}
            </section>
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>
        </>
    )
}

export default MoviePage