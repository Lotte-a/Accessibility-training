import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ImageScore from '../../images/score.png';
import QuizImage0 from '../../images/quiz-image-0.jpg';
import QuizImage1 from '../../images/quiz-image-1.jpg';

import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function QuizAltTags() {

	const Questions = [
		{	
			explanation: 'Bij de kleuren van een tekst in combinatie met de achtergrond moet er rekening worden gehouden met een contrast ratio. Een te laag contrast kan ervoor zorgen dat de leesbaarheid onvoldoende is voor gebruikers die kleurenblind of slechtziend zijn. De contrast ratio geeft een waarde aan tussen 2 kleuren. Wanneer er geen contrast is, is de waarde 1:1. Bij een maximaal contrast (zwart op wit) is dat 21:1.',
			questionText: 'Stelling: de tekst die hieronder is afgebeeld, bevat een hoog genoeg contrast',
			answerOptions: [
				{ answerText: 'A ) De stelling is juist', isCorrect: false },
				{ answerText: 'B ) De stelling is onjuist', isCorrect: true },
			],
			src: QuizImage0,
			alt: 'Witte tekst op een afbeelding waarbij de witte tekst gedeeltelijk wegvalt in de achtergrond',
			answerCorrect: 'Teksten die kleiner zijn dan 14 pt. hebben een minimaal contrast ratio nodig van 4,5:1. Teksten met grotere letters (18pt. of 14pt. als het vetgedrukt is) en grotere pictogrammen, hebben slechts een contrast ratio van 3:1 nodig. Om erachter te komen hoe hoog het contrast is tussen twee kleuren, kun je de kleuren invoeren in speciale tools die dit berekenen. Een voorbeeld van een tool is de Colour Contrast Analyser.',
			answerIncorrect: 'De tekst bevat geen hoog genoeg contrast in combinatie met de achtergrond. Teksten die kleiner zijn dan 14 pt. hebben een minimaal contrast ratio nodig van 4,5:1. Teksten met grotere letters (18pt. of 14pt. als het vetgedrukt is) en grotere pictogrammen, hebben slechts een contrast ratio van 3:1 nodig. Om erachter te komen hoe hoog het contrast is tussen twee kleuren, kun je de kleuren invoeren in speciale tools die dit berekenen. Een voorbeeld van een tool is de Colour Contrast Analyser.'
		},
		{	
			explanation: '',
			questionText: 'Stelling: de tekst die hieronder is afgebeeld, bevat een hoog genoeg contrast (de tekst is kleiner dan 14 pt)',
			answerOptions: [
				{ answerText: 'A ) De stelling is juist', isCorrect: false },
				{ answerText: 'B ) De stelling is onjuist', isCorrect: true },
			],
			src: QuizImage1,
			alt: 'Groene tekst op een witte achtergrond. De tekst bevat een contrast ratio van 3,0:1',
			answerCorrect: 'De tekst bevat een contrast ratio van 3,0:1 en is daarom niet hoog genoeg. Teksten die kleiner zijn dan 14 pt. hebben een minimaal contrast ratio nodig van 4,5:1.',
			answerIncorrect: 'De tekst bevat een contrast ratio van 3,0:1 in combinatie met de achtergrond. De tekst is kleiner dan 14 pt. en moet daarom minimaal een contrast ratio bevatten van 4,5:1. Controleer het contrast altijd voor de zekerheid met behulp van een tool zoals de Colour Contrast Analyser'
		}
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showQuestions, setShowQuestions] = useState(true);
	const [showOptions, setShowOptions] = useState(true);
	const [showCorrect, setShowCorrect] = useState(false);
	const [showIncorrect, setShowIncorrect] = useState(false);
	const [showCorrectLastOne, setShowCorrectLastOne] = useState(false);
	const [showIncorrectLastOne, setShowIncorrectLastOne] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [showScore, setShowScore] = useState(false);
	const [currentScore, setCurrentScore] = useState(0);
	const [showExplanation, setShowExplanation] = useState(true);

	// Show the explenation why an answer is correct or incorrect
	const explenationQuestion = (isCorrect) => {
		if (currentQuestion == 0) {
			setDisabled(true);
		} else {
			setDisabled(false);
		}

		if (isCorrect) {
			setCurrentScore(currentScore + 1);
			setShowCorrect(true);
			setShowIncorrectLastOne(false);
			setShowQuestions(false);
			setShowExplanation(false);
			setShowIncorrect(false);
			setShowCorrectLastOne(false);
		} else {
			setShowIncorrect(true);
			setShowCorrect(false);
			setShowQuestions(false);
			setShowExplanation(false);
			setShowCorrectLastOne(false);
			setShowIncorrectLastOne(false);
		}

		if (currentQuestion == Questions.length - 1) {
			if(isCorrect) {
				setShowCorrectLastOne(true);
				setShowIncorrectLastOne(false);
				setShowCorrect(false);
				setShowIncorrect(false);
				setShowQuestions(false);
				setShowExplanation(false);
				setShowOptions(false);
			} else {
				setShowIncorrectLastOne(true);
				setShowCorrectLastOne(false);
				setShowIncorrect(false);
				setShowCorrect(false);
				setShowExplanation(false);
				setShowQuestions(false);
				setShowOptions(false);
			}
		}
	}

	const score = () => {
		setShowScore(true);
		setShowCorrectLastOne(false);
		setShowIncorrectLastOne(false);
		setShowCorrect(false);
		setShowIncorrect(false);
		setShowQuestions(false);
		setShowExplanation(false);
		setShowOptions(false);
	}

	const nextQuestion = () => {
		setCurrentQuestion(currentQuestion + 1);
		setShowQuestions(true);
		setShowExplanation(true);
		setShowCorrect(false);
		setShowIncorrect(false);
		setShowScore(false);
		setShowCorrectLastOne(false);
		setShowIncorrectLastOne(false);
	}

	const previousQuestion = () => {
		setCurrentQuestion(currentQuestion - 1);
		setCurrentScore(currentScore - 1);
		setShowQuestions(true);
		setShowExplanation(true);
		setShowOptions(true);
		setShowCorrect(false);
		setShowIncorrect(false);
		setShowCorrectLastOne(false);
		setShowIncorrectLastOne(false);
	}

	const handleAnswerOptionClick = (isCorrect) => {
		explenationQuestion(isCorrect);
	};

	return (
		<div class="wrapper">
			<Helmet>
                <title>Quiz kleurcontrast &#38; tekst | Accessibility Training</title>
            </Helmet>

			<Row>
				<div className="home-introduction hidden-hover col-lg-6 col-sm-12 col-xs-12">

					<h1 class="u-text-title">Kleurcontrast &#38; tekst</h1>

					{showExplanation? (
						<div>
							<p class="u-text-assignment">{Questions[currentQuestion].explanation}</p>
						</div>
					
					) : null}

					{/* Laat de vragen zien met de bijbehordende keuzes */}
					{showQuestions ? (
						<div class="quiz__assignment">
							<div class="assignment">
								<h2 class="u-text-assignment-length">Oefening {currentQuestion + 1}/{Questions.length}</h2>
								<div className='u-text-assignment'>{Questions[currentQuestion].questionText}</div>
								<img class="image-assignment image-quiz" src={Questions[currentQuestion].src} alt={Questions[currentQuestion].alt} />
							</div>
						</div>
					) : null}

					{showCorrect ? (
						<div class="assignment quiz__assignment">
							<p class="u-text-correct"><FontAwesomeIcon icon={faCheckCircle} /> Het antwoord is juist!</p>
							<p class="u-text-description">{Questions[currentQuestion].answerCorrect}</p>
						</div>
					) : null}

					{/* Laat de uitleg zien waarom het antwoord FOUT is */}
					{showIncorrect ? (
						<div>
							<div class="assignment quiz__assignment">
								<p class="u-text-incorrect"><FontAwesomeIcon icon={faTimesCircle} /> Het antwoord is onjuist</p>
								<p class="u-text-description">{Questions[currentQuestion].answerIncorrect}</p>
							</div>
						</div>
					) : null}

					{showCorrectLastOne ? (
						<div>
							<div class="assignment quiz__assignment">
								<p class="u-text-correct"><FontAwesomeIcon icon={faCheckCircle} /> Het antwoord is juist!</p>
								<p class="u-text-assignment">{Questions[currentQuestion].answerCorrect}</p>
							</div>
							<div class="btn-action-left">
								<Button disabled={disabled} onClick={previousQuestion}>Vorige</Button>
							</div>
							<div class="btn-action-end-right">
								<Button onClick={score}>Onderdeel afronden</Button>
							</div>
						</div>
					) : null}

					{showIncorrectLastOne ? (
						<div>
							<div class="assignment quiz__assignment">
								<p class="u-text-incorrect"><FontAwesomeIcon icon={faTimesCircle} /> Het antwoord is onjuist</p>
								<p class="u-text-assignment">{Questions[currentQuestion].answerIncorrect}</p>
							</div>
							<div class="btn-action-left">
								<Button disabled={disabled} onClick={previousQuestion}>Vorige</Button>
							</div>
							<div class="btn-action-end-right">
								<Button onClick={score}>Onderdeel afronden</Button>
							</div> 
						</div>
					) : null}
				</div>

				<div className="home__image col-lg-6 col-sm-12 col-xs-12">
					{showOptions ? (
						<div>
							<h2 class="u-text-title margin-top__title">Antwoordopties</h2>
							<div className='answer-section'>
								{Questions[currentQuestion].answerOptions.map((answerOption) => (
									<div class="btn-option">
										<Button 
											// style={{background:btnColor}}
											className="btn-option" 
											onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}
										</Button>
									</div>
								))}
							</div>
						</div>
					) : null}
				
					{showIncorrect ? (
						<div class="btn-action">
							<Button disabled={disabled} onClick={previousQuestion}>Vorige</Button>
							<Button className="btn-float-right" onClick={nextQuestion}>Volgende</Button>
						</div>
					) : null}

					{showCorrect ? (
						<div class="btn-action">
							<Button onClick={previousQuestion} disabled={disabled}>Vorige</Button>
							<Button className="btn-float-right" onClick={nextQuestion}>Volgende</Button>
						</div>
					) : null}
				</div>
			</Row>

			{showScore ? (
				<Row>
					<div className="col-lg-6 col-sm-12 col-xs-12">
						<p class="u-text-score">Je hebt <strong>{currentScore}</strong> van de <strong>{Questions.length}</strong> vragen goed beantwoord!</p>

						<img class="image-score" src={ImageScore} alt="" />
					</div>

					<div className="col-lg-6 col-sm-12 col-xs-12">
						<h2 class="u-text-title margin-top__title">Afgeronde onderdelen (2/7)</h2>

						<ol aria-hidden="true">
							<li>Kleurcontrast <FontAwesomeIcon icon={faCheckCircle} /></li>
							<li>Tekst <FontAwesomeIcon icon={faCheckCircle} /></li>
							<li class="u-text-dissabled">Tekstalternatieven</li>
							<li class="u-text-dissabled">Links</li>
							<li class="u-text-dissabled">Labels</li>
							<li class="u-text-dissabled">Buttons</li>
							<li class="u-text-dissabled">Document language</li>
						</ol>
						<div class="btn-action">
							<Link to="/altTags"><Button>Naar het volgende onderdeel</Button></Link>
						</div>
					</div>
				</Row>
			) : null}
		</div>
	);
}