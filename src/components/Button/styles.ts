import styled from "styled-components";

export const ButtonStyled = styled.button`
    font-size: 1.8rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: var(--background);

    border: none;
    border-radius: 8px;
    padding: 2rem 0;
    
    background-color: var(--red);
    transition: filter 0.2s;

    &:hover {
        cursor: pointer;
        filter: brightness(0.9);
    }
`;
