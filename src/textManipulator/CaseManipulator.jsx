import { Button, Toast, ToastContainer } from "react-bootstrap";
import { Component } from "react";
import Content from "../common/template/Content";
import Menu from "../common/template/Menu";
import TextForm from '../common/template/TextForm';
import TextCount from "../common/template/TextCount";
import { initialState } from "./state";
import { lineCount, wordCount, 
         toLowerCase, toSentenceCase, toUpperCase, textCopyToClipboard,
         textDownload, toCapitalizeCase, toTitleCase, clear } from './scriptsTextManipulator'

class CaseManipulator extends Component
{
    constructor(props) {
        super(props);
        
        this.state = initialState;
        this.toLowerCase = toLowerCase;
        this.toSentenceCase = toSentenceCase;
        this.toUpperCase = toUpperCase;
        this.textCopyToClipboard = textCopyToClipboard;
        this.textDownload = textDownload;
        this.toCapitalizeCase = toCapitalizeCase;
        this.toTitleCase = toTitleCase;
        this.clear = clear;
    }

    // A cada digito ele modifica o estado
    handleChange(e)
    {
        this.setState({...this.state, text: e.target.value, 
                        count: { charCount: e.target.value.length, 
                                 wordCount: wordCount(e),
                                 lineCount: lineCount(e) }});                                        
    }

    render()
    { 
        return (
            <div>
                <Content title="Manipular caixa de texto">
                    <p>Digite o texto e escolha o tipo de caixa para converte-lo.</p>
                    
                    <Menu id="groupButton">
                        <Button variant="dark" onClick={() => this.toLowerCase()}>texto em minúsculo</Button>
                        <Button variant="dark" onClick={() => this.toUpperCase()}>TEXTO EM MAIÚSCULO</Button>
                        <Button variant="dark" onClick={() => this.toSentenceCase()}>Caixa de sentença</Button>
                        <Button variant="dark" onClick={() => this.toCapitalizeCase()}>Palavras Com Letra Maíuscula</Button>
                        <Button variant="dark" onClick={() => this.toTitleCase()}>Caixa de Título</Button>
                        <Button variant="dark" onClick={() => this.textDownload()}>Baixar texto</Button>
                        <Button variant="dark" onClick={e => this.textCopyToClipboard(e)}>Copiar texto</Button>
                        <Button variant="secondary" onClick={() => this.clear()}>Limpar</Button>
                    </Menu>

                    <TextForm id="textForm" text={this.state.text} change={e => this.handleChange(e)} rows="15"/>

                    <ToastContainer position='middle-center'>
                        <Toast delay={2000} 
                               show={this.state.alertMsg.visible} 
                               onClose={() => this.setState({ alertMsg: {visible: false} })}
                               autohide>
                            <Toast.Header closeButton={false}>
                                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                <strong className="me-auto">Manipular Texto</strong>
                                <small>{this.state.alertMsg.title}</small>
                            </Toast.Header>
                            <Toast.Body>{this.state.alertMsg.text}</Toast.Body>
                        </Toast>
                     </ToastContainer>

                    <TextCount lineCount={this.state.count.lineCount}
                               wordCount={this.state.count.wordCount}
                               charCount={this.state.count.charCount}/>
                </Content >
            </div>
        )
    }
}

export default CaseManipulator;