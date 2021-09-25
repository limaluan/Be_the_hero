import closeImg from '../../assets/close.svg';
import logoImg from '../../assets/logo.svg';
import Modal from 'react-modal';
import { Container, Form } from "./styles";
import { Button } from "../Button";

interface modalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function RegisterModal({ isOpen, onRequestClose }: modalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='register-modal-overlay'
            className='register-modal-content'
        >
            <Container>
                <img src={closeImg} onClick={onRequestClose} />
                <img src={logoImg} alt="Be the hero" />

                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
            </Container>

            <Form>
                <input type="text" placeholder='Nome da ONG' />
                <input type="text" placeholder='E-mail' />
                <input type="number" placeholder='WhatsApp' />
                <div>
                    <input type="text" placeholder='Cidade' />
                    <input type="text" placeholder='UF' maxLength={2} />
                </div>
                <Button>Cadastrar</Button>
            </Form>
        </Modal>
    );
}