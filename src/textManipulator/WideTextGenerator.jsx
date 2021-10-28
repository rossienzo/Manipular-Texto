import React from "react";
import { Component } from "react";
import { Col, Row, Button } from "react-bootstrap";
import Content from "../common/template/Content";
import TextForm from "../common/template/TextForm";
import TextCount from "../common/template/TextCount";
import Menu from "../common/template/Menu";
import { initialState } from "./state";
import { lineCount, wordCount, 
         textCopyToClipboard,
         textDownload } from './scriptsTextManipulator'

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
        return (
            <Content title="Espaçar texto">
                <Row>
                    <Col>
                        <TextForm text={this.state.text}  change={e => this.handleChange(e)} rows="15"/>
                    </Col>
                    <Col id="groupButtonWideText">
                        <TextForm disabled={true} text={this.state.text} rows="12"/>
                        <Menu>
                            <Button variant="dark" onClick={() => this.textDownload()}>Baixar texto</Button>
                            <Button variant="dark" onClick={e => this.textCopyToClipboard(e)}>Copiar texto</Button>
                        </Menu>
                    </Col>
                </Row>
                <TextCount lineCount={this.state.count.lineCount}
                           wordCount={this.state.count.wordCount}
                           charCount={this.state.count.charCount}/>
            </Content>     
        )
    }
}

export default WideTextGenarate;