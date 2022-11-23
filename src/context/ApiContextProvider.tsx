import { ReactNode, createContext, useState } from "react";

import axios from "axios";
import API_KEY from '../../apikey.js';

export let ApiContext = createContext(null);

function ApiContextProvider({ children }) {
    //Stores the last search for API optmization 
    const [lastSearch, setLastSearch] = useState([]);
    
    //Make this secret
    const apiKey = API_KEY;


    function getMovieById(movieId: number): Object {
        return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
            .then(response => { return response.data });
    }

    async function makeSearch(search: string)  {
        console.log("make search")
        const result = await  axios.get(`https://api.themoviedb.org/3/search/multi?query=${search}&api_key=${apiKey}&language=en-US`)
            .then(({ data: { results } }) => {return results});
        
        const filteredResult = {
            movie: result.filter(r => r.media_type == 'movie'),
            tv: result.filter(r => r.media_type == 'tv'),
            person: result. filter(r => r.media_type == 'person')
        };
        
        return filteredResult;
    }

    const value = {
        getMovieById: getMovieById,
        makeSearch: makeSearch
    }

    return (
        <ApiContext.Provider value={value}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiContextProvider;