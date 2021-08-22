import React from 'react';

/**
 * Content *
 * title and textarea
 */

export default props => (
    <section className="content">
        <h2>{props.title}</h2>
        {props.children}
    </section>
)