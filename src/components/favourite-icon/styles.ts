import { css } from "@emotion/react";

export const animation = css`
    @keyframes outlineShine {
        0% {
            outline-offset: -30px;
            outline: 0px solid;
        }
        20% {
            outline: 20px solid;
        }
        40% {
            outline: 5px solid;
            outline-offset: 0
        }
        100% {
            outline: 0
            outline-offset: 0;
        }
    }
`