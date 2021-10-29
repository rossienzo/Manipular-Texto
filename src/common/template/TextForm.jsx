import React from 'react';

const TextForm = props => (
    <textarea className="textarea" id={props.id} name="story" disabled={props.disabled}
              rows={props.rows} autoFocus 
              placeholder="Digite seu texto aqui." value={props.text} onChange={props.change}>
    </textarea>
)

export default TextForm;