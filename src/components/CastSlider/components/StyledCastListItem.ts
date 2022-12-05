import styled from "styled-components";

const StyledCastListItem = styled.div`
    min-width: 150px;
    width: 150px;
    background-color: #eee;
    border-radius: 7px;
    overflow: hidden;

    .cast_photo {
        width: 100%;
        height: 175px;
        overflow: hidden;

        img {
            width: 100%;
            height: auto;
        }
    }

    .clickable {
        cursor: pointer;
    }

    .cast_info {
        padding: 3px 5px;
    }
`;

export default StyledCastListItem;