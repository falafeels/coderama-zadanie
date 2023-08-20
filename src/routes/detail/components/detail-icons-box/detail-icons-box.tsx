import Tooltip from '@mui/material/Tooltip';
import { REVIEW_ICONS_MAP } from "../../consts"
import { iconsContainer, ratingsIcons } from './styles';
import { MovieDetailData } from '../../types';

const DetailIconsBox = ({ratings}: {ratings: MovieDetailData['Ratings']}) => (
    <div css={iconsContainer}>
        <div>
            {
                ratings.map(({Source, Value}) => (
                    <div key={Source} css={ratingsIcons}>
                        <Tooltip title={Source} placement='right'>
                            <img width='40px' height='40px' alt={Source} src={REVIEW_ICONS_MAP[Source]} />
                        </Tooltip>
                        <span>{Value}</span>
                    </div>
                ))
            }
        </div>
    </div>
)

export default DetailIconsBox