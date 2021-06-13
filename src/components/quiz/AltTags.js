import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Logo from '../../images/logo.png';

export default function QuizAltTags() {

	const Questions = [
		{
			questionText: 'Hier komt vraag 1',

			answerOptions: [
				{ answerText: 'A) New York', isCorrect: false },
				{ answerText: 'B) London', isCorrect: false },
				{ answerText: 'C) Paris', isCorrect: true },
				{ answerText: 'D) Dublin', isCorrect: false },
			],

			src: Logo,
			alt: '',

			answerCorrect: 'Het antwoord is juist, omdat...',
			answerIncorrect: 'Het antwoord is onjuist, omdat...'
		},
		{
			questionText: 'Hier komt vraag 2',

			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: true },
			],

			src: '',
			alt: '',

			answerCorrect: 'Het antwoord is juist, omdat...',
			answerIncorrect: 'Het antwoord is onjuist, omdat...',
		},
		{
			questionText: 'Hier komt vraag 2',

			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
			src: '',
			alt: '',

			answerCorrect: 'Het antwoord is juist, omdat...',
			answerIncorrect: 'Het antwoord is onjuist, omdat...',
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	// const [optionChosen, setOptionChosen] = useState("");

	const [showScore, setShowScore] = useState(false);
	const [currentScore, setCurrentScore] = useState(0);

	const [showQuestions, setShowQuestions] = useState(true);
	const [showCorrect, setShowCorrect] = useState(false);
	const [showIncorrect, setShowIncorrect] = useState(false);

	const [hidden, setHidden] = useState(false);

	const [disabled, setDisabled] = useState(false);

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
			setShowQuestions(false);
		} else {
			setShowIncorrect(true);
			setShowQuestions(false);
		}

		//Als het de laatste vraag is
		if (currentQuestion == Questions.length - 1) {
			setShowScore(true);
			setShowCorrect(false);
			setShowIncorrect(false);
			setShowQuestions(false);
		}
	}

	const nextQuestion = () => {
		setCurrentQuestion(currentQuestion + 1);
		setShowQuestions(true);
		setShowCorrect(false);
		setShowIncorrect(false);
		setShowScore(false);
	}

	const previousQuestion = () => {
		setCurrentQuestion(currentQuestion - 1);
		setCurrentScore(currentScore - 1);
		setShowQuestions(true);
		setShowCorrect(false);
		setShowIncorrect(false);
	}

	const handleAnswerOptionClick = (isCorrect) => {
		explenationQuestion(isCorrect);
	};

	return (
		<div class="wrapper">

			<Row>
				<div className="home-introduction hidden-hover col-lg-6 col-sm-12 col-xs-12">

					<h1 class="u-text-title">Tekstalternatieven</h1>

					{/* Laat de vragen zien met de bijbehordende keuzes */}
					{showQuestions ? (
						<div>
							<div class="assignment">
								<span class="u-text-assignment-length">Oefening {currentQuestion + 1}/{Questions.length}</span>
								<div className='u-text-assignment'>{Questions[currentQuestion].questionText}</div>
								<img class="image-assignment" src={Questions[currentQuestion].src} alt={Questions[currentQuestion].alt} />
							</div>
						</div>
					) : null}

					{showCorrect ? (
						<div class="assignment">
							<p class="u-text-assignment">{Questions[currentQuestion].answerCorrect}</p>
							<Button onClick={previousQuestion} disabled={disabled}>Vorige</Button>
							<Button onClick={nextQuestion}>Volgende</Button>
						</div>
					) : null}

					{/* Laat de uitleg zien waarom het antwoord FOUT is */}
					{showIncorrect ? (
						<div>
							<div class="assignment">
								<p class="u-text-assignment">{Questions[currentQuestion].answerIncorrect}</p>
							</div>
						</div>
					) : null}
				</div>

				<div className="home__image col-lg-6 col-sm-12 col-xs-12">
					<h1 class="u-text-title">Antwoordopties</h1>
					<div className='answer-section'>
						{Questions[currentQuestion].answerOptions.map((answerOption) => (
							<Button className="btn-choice" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</Button>
						))}
					</div>

					{showIncorrect ? (
						<div>
							<Button disabled={disabled} onClick={previousQuestion}>Vorige</Button>
							<Button className="btn-float-right" onClick={nextQuestion}>Volgende</Button>
						</div>
					) : null}
				</div>
			</Row>

			{showScore ? (
				<Row>
					<div>
					Op dit onderdeel heb je {currentScore} van de {Questions.length} goed beantwoord
					<div>
						<Link to="/introduction"><Button>Finish training</Button></Link>
					</div>
					</div>

				</Row>
				
			) : null}
		</div>
	);
}
