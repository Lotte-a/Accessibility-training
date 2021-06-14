import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ImageScore from '../images/score.png';

export default function FinishedQuiz() {
    return (
        <div>
            <Helmet>
                <title>Quiz afgerond | Accessibility Training</title>
            </Helmet>

            <div class="wrapper finished">
                <Row>
                    <div className="col-lg-6 col-sm-12 col-xs-12">
                        <div class="finished-description">
                            <img class="image-score" src={ImageScore} alt="" />
                            <h2 class="u-text-title">Gefeliciteerd!</h2>
                            <p class="u-text-subscription">Je hebt oog voor dit onderwerp</p>

                            <p class="u-text-description">"Je beschikt nu over de basiskennis waarmee je een website/app toegankelijker kunt maken!"</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-12 col-xs-12">
                        <div class="">
                            <h2 class="u-text-title">Samenvatting</h2>
                            <p class="u-text-assignment">Dowload de samenvatting, pas de kennis direct toe in de praktijk en draag jouw steentje bij aan een toegankelijkere maatschappij!</p>
                            
                            <div class="btn-action">
                               <Button>Download samenvatting</Button>
                            </div>
                        </div>

                        <div class="wrapper">
                            <h2 class="u-text-title">Deel jij ook jouw verbeteringen?</h2>
                            <p class="u-text-description">
                                Ben je trots op je toegankelijkheidsaanpassingen en wil jij anderen inspireren door je ervaring op deze pagina te delen?
                                <a href="mailto:larnoldussen@accessibility.nl"> Klik dan hier</a> en verstuur een e-mail!
                            </p>
                        </div>
                    </div>
                </Row>
            </div>
        </div>
    );
}