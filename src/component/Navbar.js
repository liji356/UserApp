import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-info">
    <div className="container-fluid">
      
      <Link className="navbar-brand" to={"/"}>USER</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        
          <Link className="nav-link active" to={"/"}>USER</Link>
          
          <Link className="nav-link active" to={"/place"}>Todo</Link>
          
        </div>
      </div>
    </div>
  </nav>r</div>
  )
}

export default Navbar