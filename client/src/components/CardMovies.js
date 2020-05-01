import React from 'react';
import {
  Link
} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addToFavorite, removeFromFavorite } from '../store/actions/favoritesActions'

function CardMovies(props) {

  const dispatch = useDispatch()
  function addFavorite(movieId) {
    dispatch(addToFavorite(movieId))
  }

  function removeFavorite(movieId) {
    dispatch(removeFromFavorite(movieId))
  }

  return (
    <>
      <div className="flex justify-center" id="cars">
        <div className="container mh0 w-100">
          <div className="container pa0 flex justify-center">
            <div className="listings card-columns">
              { props.listMovies.map(movie => {
                let imageUrl = "http://image.tmdb.org/t/p/w154"
                imageUrl += movie.poster_path
                let targetUrl = "/movies/" + movie.id
                return (
                  <div key={movie.title} className="card mv1">
                    <Link to={targetUrl}>
                      <img src={imageUrl} className="card-img-top" alt="poster image" />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{ movie.title }</h5>
                      <p className="card-text">{ movie.release_date }</p>
                      <a className="btn btn-sm btn-primary" onClick={ () => addFavorite(movie.id) }>Add to favorite</a>
                      <a className="btn btn-sm btn-danger ml-2" onClick={ () => removeFavorite(movie.id) }>Remove From Favorite</a>
                    </div>
                    <div className="card-footer">
                        buttons here
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardMovies;
