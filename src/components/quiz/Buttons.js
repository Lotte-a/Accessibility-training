import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ImageScore from '../../images/score.png';
import QuizImage1 from '../../images/quiz-image-1.png';

import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Buttons() {

	const Questions = [
		{	
			explanation: '',
			questionText: 'Stelling: met behulp van de volgende code wordt een klikbare knop op een toegankelijke manier geplaatst. <div class"buy_item" onclick="MyApp.buyItem();">Buy this item</div>',
			answerOptions: [
				{ answerText: 'A ) De stelling is juist', isCorrect: false },
				{ answerText: 'B ) De stelling is onjuist', isCorrect: true },
			],
			src: '',
			alt: '',
			answerCorrect: 'De code is op deze manier niet toetsenbordtoegankelijk. Daarnaast kan er vanuit de mensen met een visuele beperking verwarring ontstaan over de rol en is het voor hen niet direct duidelijk dat het hier om een knop gaat.',
			answerIncorrect: 'De code is op deze manier niet toetsenbordtoegankelijk. Hierdoor is de rol van het <div> element niet duidelijk voor mensen met een visuele beperking en snappen zij niet direct dat het hierbij om een knop gaat.'
		},
		{	
			explanation: '',
			questionText: 'Stelling: met behulp van de volgende code wordt een klikbare knop op een toegankelijke manier geplaatst. <button class="buy_item" onclick="MyApp.buyItem();">Buy this item</button>',
			answerOptions: [
				{ answerText: 'A ) De stelling is juist', isCorrect: true },
				{ answerText: 'B ) De stelling is onjuist', isCorrect: false },
			],
			src: '',
			alt: '',
			answerCorrect: 'De code is op deze manier toetsenbordtoegankelijk. Daarnaast is de rol direct duidelijk voor mensen met een visuele beperking en is het voor hen direct duidelijk dat het hier om een knop gaat.',
			answerIncorrect: 'De code bevat een standaard <button> component dat toegankelijk is. Het is verstandig om zoveel mogelijk standaard elementen te gebruiken in je project.'
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
                <title>Quiz buttons | Accessibility Training</title>
            </Helmet>

			<Row>
				<div className="home-introduction hidden-hover col-lg-6 col-sm-12 col-xs-12">

					<h1 class="u-text-title">Buttons</h1>

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
						<h2 class="u-text-title">Afgeronde onderdelen (6/7)</h2>

						<ol>
							<li>Kleurcontrast <FontAwesomeIcon icon={faCheckCircle} /></li>
							<li>Tekst <FontAwesomeIcon icon={faCheckCircle} /></li>
							<li>Tekstalternatieven <FontAwesomeIcon icon={faCheckCircle} /></li>
							<li>Links <FontAwesomeIcon icon={faCheckCircle} /></li>
							<li>Labels <FontAwesomeIcon icon={faCheckCircle} /></li>
							<li>Buttons <FontAwesomeIcon icon={faCheckCircle} /></li>
							<li class="u-text-dissabled">Document language</li>
						</ol>
						<div class="btn-action">
							<Link to="/documentLanguage"><Button>Naar het volgende onderdeel</Button></Link>
						</div>
					</div>
				</Row>
			) : null}
		</div>
	);
}