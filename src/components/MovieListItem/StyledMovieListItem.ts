import styled from 'styled-components';

const StyledMovieListItem = styled.div`
    width: auto;
    display: flex;
    margin: 0px 5px 10px 5px;
    border-radius: 5px;
    background-color: gray;
    overflow: hidden;

    .movie_title {

        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }

    .movie_poster {
        min-width: 100px;
        width: 200px;
        margin-right: 20px;
    }

    .movie_info {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .movie_overview {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        background-color: blue;
    }
`

export default StyledMovieListItem;