import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ImageScore from '../../images/score.png';
import QuizImage1 from '../../images/quiz-image-1.png';

import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function QuizAltTags() {

	const Questions = [
		{	
			explanation: 'De alt tag is een attribuut van een afbeelding. Het bestaat uit tekst die de content van de afbeelding beschrijft. De alt tag kan worden voorgelezen door voorleessofware, waardoor een persoon die blind is, in staat is om te begrijpen wat er op de afbeelding staat. Dit is een voorbeeld van een alt tag in code <img src="ondernemer.jpg" alt="ondernemer">',
			questionText: 'Stelling: bij een decoratieve afbeelding mag het alt atribuut worden weggelaten',
			answerOptions: [
				{ answerText: 'A ) De stelling is juist', isCorrect: false },
				{ answerText: 'B ) De stelling is onjuist', isCorrect: true },
			],
			src: '',
			alt: '',
			answerCorrect: 'Aan een afbeelding moet altijd een alt attribuut worden toegevoegd. Hierdoor wordt voorkomen dat de voorleessoftware de soms lange en moeilijk te begrijpen bestandsnaam van de afbeelding gaat voorlezen, die verwarring kan veroorzaken bij mensen met een visuele beperking.',
			answerIncorrect: 'Aan een afbeelding moet altijd een alt attribuut worden toegevoegd, ook wanneer deze geen informatie geeft. Door het alt atribuut leeg te laten, negeert de voorleessoftware de afbeelding. Hierdoor wordt voorkomen dat de voorleessoftware de soms lange en moeilijk te begrijpen bestandsnaam van de afbeelding gaat voorlezen, die verwarring kan veroorzaken bij mensen met een visuele beperking.'
		},
		{
			explanation: 'De alt tag is een attribuut van een afbeelding. Het bestaat uit tekst die de content van de afbeelding beschrijft. De alt tag kan worden voorgelezen door voorleessofware, waardoor een persoon die blind is, in staat is om te begrijpen wat er op de afbeelding staat. Dit is een voorbeeld van een alt tag in code <img src="ondernemer.jpg" alt="ondernemer">',
			questionText: 'Wat is een goed tekstalternatief voor onderstaande afbeelding? (nieuwsoverzicht)',
			answerOptions: [
				{ answerText: 'A ) alt="winkelwagen"', isCorrect: false },
				{ answerText: 'B ) alt=""', isCorrect: true },
				{ answerText: 'C ) alt="Commerciële websites nog onvoldoende toegankelijk voor beperkten"', isCorrect: false },
				{ answerText: 'D ) alt="winkelwagen_icon_20.jpg"', isCorrect: false },
			],
			src: QuizImage1,
			alt: 'Decoratieve afbeelding die geen informatie geeft',
			answerCorrect: 'De afbeelding is een decoratieve afbeelding en geeft geen informatie. Hierdoor mag het alt attribuut worden leeggelaten, waardoor de afbeelding door de voorleessoftware wordt genegeerd.',
			answerIncorrect: 'De afbeelding is een decoratieve afbeelding en geeft geen informatie. Om deze reden mag het alt atribuut leeg gelaten worden. Door het alt atribuut leeg te laten wordt de afbeelding door de voorleessoftware niet opgelezen. Hierdoor kunnen mensen met een visuele beperking de informatie raadplegen, zonder daarbij gestoord te hoeven worden.'
		},
		{
			explanation: 'Een goed kleurcontrast tussen tekst en achtergrondkleur is belangrijk. Onvoldoende contrast maakt de tekst moeilijker leesbaar voor slechtzienden.',
			questionText: 'De afbeelding van het logo van de Tweede Kamer Der Staten-Generaal staat links bovenaan de website. Het is ook een link naar de homepagina. Wat is het beste tekstalternatief?',
			answerOptions: [
				{ answerText: 'A ) alt="Logo"', isCorrect: false },
				{ answerText: 'B ) alt="Tweede Kamer Startpagina"', isCorrect: false },
				{ answerText: 'C ) alt=""', isCorrect: false },
				{ answerText: 'D ) alt="Logo Tweede Kamer Der Staten-Generaal - Startpagina"', isCorrect: true },
			],
			src: '',
			alt: '',
			answerCorrect: 'De afbeelding geeft informatie waardoor het alt attribuut niet mag worden leeggelaten. Daarnaast geeft het alt attribuut op deze manier duidelijk aan dat het logo doorlinkt naar de startpagina.',
			answerIncorrect: 'Het juiste antwoord is antwoord D. De afbeelding geeft informatie en mag hierdoor niet leeggelaten worden. Daarnaast bevat de afbeelding een link naar de homepagina. Het is prettig voor de mensen met een visuele beperking als dit ook duidelijk wordt aangegeven.',
		},
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
	// const [btnColor, setBtnColor] = useState('blue');

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
			// setBtnColor('green');
		} else {
			setShowIncorrect(true);
			setShowCorrect(false);
			setShowQuestions(false);
			setShowExplanation(false);
			setShowCorrectLastOne(false);
			setShowIncorrectLastOne(false);
			// setBtnColor('red');
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
                <title>Quiz tekstalternatieven | Accessibility Training</title>
            </Helmet>

			<Row>
				<div className="home-introduction hidden-hover col-lg-6 col-sm-12 col-xs-12">

					<h1 class="u-text-title">Tekstalternatieven</h1>

					{showExplanation? (
						<div>
							<p class="u-text-assignment">{Questions[currentQuestion].explanation}</p>
						</div>
					
					) : null}

					{/* Laat de vragen zien met de bijbehordende keuzes */}
					{showQuestions ? (
						<div>
							<div class="assignment">
								<span class="u-text-assignment-length">Oefening {currentQuestion + 1}/{Questions.length}</span>
								<div className='u-text-assignment'>{Questions[currentQuestion].questionText}</div>
								<img class="image-assignment image-quiz" src={Questions[currentQuestion].src} alt={Questions[currentQuestion].alt} />
							</div>
						</div>
					) : null}

					{showCorrect ? (
						<div class="assignment">
							<p class="u-text-correct"><FontAwesomeIcon icon={faCheckCircle} /> Het antwoord is juist!</p>
							<p class="u-text-description">{Questions[currentQuestion].answerCorrect}</p>
						</div>
					) : null}

					{/* Laat de uitleg zien waarom het antwoord FOUT is */}
					{showIncorrect ? (
						<div>
							<div class="assignment">
								<p class="u-text-incorrect"><FontAwesomeIcon icon={faTimesCircle} /> Het antwoord is onjuist..</p>
								<p class="u-text-description">{Questions[currentQuestion].answerIncorrect}</p>
							</div>
						</div>
					) : null}

					{showCorrectLastOne ? (
						<div>
							<div class="assignment">
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
							<div class="assignment">
								<p class="u-text-incorrect"><FontAwesomeIcon icon={faTimesCircle} /> Het antwoord is onjuist..</p>
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
							<h1 class="u-text-title">Antwoordopties</h1>
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
						<h2 class="u-text-title">Afgeronde onderdelen (3/7)</h2>

						<ol>
							<li>Kleurcontrast <FontAwesomeIcon icon={faCheckCircle} /></li>
							<li>Tekst <FontAwesomeIcon icon={faCheckCircle} /></li>
							<li>Tekstalternatieven <FontAwesomeIcon icon={faCheckCircle} /></li>
							<li class="u-text-dissabled">Links</li>
							<li class="u-text-dissabled">Labels</li>
							<li class="u-text-dissabled">Buttons</li>
							<li class="u-text-dissabled">Document language</li>
						</ol>
						<div class="btn-action">
							<Link to="/links"><Button>Naar het volgende onderdeel</Button></Link>
						</div>
					</div>
				</Row>
			) : null}
		</div>
	);
}