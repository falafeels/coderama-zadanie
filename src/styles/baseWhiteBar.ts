import { css } from "@emotion/react";
import fancyInlineShadow from './fancyInlineShadow'
import { colors } from "../consts";

const baseWhiteBar = css({
    display: 'flex',
    alignItems: 'center',
    background: colors.white,
    height: '30px',
    borderRadius: '30px',
    padding: '10px 20px',
    width: '100%',
    ...fancyInlineShadow
})

export default baseWhiteBar