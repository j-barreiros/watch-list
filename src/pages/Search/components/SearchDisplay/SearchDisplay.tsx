// Style
import StyledSearchDisplay from './StyledSearchDisplay';

// Components
import SearchMediaItem from './components/SearchMediaItem/SearchMediaItem';
import SearchPersonItem from './components/SearchPersonItem/SearchPersonItem';
import SearchPagination from './components/SearchPagination/SearchPagination';

// Types
import { SearchResultKey, SearchResultType, SearchType } from '../../../../interfaces';

interface SearchDisplayProps {
  content: any;
  category: string;
  handlePagination(page: number): void;
}


function SearchDisplay(props: SearchDisplayProps) {
  const { content, category, handlePagination } = props;
  const contentKey = category as SearchResultKey;

  if (!content) return <div></div>

  if (category == 'person') return (
    content[contentKey].results.map((p: any) => <SearchPersonItem person={p} />)
  )

  // return for tv and movies
  return (
    <StyledSearchDisplay>
      {console.log(content)}
      {
        content[contentKey].results.sort((a, b) => b.popularity - a.popularity).map((media: any) =>
          <SearchMediaItem
            key={media.id}
            media={media}
            category={category}
          />)
      }
      <SearchPagination
        currentPage={content[contentKey].page}
        totalPages={content[contentKey].total_pages}
        handlePagination={handlePagination}
      />
    </StyledSearchDisplay>
  )
}

export default SearchDisplay