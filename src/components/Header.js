//Rafc returns named export and rafce returns default export
//here rafce is used
import React from 'react'
import PropTypes from 'prop-types';
function Header(props) {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      </ul>
      {/* In below code we wrote a ternery operator with props.searchBar is it is true then show the search baar and if not then show nothing and we have to do this all in curly braces */}
      {props.searchBaar?<form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>:"No Search Baar"}
    </div>
  </div>
</nav>
    </>
  )
}
export default Header
Header.defaultProps={
    title:"Default title",
}
Header.propTypes={
    title: PropTypes.string,
    searchBaar:PropTypes.bool.isRequired //we will get error if someone does not passes the searchbaar either in default props or manual props
}