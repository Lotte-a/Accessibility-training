import React from 'react';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import IntroImage from '../images/intro.png';

const Home = () => (
    <Row className="home">
        <Helmet>
            <title>Accessibility Training</title>
        </Helmet>

        <div className="home-introduction hidden-hover col-lg-6 col-sm-12 col-xs-12">
            <h1 class="home__title">Toegankelijker in een paar stappen</h1>

            <p class="home__text">100% gratis training over het digitaal toegankelijk maken van websites/apps. Speciaal ontwikkeld voor ondernemers binnen het MKB.</p>

            <div class="btn-action">
                <Link to="/introduction"><Button>Start training</Button></Link>
            </div>
        </div>

        <div className="home__image col-lg-6 col-sm-12 col-xs-12">
            <img src={IntroImage} alt="" class="home__image-size" />
        </div>
    </Row>
);

export default Home;