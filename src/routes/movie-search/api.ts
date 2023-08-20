import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { MovieInfo } from '../../types'

type SearchData = {
    Response: boolean,
    Search: MovieInfo[]
    totalResults: string
}

const selectFunc = (data: SearchData) => {
    const numOfResults = parseInt(data.totalResults)
    const returningData: {movies: MovieInfo[], pages: number[] | undefined} = {movies: data.Search, pages: undefined}

    // preparing an array of page numbers so they can just be mapped into elements
    if (numOfResults >= 10) {
        const pagesArray = Array.from({ length: Math.ceil(numOfResults / 10) }, (_v, i) => i + 1)
        returningData.pages = pagesArray
    }

    return returningData
}

const useMoviesList = (movieName: string, page: number = 1, enabled: boolean) => 
    useQuery({
        queryKey: ['moviesList', movieName, page],
        queryFn: async () => {
            try {
                const resp = await axios.get<SearchData>(`https://omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${movieName}&page=${page}`)
                return resp.data
            } catch (error) {
                throw error
            }
        },
        select: selectFunc,
        enabled
    })

export default useMoviesList