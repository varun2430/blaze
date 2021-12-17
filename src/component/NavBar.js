import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>

            <nav className="navbar navbar-dark bg-dark">


                <div className="container-fluid">
                  
                    <h4>
                        <Link className="navbar-brand" to="/">Blaze</Link>
                    </h4>

                    <h4>
                        <a className="navbar-brand" href="https://github.com/varun2430/blaze" target="_blank" rel="noreferrer">
                            <i class="fa fa-github"></i>
                        </a>
                    </h4>
            
                </div>

            </nav>
            
        </>
    )
}

export default NavBar
