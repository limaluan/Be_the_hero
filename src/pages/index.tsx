import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

import { Button } from "../components/Button";

import { Container } from "./styles";

const Home: NextPage = () => {
  const [id, setId] = useState("");

  return (
    <Container>
      <Head>
        <title>Be The Hero</title>
      </Head>
      <section>
        <img className="logo" src="./logo.svg" alt="Be The hero" />

        <h2 className="logonText">Faça seu Logon</h2>
        <input
          type="text"
          placeholder="Sua ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Button isPrimary>Cancelar</Button>

        <div className="register">
          <FaSignInAlt color="var(--red)" />
          <h3>Não tenho cadastro</h3>
        </div>
      </section>
      <img className="people" src="./people.svg" alt="Pessoas abraçadas" />
    </Container>
  );
};

export default Home;
