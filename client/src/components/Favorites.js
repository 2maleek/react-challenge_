import React, { useState, useEffect } from 'react';
import CardMovies from '../components/CardMovies';
import NavbarComponent from '../components/NavbarComponent';
import { Button, Spinner, Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'

function Favorites() {

  const [listMovies, setListMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const { favorite } = useSelector(state => state.favoritesReducer)

  useEffect(() => {
    Promise.all(favorite.map(movieId =>
      fetch('https://api.themoviedb.org/3/movie/'+ movieId +'?api_key=9435ef832f577bb7037f8360b55808ba&language=en-US')
      .then(resp => resp.json())
    ))
    .then(data => {
      console.log(data)
      setListMovies(data)
      setLoading(false)
    })
  }, [])
  function searchMovies(data) {
    console.log(listMovies)
    setListMovies(data.results)
  }
  return (
    <>
      <NavbarComponent onSearchMovies={searchMovies}/>
      <h2>Favorite Movie</h2>
      { loading ?
        <Button variant="primary" disabled className="text-center">
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
       : ''}

      { listMovies.length ?  <CardMovies listMovies={listMovies}/>
        : <h4>Favorite is Empty</h4>}
    </>
  );
}

export default Favorites;
