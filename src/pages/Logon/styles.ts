import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 20rem;


    height: 100vh;
    width: 100vw;
    
    #logo {
        margin-bottom: 10rem;
    }

    & > img:last-child {
        width: 75rem;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    width: 350px;

    h1 {
        font-size: 3.6rem;
        margin-bottom: 3.2rem;
    }
    
    input {
        margin-bottom: 1.6rem;
    }

    p {
        display: flex;
        align-items: center;
        margin-top: 4rem;
        
        font-weight: 700;
        font-size: 1.8rem;
        color: var(--subtitle);

        width: fit-content;
        
        img {
            margin-right: 2rem;
        }

        &:hover {
            cursor: pointer;
        }
    }
`;
