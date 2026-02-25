import { Link } from "react-router-dom"

const CardMovie = (props) => {

    const { id, title, director, genre, abstract, image, release_year } = props.movieProp
    return (
        <div className="card mb-4">
            <img src={image}
                className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <address><i>{director}</i></address>
                <h6 className="cardcard-subtitle">{genre}</h6>
                <h6 className="cardcard-subtitle">{release_year}</h6>
                <p className="card-text">{abstract}</p>
                <Link to={`movies/${id}`} className="btn btn-primary">See more</Link>
            </div>
        </div>
    )
}

export default CardMovie