import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    /* Be the Hero image logo */
    img:nth-child(2) {
        width: 19rem;
        margin-top: 9.5rem;
        margin-bottom: 6.4rem;
    }

    h1 {
        font-size: 3.6rem;
        margin-bottom: 3.2rem;
    }

    p {
        font-size: 1.8rem;
        color: var(--subtitle);
    }
    
    /* Modal close button */
    & img:first-child {
        position: absolute;
        top: 40px;
        right: 40px;

        cursor: pointer;
    }
`;

export const Form = styled.form`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
        width: 100%;
        margin-bottom: .8rem;
    }

    div {
        display:flex;
        
        & input:first-child {
            flex: 8;
            margin-right: 0.8rem;
        }

        & input:last-child {
            flex: 1;
        }
        
        /* Cancel Button */
        & button:first-child {
            flex: 4;
            margin-right: 0.8rem;

            color: var(--subtitle);
            background-color: var(--background);
            border: 1px solid var(--gray-light);
        }
        
        /* Register Button */
        & button:last-child {
            flex: 6;
        }
    }

    button {
        width: 100%;
    }

    & textarea {
        height: 17.5rem;
        margin-bottom: 0.8rem;
    }
`;
