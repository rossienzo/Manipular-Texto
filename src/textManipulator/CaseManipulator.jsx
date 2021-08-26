import { Button, Toast, ToastContainer } from "react-bootstrap";
import { Component } from "react";
import Content from "../common/template/Content";
import Menu from "../common/template/Menu";
import TextForm from './TextForm';
import TextCount from "../common/template/TextCount";

const initialState = {
    text: '',
    alertMsg: {
        visible: false,
        title: '',
        text: ''
    },
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

    // Altera no estado todo o texto digitado para minúsculo
    toLowerCase() { this.setState({ text: this.state.text.toLowerCase()}) }

    // Altera no estado todo o texto digitado para maíusculo
    toUpperCase() { this.setState({ text: this.state.text.toUpperCase()})}

    // Transforma as iniciais das palavras para maiúsculo, após um ponto, exclamação ou interrogação
    toSentenceCase()
    {
        const text = this.state.text;

        // Após ponto, exclamação ou interrogação ele irá colocar o caractere em maiúsulo.
        const textSentenced = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
        
        this.setState({ text: textSentenced });
    }

    // transforma todas as iniciais das palavras para maiúsculo
    toCapitalizeCase() 
    { 
        const text = this.state.text;

        /**
         * Quebra o texto através do regex (\n - quebra de linha)
         * faz um mapeamento das palavras no array e quebra o texto nos 'espaços'
         * transforma o primeiro caractere para maiúsculo e o resto para minúsculo
         * adiciona os 'espaços' entre os arrays, e por fim, adiciona as quebras de linhas.
         */
        const textTitleCased = text.split(/\r?\n/).map(word => (
            word.split(' ').map(w => (
                w.charAt(0).toUpperCase() + w.slice(1)
                )).join(' ')
        )).join('\n');

        this.setState({ text: textTitleCased });
    }

    // Copia o texto digitado
    textCopyToClipboard(e)
    {
        const text = this.state.text;
        
        navigator.clipboard.writeText(text).then(() => {
            this.setState({ alertMsg: {visible: true, title: 'Copiar', text:'Texto copiado para a prancheta!'}})
        });
    }

    // função para fazer download do texto
    textDownload() {
        const text = this.state.text;
        const filename = 'text';
        
        new Promise((resolve, reject) => {
            var file = new Blob([text], {type: "text/plain;charset=utf-8"});

            // IE10+
            if (window.navigator.msSaveOrOpenBlob) 
                window.navigator.msSaveOrOpenBlob(file, filename);
            else // Outros navegadores
            { 
                var a = document.createElement("a"),
                    url = URL.createObjectURL(file);
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                setTimeout(() => {
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(url);  
                }, 0); 
            }
        }).then(this.setState({ alertMsg: {visible: true, title: 'Baixar', text:'Baixando arquivo.'}}));
}
    
    

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
                        <Button variant="dark" onClick={() => this.toSentenceCase()}>Caixa de sentença</Button>
                        <Button variant="dark" onClick={() => this.toCapitalizeCase()}>Palavras Com Letra Maíuscula</Button>
                        <Button variant="dark" >Caixa de Título</Button>
                        <Button variant="dark" onClick={() => this.textDownload()}>Baixar texto</Button>
                        <Button variant="dark" onClick={e => this.textCopyToClipboard(e)}>Copiar texto</Button>
                        <Button variant="secondary" onClick={() => this.clear()}>Limpar</Button>
                    </Menu>

                    <TextForm id="textForm" text={this.state.text} change={e => this.handleChange(e)}/>

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