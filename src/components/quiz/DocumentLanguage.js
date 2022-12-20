import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DocumentLanguage() {

	const Questions = [
		{	
			explanation: '',
			questionText: 'De volgende code kan invloed hebben op de toegankelijkheid van een webpagina. <html lang="es"></html>',
			answerOptions: [
				{ answerText: 'A ) De stelling is juist', isCorrect: true },
				{ answerText: 'B ) De stelling is onjuist', isCorrect: false },
			],
			src: '',
			alt: '',
			answerCorrect: 'Personen die voorleessoftware gebruiken, selecteren een standaard taal. Als de taal van een webpagina niet is vastgesteld, dan behoudt de voorleessoftware de standaard ingestelde taal. Als de default taal dan bijvoorbeeld in het Engels is ingesteld, maar de taal van de pagina Spaans is, dan kan dit raar gedrag verzoorzaken.',
			answerIncorrect: 'De ingestelde taal van een webpagina heeft invloed op de voorleessoftware. Personen die voorleessoftware gebruiken, selecteren een standaard taal. Als de taal van een webpagina niet is vastgesteld, dan behoudt de voorleessoftware de standaard ingestelde taal. Als de default taal dan bijvoorbeeld in het Engels is ingsteld, maar de taal van de pagina Spaans is, dan kan dit raar gedrag verzoorzaken.'
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
	const [currentScore, setCurrentScore] = useState(0);
	const [showExplanation, setShowExplanation] = useState(true);

	// Show the explenation why an answer is correct or incorrect
	const explenationQuestion = (isCorrect) => {
		if (currentQuestion === 0) {
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

		if (currentQuestion === Questions.length - 1) {
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
		<div className="wrapper">
			<Helmet>
                <title>Quiz document language | Accessibility Training</title>
            </Helmet>

			<Row>
				<div className="wrapper__introduction hidden-hover col-lg-6 col-sm-12 col-xs-12">

					<h1 className="u-text-title">Document language</h1>

					{showExplanation? (
						<div>
							<p className="u-text-assignment">{Questions[currentQuestion].explanation}</p>
						</div>
					
					) : null}

					{/* Laat de vragen zien met de bijbehordende keuzes */}
					{showQuestions ? (
						<div>
							<div className="assignment">
								<span className="u-text-assignment-length">Oefening {currentQuestion + 1}/{Questions.length}</span>
								<div className='u-text-assignment'>{Questions[currentQuestion].questionText}</div>
								<img className="image-assignment image-quiz" src={Questions[currentQuestion].src} alt={Questions[currentQuestion].alt} />
							</div>
						</div>
					) : null}

					{showCorrect ? (
						<div className="assignment">
							<p className="u-text-correct"><FontAwesomeIcon icon={faCheckCircle} /> Het antwoord is juist!</p>
							<p className="u-text-description">{Questions[currentQuestion].answerCorrect}</p>
						</div>
					) : null}

					{/* Laat de uitleg zien waarom het antwoord FOUT is */}
					{showIncorrect ? (
						<div>
							<div className="assignment">
								<p className="u-text-incorrect"><FontAwesomeIcon icon={faTimesCircle} /> Het antwoord is onjuist..</p>
								<p className="u-text-description">{Questions[currentQuestion].answerIncorrect}</p>
							</div>
						</div>
					) : null}

					{showCorrectLastOne ? (
						<div>
							<div className="assignment">
								<p className="u-text-correct"><FontAwesomeIcon icon={faCheckCircle} /> Het antwoord is juist!</p>
								<p className="u-text-assignment">{Questions[currentQuestion].answerCorrect}</p>
							</div>
							<div className="btn-action-left">
								<Button disabled={disabled} onClick={previousQuestion}>Vorige</Button>
							</div>
							<div className="btn-action-end-right">
                                <Link to="/finishedQuiz"><Button onClick={score}>Onderdeel afronden</Button></Link>
							</div>
						</div>
					) : null}

					{showIncorrectLastOne ? (
						<div>
							<div className="assignment">
								<p className="u-text-incorrect"><FontAwesomeIcon icon={faTimesCircle} /> Het antwoord is onjuist..</p>
								<p className="u-text-assignment">{Questions[currentQuestion].answerIncorrect}</p>
							</div>
							<div className="btn-action-left">
								<Button disabled={disabled} onClick={previousQuestion}>Vorige</Button>
							</div>
							<div className="btn-action-end-right">
                                <Link to="/finishedQuiz"><Button onClick={score}>Onderdeel afronden</Button></Link>
							</div> 
						</div>
					) : null}
				</div>

				<div className="wrapper__image col-lg-6 col-sm-12 col-xs-12">
					{showOptions ? (
						<div>
							<h1 className="u-text-title">Antwoordopties</h1>
							<div className='answer-section'>
								{Questions[currentQuestion].answerOptions.map((answerOption) => (
									<div className="btn-option">
										<Button 
											className="btn-option" 
											onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}
										</Button>
									</div>
								))}
							</div>
						</div>
					) : null}
				
					{showIncorrect ? (
						<div className="btn-action">
							<Button disabled={disabled} onClick={previousQuestion}>Vorige</Button>
							<Button className="btn-float-right" onClick={nextQuestion}>Volgende</Button>
						</div>
					) : null}

					{showCorrect ? (
						<div className="btn-action">
							<Button onClick={previousQuestion} disabled={disabled}>Vorige</Button>
							<Button className="btn-float-right" onClick={nextQuestion}>Volgende</Button>
						</div>
					) : null}
				</div>
			</Row>
		</div>
	);
}