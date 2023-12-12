export interface ITVShowResponse {
    name: string;
    summary: string;
    image: {
        medium: string;
        original: string;
    };
    _embedded: {
        episodes: ITVShowEpisode[];
    }
};

export interface ITVShowEpisode extends ITVShowResponse {
    id: string;
};