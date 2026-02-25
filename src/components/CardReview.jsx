const CardReview = (props) => {

    const { name, vote, text } = props.revProp;


    return (
        <div className="card mb-4">
            <div className="card-body">
                <p className="card-text">
                    {text}
                </p>
                <strong>{vote}</strong>
                <address><i>By {name}</i></address>
            </div>
        </div>
    )
}

export default CardReview