import {
  FETCH_INITIAL_POSTS_REQUEST,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  LOAD_MORE_REQUEST,
} from "./PostsReducer-types";

export const postsInitialState = {
  initialFetchDone: true,
  isLoading: false,
  loadMore: false,
  hasError: null,
  errorMessage: null,
  posts: [],
  start: 0,
};

export function postsReducer(state, action) {
  switch (action.type) {
    case FETCH_INITIAL_POSTS_REQUEST: {
      return {
        ...state,
        initialFetchDone: false,
      };
    }
    case LOAD_MORE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        loadMore: true,
        hasError: false,
        start: state.start + action.payload,
        errorMessage: null,
        initialFetchDone: false,
      };
    }
    case FETCH_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        loadMore: false,
        hasError: false,
        errorMessage: null,
        initialFetchDone: true,
        posts: [...state.posts, ...action.payload],
      };
    }
    case FETCH_ERROR: {
      return {
        ...state,
        isLoading: false,
        loadMore: false,
        hasError: true,
        errorMessage: action.payload,
        initialFetchDone: false,
      };
    }
    default: {
      return state;
    }
  }
}
