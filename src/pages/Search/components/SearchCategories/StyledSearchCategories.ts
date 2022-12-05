import styled from "styled-components";

const StyledSearchCategories = styled.section`
    grid-column: 1/2;
    height: fit-content;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;

    .search_results {
        font-size: 0.9em;
        text-align: center;
        padding: 20px 0px;
        color: white;
        background-color: blue;
    }

    .ctg_btn {
        background: none;
        border: none;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &:hover {
            background-color: lightgray;
            cursor: pointer;
        }

        .total_results {
            background-color: gray;
            padding: 2px 5px;
            border-radius: 5px;
        }
    }
`

export default StyledSearchCategories;