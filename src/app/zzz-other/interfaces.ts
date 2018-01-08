export interface CaminoStatModel {
    day: number,
    daySummary: string,
    distance: number,
    accommodationName: string;
    accommodationType: string,
    accommodationComments: string,
    accommodationURL: string,
    youtubeURL: string,
    blog: string
}

export interface CaminoStatsModel extends Array<CaminoStatModel> { }

