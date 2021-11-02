import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>

            <nav className="navbar navbar-dark bg-dark">

                <div className="container-fluid">

                    <h4>
                        <Link className="navbar-brand" to="/">Blaze</Link>
                    </h4>

                </div>

            </nav>
            
        </>
    )
}

export default NavBar
