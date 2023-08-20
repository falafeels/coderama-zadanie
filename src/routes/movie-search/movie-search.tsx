import { FormEvent, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { css } from '@emotion/react';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';
import PageSelector from './components/page-selector';
import MoviesGrid from '../../components/movies-grid';
import useMoviesList from './api';
import { baseWhiteBar } from '../../styles';
import { ANIMATION_MAP } from '../../types';
import { SLIDE_DOWN, SLIDE_UP, container, input, moviesContainer } from './styles';

const MovieSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchName, setSearchName] = useState(searchParams.get('search'))
    const [currentAnimation, setCurrentAnimation] = useState(searchParams.get('search') ? ANIMATION_MAP.up : ANIMATION_MAP.none)
    const {data: {movies, pages} = {}, isError, isFetching} = useMoviesList(searchParams.get('search')!, parseInt(searchParams.get('page') ?? '1'), !!searchParams.get('search'))

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSearchParams({search: searchName ?? '', page: '1'})
        setCurrentAnimation(searchName ? ANIMATION_MAP.up : ANIMATION_MAP.down)
    }
    
    if (isError) return <span>Sorry! There was an error finding the movies.</span>
    return (
        <div css={container}>
            <div
                css={css({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    flex: currentAnimation === ANIMATION_MAP.up ? 0 : 1,
                    animation: currentAnimation
                }, SLIDE_UP, SLIDE_DOWN)}
            >
                <form
                    css={css({maxWidth: '800px'}, baseWhiteBar)}
                    onSubmit={handleSubmit}
                >
                    <input
                        onChange={({target: {value}}) => setSearchName(value)}
                        type="text"
                        name="search"
                        placeholder="Search..."
                        css={input}
                    />
                    <SearchIcon color="secondary" fontSize="large" sx={{cursor: 'pointer'}} />
                </form>
            </div>
            { isFetching && <div css={{padding: '10px', background: 'white', borderRadius: '50%'}}><CircularProgress color="secondary" /></div> }
            {
                !isFetching && movies?.length && (
                    <div css={moviesContainer}>
                        <MoviesGrid movies={movies} />
                        <PageSelector pages={pages} activePage={parseInt(searchParams.get('page') ?? '1')} onPageClick={(page) => setSearchParams({search: searchName ?? '', page: `${page}`})} />
                    </div>
                )
            }
        </div>
    )
}

export default MovieSearch