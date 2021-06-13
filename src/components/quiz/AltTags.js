import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Logo from '../../images/logo.png';

export default function QuizAltTags() {

	const Questions = [
		{
			questionText: 'Hier komt vraag 1',

			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],

			answer: 'C',
			src: Logo,
			alt: 'Logo',

			answerCorrect: 'Het antwoord is juist, omdat...',
			answerIncorrect: 'Het antwoord is onjuist, omdat...'
		},
		{
			questionText: 'Hier komt vraag 2',

			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: true },
			],

			answer: 'A',
			src: 'Logo',
			alt: 'Logo',

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
			answer: 'D',
			src: '',
			alt: '',

			answerCorrect: 'Het antwoord is juist, omdat...',
			answerIncorrect: 'Het antwoord is onjuist, omdat...',
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [optionChosen, setOptionChosen] = useState("");

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

		if (currentQuestion == Questions.length - 1) {
			setShowScore(true);
			setShowCorrect(false);
			setShowIncorrect(false);
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
		<div>
			<h1>Tekstalternatieven</h1>

			{/* Laat de vragen zien met de bijbehordende keuzes */}
			{showQuestions ? (
				<div>
					<span>Oefening {currentQuestion + 1}</span>/{Questions.length}
					<div className='question-text'>{Questions[currentQuestion].questionText}</div>
					<img src={Questions[currentQuestion].src} alt={Questions[currentQuestion].alt} />

					<h1>Antwoordopties</h1>
					<div className='answer-section'>
					  	{Questions[currentQuestion].answerOptions.map((answerOption) => (
              			<Button onClick={()=> handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</Button>
           			 ))}
					</div>
				</div>
			) : null}

			{/* Laat de uitleg zien waarom het antwoord GOED is */}
			{showCorrect ? (
				<div>
					<div>{Questions[currentQuestion].answerCorrect}</div>
					<Button onClick={previousQuestion} disabled={disabled}>Vorige</Button> 
					<Button onClick={nextQuestion}>Volgende</Button>
				</div>
			) : null}

			{/* Laat de uitleg zien waarom het antwoord FOUT is */}
			{showIncorrect ? (
				<div>
					<div>{Questions[currentQuestion].answerIncorrect}</div>
					<Button disabled={disabled} onClick={previousQuestion}>Vorige</Button> 
					<Button onClick={nextQuestion}>Volgende</Button>
				</div>
			) : null}

			{showScore ? (
				<div>
					Op dit onderdeel heb je {currentScore} van de {Questions.length} goed beantwoord
					<div>
					<Link to="/introduction"><Button>Finish training</Button></Link>
					</div>
				</div>
			) : null}
		</div>
	);
}
