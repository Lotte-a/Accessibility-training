import React from 'react';
import {Link} from 'react-router-dom';

import { Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import IntroImage from '../images/intro.png';

const Home = () => (
        <Row className="home">
            <div className="home-introduction col-lg-6 col-sm-12 col-xs-12">
                <h1 class="home__title">Toegankelijker in een paar stappen</h1>

                <p class="home__text">100% gratis training over het digitaal toegankelijk maken van websites/apps. Speciaal ontwikkeld voor ondernemers binnen het MKB.</p>

                <Button className="home__button btn-orange">Start de training</Button>
            </div>

            <div className="home__image col-lg-6 col-sm-12 col-xs-12">
                <img src={IntroImage} class="home__image-size" />
            </div>
        </Row>
   
         /* <h1>Hello from Home</h1>
         <button><Link to="/introduction">Start training</Link></button> */
);

export default Home;