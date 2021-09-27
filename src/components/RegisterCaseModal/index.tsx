import logoImg from '../../assets/logo.svg';
import closeImg from '../../assets/close.svg';
import Modal from 'react-modal';

import { Container, Form } from "../RegisterModal/styles";

interface RegisterModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function RegisterCaseModal({isOpen, onRequestClose} : RegisterModalProps) {
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className='register-modal-content'
            overlayClassName='register-modal-overlay'
        >
            <Container>
                <img src={closeImg} alt="Fechar Modal" onClick={onRequestClose}/>

                <img src={logoImg} alt="Be The hero" />
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
            </Container>
            <Form>
                <input type="text" placeholder="Título do caso" />
                <textarea placeholder="Descrição" />
                <input type="text" placeholder="Valor em reais" />
                <div>
                    <button>Cancelar</button>
                    <button>Cadastrar</button>
                </div>
            </Form>
        </Modal>
    );
}