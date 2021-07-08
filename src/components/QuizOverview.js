import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

function Score(props){
    return <h1>Hello, {props.name}</h1>;
}

const QuizOverview = () => (

    <div class="wrapper">
        <Helmet>
            <title>Quiz overzicht | Accessibility Training</title>
        </Helmet>

        <Row>
            <div className="home-introduction hidden-hover col-lg-6 col-sm-12 col-xs-12">
                <h1 class="u-text-title">Accessibility quiz</h1>
                <p class="u-text-introduction">Welkom bij de Accessibility quiz. Deze quiz is opgesteld aan de hand van de <strong>7 quick wins</strong>, waardoor jij als <strong>kleine onderneming</strong> na de training in staat bent om <strong>snel </strong> en <strong>zonder al te veel kosten</strong> je website <strong>toegankelijker</strong> te maken!</p>
            </div>

            <div className="home__image col-lg-6 col-sm-12 col-xs-12">
                <h2 class="u-text-title margin-top__title">Onderwerpen</h2>
                <p>In de quiz zullen de volgende onderwerpen worden behandeld:</p>
                <ol>
                    <li>Kleurcontrast</li>
                    <li>Tekstalternatieven</li>
                    <li>Tekst</li>
                    <li>Links</li>
                    <li>Labels</li>
                    <li>Buttons</li>
                    <li>Document language</li>
                </ol>

                <div class="btn-action">
                    <Link to="/colorContrast"><Button className="btn-float-right">Start de quiz</Button></Link>
                </div>
            </div>
        </Row>
    </div>
);

export default QuizOverview;