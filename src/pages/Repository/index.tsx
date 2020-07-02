import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import { Header } from './styles';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>
            <RespositoryInfo></RespositoryInfo>
            <h1>Repository:{params.repository}</h1>
            <div>...</div>
        </>
    );
};

export default Repository;
