import React, { Component } from 'react'


export default class Navbar extends Component {
    

  render() {

    let {title,fashion,fas,modeb}=this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body navbar bs-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          
        </li>
        <li className="nav-item">
         
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
       
      </form>
      <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" onClick={fashion} role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color : fas==="dark" ? "lime" : "black"}}>{modeb}</label>
</div>

    </div>
  </div>
</nav>
      </div>
    )
  }
}