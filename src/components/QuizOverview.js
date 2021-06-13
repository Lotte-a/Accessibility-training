import React from 'react';
import {Link} from 'react-router-dom';

function Score(props){
    return <h1>Hello, {props.name}</h1>;
}

const QuizOverview = () => (

    <div>
        <h1>Hier komt de quiz overview</h1>

        <button><Link to="/colorContrast">Kleurcontrast</Link></button>
        <button><Link to="/altTags">Alt tags</Link></button>

    </div>
);

export default QuizOverview;