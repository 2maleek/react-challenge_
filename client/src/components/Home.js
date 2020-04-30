import React from 'react';
import CardMovies from '../components/CardMovies';
import NavbarComponent from '../components/NavbarComponent';
import { Button, Spinner } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';


function Home() {

  const [listMovies, setListMovies, loading] = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=9435ef832f577bb7037f8360b55808ba&language=en-ID&page=1')
  
  function searchMovies(data) {
    setListMovies(data.results)
  }
  return (
    <>
      <NavbarComponent onSearchMovies={searchMovies}/>
      <h2>Popular Movie</h2>
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
      <CardMovies listMovies={listMovies}/>
    </>
  );
}

export default Home;
