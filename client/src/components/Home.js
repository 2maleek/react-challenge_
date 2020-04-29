import React, { useState, useEffect } from 'react';
import CardMovies from '../components/CardMovies';
import NavbarComponent from '../components/NavbarComponent';
import { Button, Spinner, Alert } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';

function Home() {

  const [listMovies, setListMovies, loading, error] = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=9435ef832f577bb7037f8360b55808ba&language=en-ID&page=1')
  const [show, setShow] = useState(false);

  function searchMovies(data) {
    console.log('masukan adri app js emitan istilahnya')
    console.log(listMovies)
    // console.log(data.results)
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
