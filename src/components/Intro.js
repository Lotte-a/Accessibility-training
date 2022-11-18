import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';

import ReactPlayer from 'react-player/youtube'
export default function QuizIntro() {
    const [closeModal, setCloseModal] = useState(true);
    const [autoPlay, setAutoPlay] = useState(false);
    const handleCloseModal = () => {
        setCloseModal(false);
        setAutoPlay(true);
    }

    return (
        <div>
            <div class="intro intro-wrapper">
                <Helmet>
                    <title>Introductie | Accessibility Training</title>
                </Helmet>
                <Modal
                    isOpen={closeModal}
                    className="intro-modal"
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"
                    }}
                >
                    <h1 class="intro__title">Hierna volgt een introductie video waarin de volgende onderwerpen behandeld zullen worden:</h1>
                    <div id="full_description">
                        <ol>
                            <li>Persoonlijke ervaring visueel beperkte</li>
                            <li>Wat is digitale toegankelijkheid?</li>
                            <li>Verschillende soorten beperkingen</li>
                            <li>Demonstratie ontoegankelijke website</li>
                        </ol>
                    </div>
                    <div class="btn-action">
                        <Button onClick={handleCloseModal}>Start de video</Button>
                    </div>
                </Modal>
                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player'
                        url='https://youtu.be/cBsES4hgNsw'
                        width='100%'
                        height='100%'
                        playing={autoPlay}
                    />
                </div>
                <div class="btn-float-right btn-action">
                    <Link to="/simulationOverview"><Button>Volgende</Button></Link>
                </div>
            </div>
        </div>
    );
}