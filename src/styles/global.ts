import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F0F5;
        --red: #E02041;
        --title: #13131A;
        --subtitle: #41414D;
        --text: #737380;
        --subtext: #A8A8B3;
        --gray-light: #DCDCE6;
        --d_big: 2.4rem; /* Big font size for Desktop */
        --d_mid: 1.8rem; /* Mid font size for Desktop */
    }

    * {
        margin: 0;
        padding: 0;
        font-family: "Roboto", "sans-serif";
        box-sizing: border-box;
    }
    
    html {
      font-size: 62.5%;
    }
    
    body {
        background-color: var(--background);
    }
    
    input {
      border: 0.15rem solid var(--gray-light);
      padding: 20px;
      font-size: var(--d_mid);
      border-radius: 0.8rem;
      outline: none;

      &::placeholder {
        color: var(--text);
      }
    }
    
    h2 {
        font-weight: 500;
    }
    
    h3 {
        font-weight: 700;
    }
    
    p {
        font-weight: 400;
    }
`;
