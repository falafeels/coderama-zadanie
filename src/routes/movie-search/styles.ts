import { css } from "@emotion/react"

export const SLIDE_UP = css`
    @keyframes slideUp {
        0% {
        flex: 1
        }
        100% {
        flex: 0
        }
    }
`

export const SLIDE_DOWN = css`
    @keyframes slideDown {
        0% {
        flex: 0
        }
        100% {
        flex: 1
        }
    }
`

export const container = css({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '100px 40px',
    alignItems: 'center',
    gap: '40px'
})
export const input = css({
    outline: 'none',
    border: 'none',
    fontFamily: 'Jura, sans-serif',
    fontSize: '25px',
    flex: '1',
})
export const moviesContainer = css({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    gap: '40px',
})