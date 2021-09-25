import logoImg from '../../assets/logo.svg';
import powerImg from '../../assets/power.svg';
import deleteImg from '../../assets/delete.svg';
import { Button } from '../../components/Button';
import { Header, Main, CasesContainer } from './styles';

export function List() {
    return (
        <>
            <Header>
                <div>
                    <img src={logoImg} alt="Be the hero" />
                    <h3>Bem vindo, USER</h3>
                </div>

                <div>
                    <Button>Cadastrar novo caso</Button>
                    <Button><img src={powerImg} alt="Logout" /></Button>
                </div>
            </Header>

            <Main>
                <h1>Casos cadastrados</h1>
                <CasesContainer>
                    <article>
                        <img src={deleteImg} alt="Deletar" />
                        <h3>Caso:</h3>
                        <p>Lorem ipsum dolor sit.</p>

                        <h3>Descrição:</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas reiciendis nostrum asperiores, voluptatibus nulla quos.</p>

                        <h3>Valor:</h3>
                        <p>R$ 127,00</p>
                    </article>
                    <article>
                        <img src={deleteImg} alt="Deletar" />
                        <h3>Caso:</h3>
                        <p>Lorem ipsum dolor sit.</p>

                        <h3>Descrição:</h3>
                        <p>A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.</p>

                        <h3>Valor:</h3>
                        <p>R$ 127,00</p>
                    </article>
                    <article>
                        <img src={deleteImg} alt="Deletar" />
                        <h3>Caso:</h3>
                        <p>Lorem ipsum dolor sit.</p>

                        <h3>Descrição:</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas reiciendis nostrum asperiores, voluptatibus nulla quos.</p>

                        <h3>Valor:</h3>
                        <p>R$ 127,00</p>
                    </article>
                </CasesContainer>
            </Main>
        </>
    );
}