import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'

import '../../styles/header.scss'
import { ENDPOINT_DISCOVER } from "../../constants"
import { fetchMovies } from "../../data/moviesSlice"
import { AppDispatch } from "../../data/store"
import { NavLinkComponent } from "./NavLink"
import { SearchMovieInput } from "./SearchMovieInput"

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const searchMovies = () => {
      navigate('/')
      dispatch(fetchMovies(ENDPOINT_DISCOVER))
  }

  return (
    <header>
      <Link to="/" data-testid="home" onClick={() => searchMovies()}><i className="bi bi-film" /></Link>
      <NavLinkComponent />
      <SearchMovieInput />
    </header>
  )
}

export default Header
