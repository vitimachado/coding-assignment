import { NavLink } from "react-router-dom"
import { useSelector } from 'react-redux'
import { RootState } from "../../../data/store";

import '../../../styles/header.scss'

export const NavLinkComponent = () => {
  const { starredMovies } = useSelector((state: RootState) => state.starred);

  return (
    <nav>
        <NavLink to="/starred" data-testid="nav-starred" className="nav-starred">
            {starredMovies.length > 0 ? (
                <>
                    <i className="bi bi-star-fill bi-star-fill-white" />
                    <sup className="star-number">{starredMovies.length}</sup>
                </>
            ) : (
                <i className="bi bi-star" />
            )}
        </NavLink>
        <NavLink to="/watch-later" className="nav-fav">
            watch later
        </NavLink>
    </nav>
  )
}

