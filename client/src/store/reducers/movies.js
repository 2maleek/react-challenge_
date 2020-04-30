const initialState = {
  movies: ['kelomang'],
  movie: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return { ...state, movies: action.payload.movies }
    case "GET_MOVIE_DETAIL":
      return { ...state, movie: action.payload.movie };
    default:
      return state;
  }
}