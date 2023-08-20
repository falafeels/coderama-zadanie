import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { MovieDetailData } from './types'

const useMovieDetail = (movieId: string) => 
    useQuery({
        queryKey: ['movieDetail', movieId],
        queryFn: async () => {
            try {
                const resp = await axios.get<MovieDetailData>(`https://omdbapi.com/?apikey=9a43bd95&i=${movieId}`)
                return resp.data
            } catch (error) {
                throw error
            }
        },
    })

export default useMovieDetail