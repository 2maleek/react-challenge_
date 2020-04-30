import React from 'react';
import { Card } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";
import {
  useSelector, useDispatch
} from 'react-redux'
import { addToFavorite } from '../store/actions/favoritesActions'

function CardMovies(props) {

  const { favorite } = useSelector(state => state.favoritesReducer)
  const dispatch = useDispatch()
  function addFavorite(movieId) {
    console.log(favorite)
    dispatch(addToFavorite(movieId))
  }
  return (
    <div className="container">
      <h4>{favorite}</h4>
      <div className="row">
        {props.listMovies.map(movie => {
          let imageUrl = "http://image.tmdb.org/t/p/w154"
          imageUrl += movie.poster_path
          let targetUrl = "/movies/" + movie.id
          return (
            <div key={ movie.id } className="cols-12 col-xs-6 col-sm-4 col-md-3">
              <Card style={{ width: '12rem' }}>
                <Link to={targetUrl}>
                  <Card.Img variant="top" src={imageUrl} />
                </Link>
                <Card.Body>
                  <Card.Title>{ movie.title }</Card.Title>
                  <Card.Text>
                    { movie.release_date }
                  </Card.Text>
                  <button type="button" onClick={ () => addFavorite(movie.id) }>Add to favorite</button>
                </Card.Body>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CardMovies;
