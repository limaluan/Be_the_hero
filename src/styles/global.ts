import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --background: #F0F0F5;
        --red: #E02041;
        --title: #13131A;
        --subtitle: #41414D;
        --text: #737380;
        --subtext: #A8A8B3;
        --gray-light: #DCDCE6;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }
    
    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    input, textarea {
        background-color: #FFFFFF;
        
        border: 1px solid var(--gray-light);
        border-radius: 8px;
        padding: 2rem 0 2rem 2.5rem;

        color: var(---subtext);
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.8rem;

        resize: none;
    }
    
    button {
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
    }
    
    .register-modal-overlay {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(255,255,255,0.4);
        
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }

    .register-modal-content {
        /* --- Animation --- */
        @keyframes onModalOpen {
            0% {margin-top: 60rem};
            100% {margin-top: 0rem}
        }

        animation: onModalOpen;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        /* ----------------- */
        
        position: relative;
        background-color: var(--background);
        padding: 9.6rem 9.6rem 10.4rem 9.6rem;

        width: 100%;
        height: 100%;

        max-height: 74rem;
        max-width: 1280px;

        display: flex;
        align-items: center;
        justify-content: center;

        box-shadow: 0px 0px 70px rgba(0,0,0,20%);
        border-radius: 8px;
    }
    
    .sr-only {
        display: none;
    }
`;
