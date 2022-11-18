import { Helmet } from 'react-helmet';
import { Row } from 'react-bootstrap';

export default function QuizIntro() {
    return (
        <div>
            <div class="simulation-wrapper">
                <Helmet>
                    <title>Slechtziend | Accessibility Training</title>
                </Helmet>
                <Row>
                    <div className="simulation__introduction col-lg-6 col-sm-12 col-xs-12">
                        <div class="assignment">
                            <h1 class="u-text-title">Opdracht</h1>
                            <p>Plaats binnen 60 seconden het product in je winkelmand</p>
                        </div>
                    </div>
                    <div className="simulation__answers col-lg-6 col-sm-12 col-xs-12">
                        <h2 class="u-text-title">Slechtziend met kokervisie</h2>
                        <p>Je krijgt last van slechtziendheid met een kokervisie, waardoor jouw gezichtsveld beperkt zal zijn</p>
                    </div>
                </Row>
            </div>
        </div>
    );
}