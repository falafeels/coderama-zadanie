import { css } from "@emotion/react";
import { fancyInlineShadow } from ".";
import { colors } from "../consts";

const circleIcon = css({cursor: 'pointer', background: colors.white, borderRadius: '50%', padding: '10px', color: colors.teal, transition: '0.2s ease-in', ...fancyInlineShadow})

export default circleIcon