import React, { useState, useEffect } from 'react';
import CardMovies from '../components/CardMovies';
import NavbarComponent from '../components/NavbarComponent';
import { Button, Spinner } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../store/actions/moviesActions';
function Home() {

  // const [listMovies, setListMovies, loading] = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=9435ef832f577bb7037f8360b55808ba&language=en-ID&page=1')
  const [listMovies, setListMovies] = useState([])
  const movies = useSelector(state => state.moviesReducer.movies); 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovies())
  }, [])

  useEffect(() => {
    setListMovies(movies)
  }, [movies])
  
  function searchMovies(data) {
    setListMovies(data.results)
  }
  return (
    <>
      <NavbarComponent onSearchMovies={searchMovies}/>
      <h2>Popular Movie</h2>
      { !movies ?
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
       <CardMovies listMovies={listMovies}/>
    </>
  );
}

export default Home;
