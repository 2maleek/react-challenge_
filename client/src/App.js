import React, { Component } from 'react';
import CardMovies from './components/CardMovies';
import { Button, Spinner } from 'react-bootstrap';

class App extends Component {
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
        <CardMovies listMovies={this.state.listMovies}/>
      </>
    )
  }
}

export default App;
