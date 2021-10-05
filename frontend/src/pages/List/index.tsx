import logoImg from '../../assets/logo.svg';
import powerImg from '../../assets/power.svg';
import deleteImg from '../../assets/delete.svg';

import Modal from 'react-modal';
import { useState } from 'react';
import { Header, Main, CasesContainer } from './styles';

import { RegisterCaseModal } from '../../components/RegisterCaseModal';
import { useCases } from '../../hooks/useCase';

Modal.setAppElement('#root');

export function List() {
    const [isRegisterCaseModalOpen, setIsRegisterCaseModalOpen] = useState(false);
    const { user, cases } = useCases();
    function handleModalOpen() {
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
                    <h3>Bem vinda, {user ? user.name : ''}</h3>
                </div>

                <div>
                    <button onClick={handleModalOpen}>Cadastrar novo caso</button>
                    <button><img src={powerImg} alt="Logout" /></button>
                </div>
            </Header>

            <Main>
                <h1>Casos cadastrados</h1>
                <CasesContainer>
                    {cases.map((Case) => (
                        <li key={Case.id}>
                            <img src={deleteImg} alt="Deletar" />
                            <h3>Caso:</h3>
                            <p>{Case.title}</p>

                            <h3>Descrição:</h3>
                            <p>{Case.desc}</p>

                            <h3>Valor:</h3>
                            <p>{new Intl.NumberFormat('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(Case.value)
                            }</p>
                        </li>
                    ))}

                </CasesContainer>
            </Main>
        </>
    );
}