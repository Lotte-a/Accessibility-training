import React, { Component } from 'react';
import './styles/styles.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import QuizIntro from './components/Intro';
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
        <a class="navbar__logo" href="#"><img src={Logo} class="navbar__logo-image" /></a>
        <a class="navbar__contact u-text-color-dark-blue" href="#">Contact</a> 
      </nav>

         <Router>
           <Route path="/" exact component={Home} />
           <Route path="/introduction" exact component={QuizIntro} />
           <Route path="/quizOverview" exact component={QuizOverview} />
    
           <Route path="/colorContrast" exact component={QuizColorContrast} />
           <Route path="/altTags" exact component={QuizAltTags} />
         </Router>
      </Container>
    );
  }
}

export default App;