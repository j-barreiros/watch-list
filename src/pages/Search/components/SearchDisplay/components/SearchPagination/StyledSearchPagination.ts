import styled from "styled-components";

const StyledSearchPagination = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 15px;

    .hide {
        visibility: hidden;
    }

    .page_btn {
        padding: 5px;
    }
`;

export default StyledSearchPagination;