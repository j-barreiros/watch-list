import styled from 'styled-components';

const StyledNavbar = styled.header`
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #ccc;

    .app_logo {
        font-weight: 600;
        margin-right: 20px;
    }

    .navbar {
        display: flex;

        
        .navbar-item {
            margin-left: 10px;
            font-weight: 600;
            cursor: pointer;

            &:hover {
                color: #777;
            }
        }
    }
`

export default StyledNavbar;