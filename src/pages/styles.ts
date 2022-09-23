import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15rem;
  height: 100vh;
  padding: 2rem;

  section {
    display: flex;
    flex-direction: column;
    width: 35rem;
    gap: 1.6rem;
  }

  .logo {
    width: 80%;
    padding-bottom: calc(10rem - 1.6rem);
  }

  .logonText {
    font-size: var(--d_big);
    padding-bottom: calc(3.2rem - 1.6rem);
  }

  .register {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 3rem;
    padding-top: calc(4rem - 1.6rem);
    font-size: var(--d_mid);
  }
  
  @media (max-width: 1000px) {
    .logo {
      padding-bottom: calc(5rem - 1.6rem);
    }
    
    .people {
      display: none;
    }

    .register {
      padding-top: calc(2rem - 1.6rem)
    }
  }
`;
