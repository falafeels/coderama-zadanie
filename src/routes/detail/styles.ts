import { css } from "@emotion/react";
import { colors } from "../../consts";
import { fancyInlineShadow } from "../../styles";

export const detailContainer = css({padding: '100px 40px 100px 56px', width: '100%', maxWidth: '1920px', display: 'flex', justifyContent: 'center'})

export const gridContainer = css({background: colors.white, borderRadius: '15px', ...fancyInlineShadow})

export const moviePoster = css({
    width: '100%',
    height: '100%',
    borderRadius: '10px',
})

export const extendedInfo = css({display: 'grid', gridTemplateColumns: 'repeat( auto-fill, minmax(350px, 1fr) )', gap: '8px', '& > div': {display: 'flex', alignItems: 'center', gap: '8px'}})
