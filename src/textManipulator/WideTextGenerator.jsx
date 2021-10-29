import React from "react";
import { Component } from "react";
import { Col, Row, Toast, ToastContainer, Button } from "react-bootstrap";
import Content from "../common/template/Content";
import TextForm from "../common/template/TextForm";
import TextCount from "../common/template/TextCount";
import Menu from "../common/template/Menu";
import { initialState } from "./state";
import { lineCount, wordCount, 
         textCopyToClipboard,
         textDownload, stringToFullWidth } from './scriptsTextManipulator';

class WideTextGenarate extends Component 
{
    constructor(props) {
        super(props);

        this.state = initialState;
        this.textCopyToClipboard = textCopyToClipboard;
        this.textDownload = textDownload;
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
        const wideText = stringToFullWidth(this.state.text);

        return (
            <Content title="Espaçar texto" 
                     subtitle="Digite o texto para converte-lo em largura máxima.">
                <Row>
                    <Col>
                        <TextForm text={this.state.text}  change={e => this.handleChange(e)} rows="15"/>
                    </Col>
                    <Col id="groupButtonWideText">
                        <TextForm id="textSpacing" disabled={true} text={wideText} rows="12"/>
                        <Menu>
                            <Button variant="dark" onClick={() => this.textDownload(wideText)}>Baixar texto</Button>
                            <Button variant="dark" onClick={() => this.textCopyToClipboard(wideText)}>Copiar texto</Button>
                        </Menu>
                    </Col>
                </Row>

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
                           charCount={this.state.count.charCount} />
            </Content>     
        )
    }
}

export default WideTextGenarate;