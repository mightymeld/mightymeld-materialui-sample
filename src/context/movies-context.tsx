import React, { createContext, ReactNode, useReducer } from "react";
import { moviesData, MovieDataType } from "../assets/data.js";

interface MovieContextProps {
  children: ReactNode;
}

interface MovieState {
  Movies: MovieDataType[];
}

interface MovieAction {
  type: string;
  id: string;
}

const MovieReducer = (state: MovieState, action: MovieAction): MovieState => {
  switch (action.type) {
    case "ADD BOOKMARK":
      return {
        ...state,
        Movies: state.Movies.map((movie) => {
          if (movie.id === action.id) {
            return { ...movie, isBookmarked: true };
          }
          return movie;
        }),
      };
    case "REMOVE BOOKMARK":
      return {
        ...state,
        Movies: state.Movies.map((movie) => {
          if (movie.id === action.id) {
            return { ...movie, isBookmarked: false };
          }
          return movie;
        }),
      };
    default:
      return state;
  }
};

const MovieList: MovieDataType[] = moviesData;

const initialMovieState: MovieState = {
  Movies: MovieList,
};

export const MovieContext = createContext<{
  state: MovieState;
  dispatch: React.Dispatch<MovieAction>;
}>({
  state: initialMovieState,
  dispatch: () => {},
});

export const MovieProvider = ({ children }: MovieContextProps) => {
  const [state, dispatch] = useReducer(MovieReducer, initialMovieState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
