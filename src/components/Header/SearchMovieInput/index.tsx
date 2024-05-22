
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { ENDPOINT_SEARCH, ENDPOINT_DISCOVER } from "../../../constants";
import { fetchMovies } from "../../../data/moviesSlice";
import { AppDispatch } from "../../../data/store";

import '../../../styles/header.scss'

export const SearchMovieInput = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const getSearchResults = (query: string) => {
    if (query !== '') {
        dispatch(fetchMovies(`${ENDPOINT_SEARCH}&query=`+query))
    } else {
        dispatch(fetchMovies(ENDPOINT_DISCOVER))
    }
  }

  const searchMovies = (query: string) => {
        navigate('/')
        getSearchResults(query)
  }

  const handleSearchMovies = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const query = (event.target as HTMLInputElement).value;
        searchMovies(query)
  }

  return (
    <div className="input-group rounded">
        <Link to="/" onClick={() => searchMovies('')} className="search-link" >
            <input type="search" data-testid="search-movies"
                onKeyUp={(e) => handleSearchMovies(e)} 
                className="form-control rounded" 
                placeholder="Search movies..." 
                aria-label="Search movies" 
                aria-describedby="search-addon" 
            />
        </Link>            
    </div>   
  )
}

