import {SEARCH} from '../actions';

const initialState = {contents: ['Mirististica', 'Vet'], value: '', movies: []};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SEARCH: {
      const {value} = action;
      const movies = state.contents.filter((val) => val.includes(value));
      return {...state, value, movies};
    }
    default:
      return state;
  }
}