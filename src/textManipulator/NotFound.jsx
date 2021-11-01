import React from 'react';
import gif404 from '../assets/img/travolta-404.gif';
import Content from '../common/template/Content';

const NotFound = props => (
    <Content title="Erro 404" subtitle="Erro... Página não encontrada!">
        <img src={gif404} alt="error-404-travolta" />
    </Content>
)

export default NotFound;