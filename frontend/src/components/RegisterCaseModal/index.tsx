import logoImg from '../../assets/logo.svg';
import closeImg from '../../assets/close.svg';
import Modal from 'react-modal';

import { Container, Form } from "../RegisterModal/styles";
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface RegisterModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function RegisterCaseModal({ isOpen, onRequestClose }: RegisterModalProps) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [value, setValue] = useState(0);

    function handleSubmitCase(e: FormEvent) {
        e.preventDefault();

        api.post('/cases', {
            title, desc, value, date: 999999, ong_id: 2
        })
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className='register-modal-content'
            overlayClassName='register-modal-overlay'
        >
            <Container>
                <img src={closeImg} alt="Fechar Modal" onClick={onRequestClose} />

                <img src={logoImg} alt="Be The hero" />
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
            </Container>
            <Form>
                <input type="text" placeholder="Título do caso" onChange={(e) => setTitle(e.target.value)} value={title} />
                <textarea placeholder="Descrição" onChange={(e) => setDesc(e.target.value)} value={desc} />
                <input type="number" placeholder="Valor em reais" onChange={(e) => setValue(Number(e.target.value))} value={value} />
                <div>
                    <button>Cancelar</button>
                    <button onClick={handleSubmitCase}>Cadastrar</button>
                </div>
            </Form>
        </Modal>
    );
}