import { useMemo } from 'react'
import MoviesGrid from "../../components/movies-grid"
import { container, whiteBox } from './styles'

const Favourites = () => {
    const movies = useMemo(() => {
        const movieJsons = { ...localStorage }
        return Object.values(movieJsons).map((value) => JSON.parse(value))
    }, [localStorage])

    return (
        <div css={container}>
            <h2 css={whiteBox}>Favourites</h2>
            { !movies.length && <div css={whiteBox}>Favourites empty! Try adding some through the search function.</div> }
            <MoviesGrid movies={movies} />
        </div>
    )
}

export default Favourites