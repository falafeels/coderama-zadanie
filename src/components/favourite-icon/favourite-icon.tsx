import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { css } from '@emotion/react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import useFavourite from "./use-favourite"
import { ANIMATION_MAP, MovieInfo } from '../../types';
import { circleIcon, circleIconHover } from '../../styles';
import { colors } from '../../consts';
import { animation } from './styles';

const FavouriteIcon = ({movieInfo, size = 1, altStyle = false}: {movieInfo: MovieInfo, size?: number, altStyle?: boolean}) => {
    const [isFavourited, toggleFavourite] = useFavourite(movieInfo)
    const [currentAnimation, setCurrentAnimation] = useState(ANIMATION_MAP.none)

    const handleFavourite = () => {
        setCurrentAnimation(ANIMATION_MAP.favouriteButtonFeedback)
        toggleFavourite()
    }

    const iconColors = altStyle
        ? {color: colors.white, background: colors.teal}
        : {color: colors.teal, background: colors.white}

    return (
        <Tooltip title={isFavourited ? 'Favourited!' : 'Favourite'} placement='top'>
            <div
                onClick={handleFavourite}
                onAnimationEnd={() => setCurrentAnimation(ANIMATION_MAP.none)}
                css={css(
                    animation,
                    circleIcon,
                    circleIconHover,
                    iconColors,
                    { animation: currentAnimation, transform: `scale(${size})` },

                )}
            >
                { isFavourited ? <StarIcon fontSize="large" /> : <StarBorderIcon fontSize="large" /> }
            </div>
        </Tooltip>
    )
}

export default FavouriteIcon