import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'

export default function Navbar(props) {
    return (
       <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse d-flex justify-content-between"  id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.aboutText}</a>
          </li>
        </ul>

        <form className="d-flex">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
       </>
    )
}

// Props types whether is string or Number or others
Navbar.propsTypes={
    title: propTypes.string,
    aboutText:propTypes.string
}

//For default values if no any properties are set then
Navbar.defaultProps={
  title:"Set the Title",
  aboutText:"Set about text here"
}