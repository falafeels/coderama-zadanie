import { Link } from "react-router-dom"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { cardTopPart, favouriteIconContainer, movieCard, moviePoster, movieTitle, moviesGridContainerCss, posterInfo } from "./styles";
import { MovieInfo } from "../../types";
import FavouriteIcon from "../favourite-icon";

const noPosterAvailableUrl = 'https://images.entertainment.ie/uploads/2021/08/27144852/generic-movie-poster.jpg?w=400&q=high'

const MoviesGrid = ({movies}: {movies: MovieInfo[]}) => {
    return (
        <div css={moviesGridContainerCss}>
            { movies.map(({Title, Year, Type, Poster, imdbID}) =>
                <div
                    key={imdbID}
                    css={movieCard}
                >
                    <Link to={`/detail/${imdbID}`} css={cardTopPart}
                    >
                        <img
                            alt={Title}
                            src={Poster === 'N/A' ? noPosterAvailableUrl : Poster}
                            loading="lazy"
                            css={moviePoster}
                        />
                        <div css={posterInfo}>
                            <div css={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                                <CalendarMonthIcon />
                                <span>{Year}</span>
                            </div>
                            <span>{Type}</span>
                        </div>
                    </Link>
                    <div css={{padding: '8px 8px'}}>
                        <Link
                            to={`/detail/${imdbID}`}
                            css={movieTitle}
                        >{Title}</Link>
                    </div>
                    <div data-name='favouriteIcon' css={favouriteIconContainer}>
                        <FavouriteIcon movieInfo={{Title, Year, Type, Poster, imdbID}} size={0.7} />
                    </div>
                </div>
            ) }
        </div>
    )
}

export default MoviesGrid