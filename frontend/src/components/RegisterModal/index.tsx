import closeImg from '../../assets/close.svg';
import logoImg from '../../assets/logo.svg';
import Modal from 'react-modal';
import { Container, Form } from "./styles";
import { api } from '../../services/api';
import { FormEvent, useState } from 'react';

interface modalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function RegisterModal({ isOpen, onRequestClose }: modalProps) {
    const [ongName, setOngName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleRegisterOng(e: FormEvent) {
        e.preventDefault();
        
        // api({
        //     method: 'POST',
        //     url: '/ongs',
        //     data: {
        //         ongName, email, phoneNumber, city, uf
        //     }
        // })

        // setOngName('');
        // setEmail('');
        // setPhoneNumber(0);
        // setCity('');
        // setUf('');
        
        console.log(await api.get('/ongs'));
    }

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

            <Form onSubmit={handleRegisterOng}>
                <input type="text" placeholder='Nome da ONG' name='name' value={ongName} onChange={(e) => setOngName(e.target.value)} />
                <input type="text" placeholder='E-mail' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="number" placeholder='WhatsApp' name='phone' value={phoneNumber} onChange={(e) => setPhoneNumber(Number(e.target.value))} />
                <div>
                    <input type="text" placeholder='Cidade' name='city' value={city} onChange={(e) => setCity(e.target.value)} />
                    <input type="text" placeholder='UF' maxLength={2} name='uf' value={uf} onChange={(e) => setUf(e.target.value)} />
                </div>
                <button>Cadastrar</button>
            </Form>
        </Modal>
    );
}