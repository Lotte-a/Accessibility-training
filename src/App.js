import React, { Component } from 'react';
import './styles/styles.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import QuizIntro from './components/Intro';
import SimulationOverview from './components/SimulationOverview';
import VisuallyImpaired from './components/visuallyImpaired';
import FinishedQuiz from './components/FinishedQuiz';

import QuizOverview from './components/QuizOverview';
import QuizColorContrast from './components/quiz/ColorContrast';
import QuizAltTags from './components/quiz/AltTags';


import { Container } from 'react-bootstrap';

import Logo from './images/logo.png';

class App extends Component {
  render() {
    return (

    <Container>
      <nav class="navbar">
        <a class="navbar__logo u-text-focus" href="/"><img src={Logo} alt="Logo Accessibility" class="navbar__logo-image" /></a>
        <a class="navbar__contact u-text-color-dark-blue" href="#">Contact</a> 
      </nav>

      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/introduction" exact component={QuizIntro} />
        <Route path="/simulationOverview" exact component={SimulationOverview} />

        <Route path="/visuallyImpaired" exact component={VisuallyImpaired} />

        <Route path="/quizOverview" exact component={QuizOverview} />
        <Route path="/colorContrast" exact component={QuizColorContrast} />
        <Route path="/altTags" exact component={QuizAltTags} />

        <Route path="/finishedQuiz" exact component={FinishedQuiz} />
      </Router>
    </Container>
    );
  }
}

export default App;