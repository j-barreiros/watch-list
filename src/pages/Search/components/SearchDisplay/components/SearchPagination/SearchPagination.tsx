
// Style
import StyledSearchPaginationn from './StyledSearchPagination'

type SearchPaginationProps = {
  totalPages: number;
  currentPage: number;
  handlePagination: (newPage: number) => void;
}

function SearchPagination(props: SearchPaginationProps) {

  const { totalPages, currentPage, handlePagination } = props;

  return (
    <StyledSearchPaginationn>
      <button
        className={`page_btn prev_btn ${currentPage == 1 && 'hide'}`}
        onClick={() => handlePagination(currentPage - 1)}
      >Previous</button>
      <p className='page_display'>{`${currentPage} of ${totalPages}`}</p>
      <button
        className={`page_btn next_btn ${currentPage == totalPages && 'hide'}`}
        onClick={() => handlePagination(currentPage + 1)}
      >Next</button>
    </StyledSearchPaginationn>
  )
}

export default SearchPagination