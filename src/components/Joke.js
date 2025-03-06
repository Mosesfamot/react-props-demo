import React from 'react';

export default function Joke(props) {
    return (
        <section>
            <article>
                <h3>{props.setup}</h3>
                <p>{props.punchline}</p>
                <hr />
            </article>
        </section>
    )
}