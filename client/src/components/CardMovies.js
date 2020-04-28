import React from 'react';
import { Card } from 'react-bootstrap';

function CardMovies(props) {
  return (
    <div className="container">
      <div className="row">
        {props.listMovies.map((movie, idx) => {
          let imageUrl = "http://image.tmdb.org/t/p/w154"
          imageUrl += movie.poster_path
          return (
            <div className="cols-12">
              <Card key={ idx } style={{ width: '12rem' }}>
                <Card.Img variant="top" src={imageUrl} />
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
