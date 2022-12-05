import styled from 'styled-components';

const StyledSearchDisplay = styled.section`
    grid-column: 2/6;
    .pagination {
        display: flex;
        width: 100%;
        justify-content: space-evenly;

        .page {
            background-color: gray;

            &:hover {
                cursor: pointer;
            }
        }
    }
`

export default StyledSearchDisplay;