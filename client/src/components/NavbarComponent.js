import React,{ useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

function NavbarComponent(props) {

  const [keyword, setKeyword] = useState('')
  const [error, setError] = useState(null)
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=9435ef832f577bb7037f8360b55808ba&language=en-US&page=1&query='

  function liat(e) {
    setKeyword(e.target.value)
  }

  function searchMovie(e) {
    e.preventDefault()
    fetch(url+keyword)
    .then(response => response.json())
    .then(data => {
      if(data.status_code) {
        throw data
      }
      console.log(data)
      props.onSearchMovies(data)
    })
    .catch(err => {
      setError(err.status_message)
      console.log(error)
    })
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Link to="/" data-testid="homeBtn">
          <Navbar.Brand>Movie</Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          <Link to="/myFavorite" data-testid="myFavBtn">
            <Nav>My Favorite</Nav>
          </Link>
        </Nav>
        <Form inline onSubmit={searchMovie}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={liat} />
          <Button variant="outline-info" type="submit">Search</Button>
        </Form>
      </Navbar>
    </>
  )
}

export default NavbarComponent;
