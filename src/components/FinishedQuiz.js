import { Button, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ImageScore from '../images/score.png';

export default function FinishedQuiz() {
    return (
        <div>
            <Helmet>
                <title>Quiz afgerond | Accessibility Training</title>
            </Helmet>
            <div className="wrapper finished">
                <Row>
                    <div className="col-lg-6 col-sm-12 col-xs-12">
                        <div className="finished-description">
                            <img className="image-score" src={ImageScore} alt="" />
                            <h2 className="u-text-title">Gefeliciteerd!</h2>
                            <p className="u-text-subscription">Je hebt oog voor dit onderwerp</p>
                            <p className="u-text-description">"Je beschikt nu over de basiskennis waarmee je een website/app toegankelijker kunt maken!"</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-xs-12">
                        <div className="">
                            <p className="u-text-assignment">Dowload de samenvatting, pas de kennis direct toe in de praktijk en draag jouw steentje bij aan een toegankelijkere maatschappij!</p>
                            <div className="btn-action">
                            <h2 className="u-text-title">Samenvatting</h2>
                                <Button>Download samenvatting</Button>
                            </div>
                        </div>
                        <div className="wrapper">
                            <h2 className="u-text-title">Deel jij ook jouw verbeteringen?</h2>
                            <p className="u-text-description">
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