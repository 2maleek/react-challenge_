import React, { useState, useEffect } from 'react';
import CardMovies from './components/CardMovies';
import { Button, Spinner } from 'react-bootstrap';

function App() {
  const [listMovies, setListMovies] = useState(['pertmax'])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=9435ef832f577bb7037f8360b55808ba&language=en-ID&page=1')
    .then(response => response.json())
    .then(data => {
      if(data.status_code) {
        throw data
      }
      setListMovies(data.results)
    })
    .catch(error => {
      console.log(error.status_message)
    })
  }, [])

  return (
    <>
      <h2>Popular Movie</h2>
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
      <CardMovies listMovies={listMovies}/>
    </>
  );
}

export default App;
