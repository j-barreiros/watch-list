import styled from "styled-components";

const StyledSearchBar = styled.div`
    grid-column: 1/7;
    grid-row: 1;
    display: flex;
    justify-content: center;
    padding: 10px 0px;

    .search_form {
        .search_input {
            width: 500px;
            padding: 5px 10px;
            border-radius: 20px 0px 0px 20px;
            border: 1px solid #aaa;

            &:focus {
                outline: none;
            }
        }

        .search_btn {
            height: 100%;
            padding: 0px 5px;
            border-radius: 0px 20px 20px 0px;
            border: 1px solid #aaa;
        }
    }
`

export default StyledSearchBar;