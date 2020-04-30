export function getMovies() {
  return (dispatch, getState) => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=9435ef832f577bb7037f8360b55808ba&language=en-ID&page=1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GET_MOVIES",
          payload: {
            movies: data,
          },
        });
      });
  };
}

export function getMovieDetail(movieId) {
  return (dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9435ef832f577bb7037f8360b55808ba&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GET_MOVIE_DETAIL",
          payload: {
            movie: data,
          },
        });
      });
  };
}