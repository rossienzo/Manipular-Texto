import React from 'react';

const TextForm = props => (
    <textarea className="textarea" id="story" name="story"
              rows="15"  autoFocus 
              placeholder="Digite seu texto aqui." value={props.text} onChange={props.change}>
    </textarea>
)

export default TextForm;