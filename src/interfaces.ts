export interface CastMember {
        name: string,
        id: number,
        character: string,
        profile_path: string,
}

export type SearchType = {
    results: Object[],
    pages: number,
    currentPage: number,
    total: number,
}

export type SearchResultType = {
    movie: SearchType;
    tv: SearchType;
    person: SearchType;
}

export type SearchResultKey = keyof SearchResultType;

export type ApiContextType = {
    getMovieById(movieId: number) : Object;
    makeSearch(serch: string, category: string): Promise<SearchResultType>;
    searchByCategory(search: string, category: string, page? : number) : Promise<SearchType>
}