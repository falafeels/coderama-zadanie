import { useParams } from 'react-router'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Skeleton from '@mui/material/Skeleton';
import useMovieDetail from './api';
import { detailContainer, extendedInfo, gridContainer, moviePoster } from './styles';
import DetailIconsBox from './components/detail-icons-box';
import FavouriteIcon from '../../components/favourite-icon';

const Detail = () => {
    const { movieId } = useParams();
    const {data, isLoading, isError} = useMovieDetail(movieId ?? '')

    if (isError || (!isLoading && !data)) return <span>Sorry! There was an error finding the movie.</span>
    return (
        <div css={detailContainer}>
            <Box>
                <Grid container spacing={2} disableEqualOverflow css={gridContainer}>
                    <Grid xs={12} lg={10}>
                        {!isLoading ? (
                            <div css={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                                <FavouriteIcon movieInfo={{imdbID: data.imdbID, Poster: data.Poster, Title: data.Title, Type: data.Type, Year: data.Year}} altStyle={true} />
                                <h1>{data.Title}</h1>
                            </div>
                        ) : (
                            <Skeleton width="400px" height="100px" />
                        )}
                    </Grid>
                    <Grid xs={12} sm={6} lg={3}>
                        {!isLoading ? (
                            <img
                                alt={data.Title}
                                src={data.Poster}
                                loading="lazy"
                                css={moviePoster}
                            />
                        ) : (
                            <Skeleton variant="circular" width="200px" height="200px" />
                        )}
                    </Grid>
                    <Grid xs={12} sm={6} lg={1}>
                        {!isLoading ? (
                            <DetailIconsBox ratings={data.Ratings} />
                        ) : (
                            <Skeleton width="100px" height="200px" />
                        )}
                    </Grid>
                    <Grid xs={12} sm={6} lg={8}>
                        <h2>Synopsis: </h2>
                        {!isLoading ? (
                            <p>{data.Plot}</p>
                        ) : (
                            <Skeleton width="250px" height="200px" />
                        )}
                    </Grid>
                    <Grid xs={12}>
                        {!isLoading ? (
                            <div css={extendedInfo}>
                                <div><h3>Actors: </h3><span>{data.Actors}</span></div>
                                <div><h3>Awards: </h3><span>{data.Awards}</span></div>
                                <div><h3>Box Office: </h3><span>{data.BoxOffice}</span></div>
                                <div><h3>Country: </h3><span>{data.Country}</span></div>
                                <div><h3>DVD release: </h3><span>{data.DVD}</span></div>
                                <div><h3>Director: </h3><span>{data.Director}</span></div>
                                <div><h3>Genre: </h3><span>{data.Genre}</span></div>
                                <div><h3>Language: </h3><span>{data.Language}</span></div>
                                <div><h3>Production: </h3><span>{data.Production}</span></div>
                                <div><h3>Rated: </h3><span>{data.Rated}</span></div>
                                <div><h3>Released: </h3><span>{data.Released ?? data.Year}</span></div>
                                <div><h3>Runtime: </h3><span>{data.Runtime}</span></div>
                                <div><h3>Writers: </h3><span>{data.Writer}</span></div>
                            </div>
                        ) : (
                            <Skeleton width="400px" height="300px" />
                        )}
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Detail