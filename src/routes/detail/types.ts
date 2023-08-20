export enum ReviewSites {
    'Internet Movie Database' = 'Internet Movie Database',
    'Rotten Tomatoes' = 'Rotten Tomatoes',
    'Metacritic' = 'Metacritic'
}

export type MovieDetailData = {
    Title: string,
    Year: string,
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Poster: string,
    Ratings: [
        {
            Source: ReviewSites,
            Value: string
        }
    ],
    Metascore: string,
    imdbRating: string,
    imdbVotes: string,
    imdbID: string,
    Type: string,
    totalSeasons: string,
    Response: string,
    BoxOffice: string,
    DVD: string,
    Production: string,
}