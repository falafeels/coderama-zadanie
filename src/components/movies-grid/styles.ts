import { css } from "@emotion/react";
import { colors } from "../../consts";

export const moviesGridContainerCss = css({
    display: 'grid',
    gridTemplateColumns: 'repeat( auto-fill, minmax(200px, 1fr) )',
    width: '100%',
    gap: '15px',
})

export const movieCard = css({
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateRows: '5fr 1fr',
    borderRadius: '15px',
    background: colors.white,
    position: 'relative',
    '&:hover,&:focus': {
        'div[data-name="favouriteIcon"]': {
            opacity: '1',
        },
    },
})

export const cardTopPart = css({
    display: 'grid',
    gridTemplateRows: '10fr 1fr',
    textDecoration: 'none',
    transition: '0.2s ease-in',
    '&:hover,&:focus': {
        opacity: '0.8',
    },
})

export const moviePoster = css({
    width: '100%',
    height: '100%',
    borderRadius: '10px 10px 0 0',
})

export const posterInfo = css({
    background: colors.teal,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '0 0 10px 10px',
    padding: '0 6px',
    color: colors.white,
    textShadow: `0px 0px 18px ${colors.darkGrey}`,
})

export const movieTitle = css({
    color: colors.darkGrey,
    textDecoration: 'none',
    transition: '0.2s',
    '&:hover,&:focus': {
        color: colors.teal,
    }
})

export const favouriteIconContainer = css({position: 'absolute', top: '0', left: '0', opacity: '0', transition: '0.2s ease-in'})