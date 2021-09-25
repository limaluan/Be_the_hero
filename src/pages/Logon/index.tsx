import logoImg from '../../assets/logo.svg';
import peoplesImg from '../../assets/peoples.svg';
import backImg from '../../assets/back.svg';

import Modal from 'react-modal';
import { ButtonStyled } from '../../components/Button/styles';

import { Form, Container } from './styles';
import React, { useState } from 'react';
import { RegisterModal } from '../../components/RegisterModal';

Modal.setAppElement('#root');

export function Logon() {
    const [registerModalOpen, setRegisterModalOpen] = useState(false);

    function handleOpenRegisterModal() {
        setRegisterModalOpen(true);
    }

    function handleCloseRegisterModal() {
        setRegisterModalOpen(false);
    }
    
    return (
        <Container>
            <RegisterModal 
                isOpen={registerModalOpen}
                onRequestClose={handleCloseRegisterModal}
            />
            <Form>
                <img id='logo' src={logoImg} alt="Be the hero" />
                <h1>Faça seu Logon</h1>

                <label className='sr-only'>Sua ID</label>
                <input type="text" placeholder='Sua ID' />
                <ButtonStyled>Entrar</ButtonStyled>

                <p onClick={handleOpenRegisterModal}>
                    <img src={backImg} alt="Voltar" />
                    Não tenho cadastro
                </p>
            </Form>
            <img src={peoplesImg} alt="Pessoas se abraçando" />
        </Container>
    );
}