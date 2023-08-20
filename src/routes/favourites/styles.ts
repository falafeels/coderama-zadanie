import { css } from "@emotion/react";
import { colors } from "../../consts";
import { fancyInlineShadow } from "../../styles";

export const container = css({padding: '100px 40px', display: 'flex', flex: '1', flexDirection: 'column', gap: '20px'})

export const whiteBox = css({margin: 0, padding: '20px 40px', background: colors.white, borderRadius: '15px', ...fancyInlineShadow})
// export const something = css()