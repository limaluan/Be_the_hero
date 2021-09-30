import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;

    padding: 3rem 16rem 7rem 16rem;
    
    & div {
        display: flex;
        align-items: center;
    }
    
    /* Logo */
    & div > img {
        height: 6.5rem;
        margin-right: 5rem;

        &:hover {
            cursor: pointer;
        }
    }
    
    h3 {
        font-size: 2rem;
        font-weight: 400;
        color: var(--title);
    }
    
    /* Botão de Novo Cadastro */
    & button {
        margin-right: 2.4rem;

        width: 26.2rem;
        height: 6rem;
    }

    /* Botão de Logout */
    & button:last-child {
        width: 6rem;
        height: 6rem;

        display: flex;
        align-items: center;
        justify-content: center;
        
        border: var(--gray-light) 1px solid;
        background-color: transparent;
    }
`;

export const Main = styled.main`
    padding: 0 16rem;
    margin-bottom: 10rem;

    h1 {
        color: var(--title);
        font-size: 3.6rem;

        margin-bottom: 3.2rem;
    }
`;

export const CasesContainer = styled.article`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
    
    article {
        border: 1px solid var(--gray-light);
        border-radius: 8px;

        width: 50rem;
        padding: 3.2rem;
        
        position: relative;
        background-color: #FFFFFF;
        
        transition: all 0.2s;
        
        /* Titles */
        & h3 {
            font-size: 1.4rem;
            font-weight: 700;
            color: var(--subtitle);

            margin-bottom: 1.6rem;
        }

        /* Desciptions */
        & p {
            font-size: 1.8rem;
            font-weight: 400;
            color: var(--text);

            margin-bottom: 3rem;

            &:last-child {
                margin-bottom: 0;
            }
        }

        /* Delete case Button */
        & img {
            position: absolute;
            right: 24px;
            top: 24px;

            &:hover {
                cursor: pointer;
            }
        }

        &:hover {
            transform: scale(1.1,1.1);
            box-shadow: 0 0 30px rgba(0,0,0,0.1);
        }
    }
`;
