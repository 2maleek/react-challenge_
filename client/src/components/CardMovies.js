import React, { Component } from 'react';

class CardMovies extends Component {
  constructor() {
    super()
    this.state = {
      listMovies: []
    }
  }
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=9435ef832f577bb7037f8360b55808ba&language=en-ID&page=1')
    .then(res => res.json())
    .then(resJson => {
      this.setState({
        listMovies: resJson.results
      })
      console.log(this.state.listMovies)
    })
  }
  render() {
    return (
      <>
        {this.state.listMovies.map((movie, idx) => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          )
        })}
      </>
    )
  }
}

export default CardMovies;
