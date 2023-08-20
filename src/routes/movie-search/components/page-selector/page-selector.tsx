import { useMemo } from 'react'
import { css } from "@emotion/react"
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import { colors } from "../../../../consts"
import { baseWhiteBar } from '../../../../styles'

const ACTIVE_STYLE = css({background: colors.teal, color: colors.white, borderRadius: '40%'})
const PAGE_NUMBER = css({padding: '10px 20px', fontWeight: 'bold', transition: '0.2s ease-in', cursor: 'pointer', '&:hover,&:focus': ACTIVE_STYLE})
const SKIP_ICON = css({display: 'flex', padding: '7px 12px', transition: '0.2s ease-in', cursor: 'pointer', '&:hover,&:focus': ACTIVE_STYLE})

// Always use odd numbers please, otherwise it just looks bad
const VISIBLE_PAGE_ICONS = 5

const PageSelector = ({pages, activePage, onPageClick}: {pages: number[] | undefined, activePage: number, onPageClick: (page: number) => void}) => {
    const {positionBehaviour, filteredPages} = useMemo(() => {
        if (!pages) return {positionBehaviour: 'starting', filteredPages: pages}

        if (activePage - (Math.ceil(VISIBLE_PAGE_ICONS / 2)) <= 0) {
            const filteredPages = pages.slice(0, VISIBLE_PAGE_ICONS)
            return {positionBehaviour: 'starting', filteredPages}
        }

        if (activePage + (Math.ceil(VISIBLE_PAGE_ICONS / 2)) >= pages.length + 1) {
            const filteredPages = pages.slice(pages.length - VISIBLE_PAGE_ICONS, pages.length)
            return {positionBehaviour: 'ending', filteredPages}
        }

        const startIndex = activePage - Math.ceil(VISIBLE_PAGE_ICONS / 2)
        const endIndex = startIndex + VISIBLE_PAGE_ICONS
        const filteredPages = pages.slice(startIndex, endIndex)
        return {positionBehaviour: 'middle', filteredPages}
    }, [pages, activePage])

    return (
        <div css={css(baseWhiteBar, {padding: '4px 0px', width: 'auto', marginBottom: '40px'})}>
            { positionBehaviour !== 'starting' && <div onClick={() => onPageClick(1)} css={SKIP_ICON}><FirstPageIcon /></div> }
            {
                filteredPages?.length && filteredPages.map((page) =>
                    <div key={page} onClick={() => onPageClick(page)} css={css(PAGE_NUMBER, page === activePage ? ACTIVE_STYLE : '')}>{`${page}`}</div>
                )
            }
            { positionBehaviour !== 'ending' && <div onClick={() => onPageClick(pages?.length ?? 1)} css={SKIP_ICON}><LastPageIcon /></div> }
        </div>
    )
}

export default PageSelector