
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { setSearchParam } from "../../../data/moviesSlice";
import { AppDispatch } from "../../../data/store";

import '../../../styles/header.scss'

export const SearchMovieInput = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const getSearchResults = (query: string) => {
        dispatch(setSearchParam(query));
  }

  const searchMovies = (query: string) => {
        navigate('/')
        getSearchResults(query);
  }

  const handleSearchMovies = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const query = (event.target as HTMLInputElement).value;
        searchMovies(query)
  }

  return (
    <div className="input-group rounded">
        <Link to="/" className="search-link" >
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

