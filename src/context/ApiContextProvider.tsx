import { ReactNode, createContext, useState } from "react";

import axios from "axios";
import API_KEY from '../../apikey.js';

// Types
import { SearchResultType, SearchType } from '../interfaces';

type ApiContextType = {
    getMovieById(movieId: number): any;
    searchMovie(search: string, page?: number): Promise<SearchMovieResponse>;
    searchTv(search: string, page?: number): Promise<SearchTvResponse>;
    searchPerson(search: string, page?: number): Promise<SearchPersonResponse>;
    makeSearch(search: string) : MakeSearchType;
    getNewPage(category: string, newPage: number): Promise<SearchPersonResponse | SearchMovieResponse | SearchTvResponse>;
}

type MakeSearchType = {
    movie: Promise<SearchMovieResponse>,
    tv: Promise<SearchTvResponse>,
    person: Promise<SearchPersonResponse>,
}

type SearchMovieResponse = {
        results: [
            {
                poster_path: string,
                id: number,
                release_date: number,
                title: string,
                popularity: number,
            }
        ],
        page: number,
        total_results: number,
        total_pages: number,
}

type SearchTvResponse = {
    results: [
        {
            poster_path: string,
            id: number,
            overview: string,
            title: string,
            popularity: number,
        }
    ],
    page: number,
    total_results: number,
    total_pages: number,
}

type SearchPersonResponse = {
    results: [
        {
            id: number,
            know_for : [
                title?: string,
                name?: string,
            ]
            know_for_department: string,
            name: string,
            popularity: number,
            profile_path: string,
        }
    ],
    page: number,
    total_pages: number,
    total_results: number,
}

//Context
export let ApiContext = createContext<ApiContextType>({
    getMovieById: (movieId: number) => {},
    searchMovie: (search: string, page?: number) => new Promise<SearchMovieResponse>(() => {}),
    searchTv: (searhc: string, page?: number) => new Promise<SearchTvResponse>(() => {}),
    searchPerson: (search: string, page?: number) => new Promise<SearchPersonResponse>(() => {}),
    makeSearch: (search: string) => {return {
        movie: new Promise<SearchMovieResponse>(() => {}),
        tv: new Promise<SearchTvResponse>(() => {}),
        person: new Promise<SearchPersonResponse>(() => {}),
    }},
    getNewPage: (category: string, newPage: number) => new Promise<SearchPersonResponse | SearchMovieResponse | SearchTvResponse>(() => {}),
});

function ApiContextProvider(props : ReactNode) {
    //Stores the last search for API optmization 
    const [lastSearch, setLastSearch] = useState('');

    //Make this secret
    const apiKey = API_KEY;


    const getMovieById = async (movieId: number) => {
        return await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`);
    }

    const makeSearch = async (search: string) => {
        setLastSearch(search)
        return {
            movie: await searchMovie(search),
            tv: await searchTv(search),
            person: await searchPerson(search),
        };
    }

    const searchMovie = async (search: string, page? : number) => {
        return (await axios.get<SearchMovieResponse>(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${apiKey}&page=${page ? page : 1}`)).data;
    }

    const searchTv = async (search: string, page? : number) => {
        return (await axios.get<SearchTvResponse>(`https://api.themoviedb.org/3/search/tv?query=${search}&api_key=${apiKey}&page=${page ? page : 1}`)).data
    }

    const searchPerson = async (search: string, page?: number) => {
        return (await axios.get<SearchPersonResponse>(`https://api.themoviedb.org/3/search/person?query=${search}&api_key=${apiKey}&page=${page ? page : 1}`)).data
    }

    const getNewPage = async (category: string, newPage: number) => {
        switch(category) {
            case 'person':
                return await searchPerson(lastSearch, newPage);
            case 'tv':
                return await searchTv(lastSearch, newPage);
            default:
                return await searchMovie(lastSearch, newPage);
        }
    }

    async function getTvShowSeasons(id: number): Promise<any> {
        const { data } = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`)
        const { seasons } = data;
        console.log(seasons)
        return seasons;
    }

    const value = {
        getMovieById: getMovieById,
        searchMovie: searchMovie,
        searchTv: searchTv,
        searchPerson: searchPerson,
        makeSearch: makeSearch,
        getNewPage: getNewPage,
    }

    return (
        <ApiContext.Provider value={value}>
            {props.children}
        </ApiContext.Provider>
    )
}

export default ApiContextProvider;