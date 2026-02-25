import { Link } from "react-router-dom"

const MainHeader = () => {

    return (
        <header>
            <nav className="navbar bg-body-tertiary mb-4">
                <div className="container-fluid justify-content-start">
                    <Link className="navbar-brand" to="/">Bool Movies</Link></div>
            </nav>
        </header>
    )

}

export default MainHeader