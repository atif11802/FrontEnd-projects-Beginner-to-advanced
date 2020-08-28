import React from 'react'
import { NavLink, withRouter} from 'react-router-dom'

let Nav = () => {
    return (
        
            <nav let className=" container-fluid navbar navbar-expand-lg navbar-dark bg-danger">
                <div className=" container">
                <a className="navbar-brand" >Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto ">
                        <NavLink className="nav-link " to="/">Home</NavLink>
                        <NavLink className="nav-link " to="/about">About</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
    )
}

export default withRouter(Nav)