import { ReviewSites } from "./types";

export const REVIEW_ICONS_MAP: Record<ReviewSites, string> = {
    [ReviewSites['Internet Movie Database']]: 'https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg',
    [ReviewSites['Rotten Tomatoes']]: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Rotten_Tomatoes.svg',
    [ReviewSites['Metacritic']]: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Metacritic.svg'
}