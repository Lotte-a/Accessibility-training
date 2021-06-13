import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Row } from 'react-bootstrap';

function Score(props){
    return <h1>Hello, {props.name}</h1>;
}

const QuizOverview = () => (

    <div class="wrapper">
        <Row>
            <div className="home-introduction hidden-hover col-lg-6 col-sm-12 col-xs-12">
                <h1 class="u-text-title">Accessibility quiz</h1>
                <p class="u-text-description">Welkom bij de Accessibility quiz. Deze quiz is opgesteld aan de hand van de 7 quick wins, waardoor jij als kleine onderneming na de training in staat bent om snel en zonder al te veel kosten je website toegankelijker te maken!</p>
            </div>

            <div className="home__image col-lg-6 col-sm-12 col-xs-12">
                <h1 class="u-text-title">Onderwerpen</h1>
                <p>In de training zullen de volgende onderwerpen worden behandeld:</p>
                <ol>
                    <li>Kleurcontrast</li>
                    <li>Tekstalternatieven</li>
                    <li>Tekst</li>
                    <li>Links</li>
                    <li>Labels</li>
                    <li>Forms</li>
                    <li>Document language</li>
                </ol>

                <Link to="/colorContrast"><Button className="btn-float-right">Start de quiz</Button></Link>
            </div>
        </Row>
    </div>
);

export default QuizOverview;