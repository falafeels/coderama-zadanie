import { useState } from 'react'
import { MovieInfo } from '../../types'

const useFavourite = (movieInfo: MovieInfo): [boolean, () => void] => {
    const [isFavourited, setIsFavourited] = useState(() => !!localStorage.getItem(movieInfo.imdbID))

    const toggleFavourite = () => {
        const hasFavouriteData = !!localStorage.getItem(movieInfo.imdbID)
        if (hasFavouriteData) localStorage.removeItem(movieInfo.imdbID)
        if (!hasFavouriteData) localStorage.setItem(movieInfo.imdbID, JSON.stringify(movieInfo));
        setIsFavourited(!isFavourited)
    }

    return [isFavourited, toggleFavourite]
}

export default useFavourite