// Hooks
import { useContext, useState } from "react";
// Context
import { ApiContext } from "../../../../context/ApiContextProvider";
// Style
import StyledSearchBar from "./StyledSearchBar"

type SearchBarProps = {
    setSearchResult: (newSearch: any) => void;
    setLastSearch: (lastSearch: string) => void;
}

export default function SearchBar(props: SearchBarProps) {

    const { makeSearch } = useContext(ApiContext);
    const [search, setSearch] = useState('');

    const { setSearchResult, setLastSearch } = props;

    async function handleSearch(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        setLastSearch(search);
        setSearchResult(await makeSearch(search));
        setSearch('');
    }

    return (
        <StyledSearchBar>
            <form className='search_form' onSubmit={event => handleSearch(event)}>
                <input
                    className='search_input'
                    type='text'
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder='Search a Movie, Tv Show or Person'
                />
                <button className='search_btn' type='submit'>Search</button>
            </form>
        </StyledSearchBar>
    )
}
