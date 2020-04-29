import React from 'react';
import { Card } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";

function CardMovies(props) {
  return (
    <div className="container">
      <div className="row">
        {props.listMovies.map(movie => {
          let imageUrl = "http://image.tmdb.org/t/p/w154"
          imageUrl += movie.poster_path
          let targetUrl = "/movies/" + movie.id
          return (
            <div className="cols-12 col-xs-6 col-sm-4 col-md-3">
              <Card key={ movie.id } style={{ width: '12rem' }}>
                <Link to={targetUrl}>
                <Card.Img variant="top" src={imageUrl} />
              </Link>
                <Card.Body>
                  <Card.Title>{ movie.title }</Card.Title>
                  <Card.Text>
                    { movie.release_date }
                  </Card.Text>
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
