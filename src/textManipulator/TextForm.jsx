import React from 'react';


export default props => (
    <textarea className="textarea" id="story" name="story"
              rows="15" role="textbox" autoFocus 
              placeholder="Digite seu texto aqui.">
    {props.text}
    </textarea>
)