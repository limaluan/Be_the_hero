import logoImg from '../../assets/logo.svg';
import powerImg from '../../assets/power.svg';
import deleteImg from '../../assets/delete.svg';

import Modal from 'react-modal';
import { useState } from 'react';
import { Header, Main, CasesContainer } from './styles';

import { RegisterCaseModal } from '../../components/RegisterCaseModal';

Modal.setAppElement('#root');

export function List() {
    const [isRegisterCaseModalOpen, setIsRegisterCaseModalOpen] = useState(false);

    function handleModalOpen() {
        console.log('chamou')
        setIsRegisterCaseModalOpen(true);
    }

    function handleModalClose() {
        setIsRegisterCaseModalOpen(false);
    }

    return (
        <>
            <RegisterCaseModal
                isOpen={isRegisterCaseModalOpen}
                onRequestClose={handleModalClose}
            />
            <Header>
                <div>
                    <img src={logoImg} alt="Be the hero" />
                    <h3>Bem vindo, USER</h3>
                </div>

                <div>
                    <button onClick={handleModalOpen}>Cadastrar novo caso</button>
                    <button><img src={powerImg} alt="Logout" /></button>
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
                </CasesContainer>
            </Main>
        </>
    );
}