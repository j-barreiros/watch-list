// Style
import StyledSearchCategories from './StyledSearchCategories'

type SearchCategoriesProps = {
    movieTotal: number | null,
    tvTotal: number | null,
    personTotal: number | null,
    setCategory(newCategory: string): void,
}

function SearchCategories(props: SearchCategoriesProps) {
    const { movieTotal, tvTotal, personTotal, setCategory } = props;

    return (
        <StyledSearchCategories>
            <div className='search_results'>
                <h2>Search Results</h2>
            </div>

            <button
                className='ctg_btn'
                onClick={() => setCategory('movie')}>
                Movie <span className='total_results'>{movieTotal}</span>
            </button>

            <button
                className='ctg_btn'
                onClick={() => setCategory('tv')}>
                Tv Show <span className='total_results'>{tvTotal}</span>
            </button>

            <button
                className='ctg_btn'
                onClick={() => setCategory('person')}>
                People <span className='total_results'>{personTotal}</span>
            </button>
            
        </StyledSearchCategories>
    )
}

export default SearchCategories