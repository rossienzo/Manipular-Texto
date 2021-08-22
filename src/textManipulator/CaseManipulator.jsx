import { Component } from "react";
import Content from "../common/template/Content";
import TextForm from './TextForm';

class CaseManipulator extends Component
{

    render()
    {
        return (
            <div>
                <Content title="Manipular caixa de texto">
                    <p>Digite o texto e escolha o tipo de caixa para converte-lo.</p>
                    <TextForm></TextForm>
                </Content>
            </div>
        )
    }
}

export default CaseManipulator;