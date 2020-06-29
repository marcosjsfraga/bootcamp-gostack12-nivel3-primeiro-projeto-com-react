import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" type="text" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="#">
                    <img src="https://avatars3.githubusercontent.com/u/6868383?s=460&u=cba9f842779e163faa6735ae8281116a2aeeb3eb&v=4" alt="Marcos Fraga" />
                    <div>
                        <strong>Marcos Fraga</strong>
                        <p>Descrição do repo</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
