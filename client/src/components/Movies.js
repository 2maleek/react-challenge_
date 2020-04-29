import React, {  useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";

function Movies() {
  let match = useRouteMatch()
  let { movieId } = useParams();
  return (
    <Switch>
      <Route path={`${match.path}/:movieId`}>
        <Movie />
      </Route>
      <Route path={match.path}>
        <h3>Please select a topxic.</h3>
      </Route>
    </Switch>
  )
}

function Movie() {
  let { movieId } = useParams();
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const imgUrl = 'http://image.tmdb.org/t/p/w342'
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/419704?api_key=9435ef832f577bb7037f8360b55808ba&language=en-US')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setMovie(data)
      setLoading(false)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <>
    { !loading ?
      <div className="container-fluid">
        <div className="row">
          <div className="col-5">
            <img src={imgUrl+movie.poster_path} />
          </div>
          <div className="col-7">
            <h1>Title: {movie.original_title}</h1>
            <p>Synopsis: {movie.overview}</p>
            <h4>Rating: {movie.vote_average}</h4>
          </div>
        </div>
      </div>

      : 'Loading'
    }
    </>
  )
}

export default Movies
