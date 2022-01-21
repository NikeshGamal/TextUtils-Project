import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'

export default function Navbar(props) {
   let textColor=props.mode==='light'?'dark':'light';
    return (
       <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} px-1`}>
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

        {/* <form className="d-flex">
          <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary mx-1" type="submit">Search</button>
        </form> */}
             <div className={`form-check form-switch text-${textColor}`}>
                 <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                 <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
              </div>
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