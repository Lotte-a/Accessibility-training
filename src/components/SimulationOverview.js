import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Row, Button } from 'react-bootstrap';

export default function QuizIntro() {
    return (
        <div>
            <div className="simulation-wrapper">
                <Helmet>
                    <title>Simulaties | Accessibility Training</title>
                </Helmet>
                <Row>
                    <div className="simulation__introduction col-lg-6 col-sm-12 col-xs-12">
                        <h1 className="u-text-title">Soorten visuele beperkingen</h1>
                        <ul className="vision-description">
                            <li><strong>Slechtziend</strong> - Gezichtsscherpte minder dan 30%</li>
                            <span>- Kan niet worden gecorrigeerd door het dragen van een bril of contactlenzen</span>
                            <li><strong>Zeer slechtziend</strong> - Gezichsscherpte minder dan 10%</li>
                            <li><strong>Maatschappelijk blind</strong> - Gezichsscherpte minder dan 5%</li>
                            <span>- Je kunt nog licht en donker onderscheiden en de omtrek van mensen en objecten zien</span>
                            <li><strong>Blind</strong> - Gezichsscherpte minder dan 2%</li>
                            <span>- Je kunt niets zien, ook geen licht</span>
                        </ul>
                        <div className="assignment">
                            <h2 className="u-text-title">Opdracht</h2>
                            <p className="u-text-assignment">Benieuwd naar hoe een persoon met visuele beperking een webshop waarneemt? Kies één van de verschillende soorten visuele beperkingen uit en ervaar het zelf!</p>
                        </div>
                    </div>
                    <div className="simulation__answers col-lg-6 col-sm-12 col-xs-12">
                        <h2 className="u-text-title">Opties visuele beperkingen</h2>
                        <div className="btn-option">
                            <Button href="https://accessibility-game.netlify.app/levels/6/intro/" target="blank" className="btn-choice">Slechtziend</Button><br />
                            <Button href="https://accessibility-game.netlify.app/levels/3/intro/" target="blank" className="btn-choice">Blind</Button>
                        </div>
                        <div className="btn-action btn-float-right">
                            <Link to="/quizOverview"><Button>Naar het volgende onderdeel</Button></Link>
                        </div>
                    </div>
                </Row>
            </div>
        </div>
    );
}