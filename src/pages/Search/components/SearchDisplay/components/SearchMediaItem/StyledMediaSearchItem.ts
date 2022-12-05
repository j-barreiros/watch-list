import styled from "styled-components";

const StyledMediaSearchItem = styled.article`
    width: auto;
    display: flex;
    margin: 0px 5px 10px 5px;
    border-radius: 5px;
    box-shadow: 0 1px 5px rgba(0 0 0 / 30%);
    background-color: #fff;
    overflow: hidden;

    .media_info {
        display : flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-right: 10px;
    }

    .clickable {
        &:hover{
            cursor: pointer;
        }
    }

    .media_poster {
        min-width: 100px;
        width: 100px;
        margin-right: 20px;
    }
    
    .media_title {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        font-size: 1.2em;
        line-height: 1.2em;
        margin-bottom: 0;
        color: #000;
    }

    .media_release {
        margin-top: 2px;
        font-size: 0.9em;
        color: #777;
    }


    .media_overview {
        margin-top: 5px;
        font-size: 0.9em;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    .actions {
        display: flex;
        .action_btn {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            padding: 2px 5px;
            margin-right: 10px;
            font-size: 0.9em;
            font-weight: 600;
            border: 2px solid #222;
            border-radius: 4px;
            color: #222;
            background: none;
            cursor: pointer;
        }

        .active {
            background-color: #1ED760;
        }
    }
`

export default StyledMediaSearchItem;