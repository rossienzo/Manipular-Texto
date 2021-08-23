import { Button } from "react-bootstrap";
import { Component } from "react";
import Content from "../common/template/Content";
import Menu from "../common/template/Menu";
import TextForm from './TextForm';
import TextCount from "../common/template/TextCount";

const initialState = {
    text: '',
    count: {
        lineCount: 0,
        wordCount: 0,
        charCount: 0
    }
}

class CaseManipulator extends Component
{
    constructor(props) {
        super(props);
        this.state = initialState
    }

    // A cada digito ele modifica o estado
    handleChange(e)
    {
        this.setState({...this.state, text: e.target.value, 
                        count: {charCount: e.target.value.length}});
    }

    // Altera no estado todo o texto digitado para maíusculo
    toUpperCase() { this.setState({ text: this.state.text.toUpperCase()}) }

    // Altera no estado todo o texto digitado para minúsculo
    toLowerCase() { this.setState({ text: this.state.text.toLowerCase()}) }

    // Reseta o estado
    clear() { this.setState(initialState) }

    render()
    {
        return (
            <div>
                <Content title="Manipular caixa de texto">
                    <p>Digite o texto e escolha o tipo de caixa para converte-lo.</p>
                    <Menu>
                        <Button variant="dark" onClick={() => this.toLowerCase()}>texto em minúsculo</Button>
                        <Button variant="dark" onClick={() => this.toUpperCase()}>TEXTO EM MAIÚSCULO</Button>
                        <Button variant="dark" >Caixa de sentença</Button>
                        <Button variant="dark">Palavras Com Letra Maíuscula</Button>
                        <Button variant="dark">Caixa de Título</Button>
                        <Button variant="dark">Baixar texto</Button>
                        <Button variant="dark">Copiar texto</Button>
                        <Button variant="secondary" onClick={() => this.clear()}>Limpar</Button>
                    </Menu>
                    <TextForm text={this.state.text} change={e => this.handleChange(e)}/>
                    <TextCount lineCount={this.state.count.lineCount}
                               wordCount={this.state.count.wordCount}
                               charCount={this.state.count.charCount}/>
                </Content >
            </div>
        )
    }
}

export default CaseManipulator;