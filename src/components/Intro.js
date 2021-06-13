import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button, Container } from 'react-bootstrap';
import Modal from 'react-modal';

import ReactPlayer from 'react-player/youtube'



export default function QuizIntro() {

    const [closeModal, setCloseModal] = useState(true);

    const handleCloseModal = () => {
        setCloseModal(false);
    }

    return (
        <div>
            <div class="page-margin">
                <Helmet>
                    <title>Introductie | Accessibility Training</title>
                </Helmet>

                <Modal
                    isOpen={closeModal}
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"
                    }}>
                    <h1 id="heading">Alert</h1>
                    <div id="full_description">
                        <p>Description goes here.</p>
                        <Button onClick={handleCloseModal}>Start de video</Button>
                    </div>
                </Modal>

                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                        width='100%'
                        height='100%'
                    />
                </div>

                <div class="hidden-hover">
                    <Link to="/quizOverview"><Button className="intro__button btn-orange">Volgende</Button></Link>
                </div>
            </div>
        </div>
    );
}