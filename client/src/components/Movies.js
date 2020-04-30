import React, {  useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { getMovieDetail } from '../store/actions/moviesActions'

function Movies() {
  let match = useRouteMatch()
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
  const movie = useSelector((state) => state.moviesReducer.movie);
  const dispatch =  useDispatch()
  let { movieId } = useParams();
  const imgUrl = 'http://image.tmdb.org/t/p/w342'

  useEffect(() => {
    dispatch(getMovieDetail(movieId))
  }, [])

  return (
    <>
    { movie ?
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
