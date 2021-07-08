import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ImageScore from '../../images/score.png';
import QuizImage3 from '../../images/quiz-image-3.jpg';
import QuizImage4 from '../../images/quiz-image-4.jpg';

import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Links() {

	const Questions = [
		{	
			explanation: 'Mensen met een visuele beperking maken veel gebruik van de steltoets ‘K’, waarmee ze een lijst met links van een website weergeven en laten voorlezen doormiddel van voorleessoftware.',
			questionText: 'Stelling: Op onderstaande afbeelding wordt er op een toegankelijke manier gebruik gemaakt van links',
			answerOptions: [
				{ answerText: 'A ) De stelling is juist', isCorrect: false },
				{ answerText: 'B ) De stelling is onjuist', isCorrect: true },
			],
			src: QuizImage3,
			alt: 'Nieuwsoverzicht met lees meer knoppen',
			answerCorrect: 'Voor een voorleessoftware gebruiker is het verwarrend als het niet duidelijk is waar links naar verwijzen. Zorg er voor dat een link altijd verteld waar je naar toe gaat of wat er gaat gebeuren en maak gebruik van unieke namen op een pagina. Een goed voorbeeld van een link is: ‘Lees meer over scholen’',
			answerIncorrect: 'Voor een voorleessoftware gebruiker is het verwarrend als het niet duidelijk is waar links naar verwijzen. Zorg er voor dat een link altijd verteld waar je naar toe gaat of wat er gaat gebeuren en maak gebruik van unieke namen op een pagina. Een goed voorbeeld van een link is: ‘Lees meer over scholen’'
		},
		{	
			explanation: '',
			questionText: 'Hoeveel links bevat onderstaande afbeelding?',
			answerOptions: [
				{ answerText: 'A ) Twee', isCorrect: false },
				{ answerText: 'B ) De afbeelding bevat geen links', isCorrect: false },
				{ answerText: 'B ) Vier', isCorrect: true },
				{ answerText: 'B ) Geen idee', isCorrect: false },
			],
			src: QuizImage4,
			alt: 'Tekst waarvan alle woorden dezelfde kleur bevatten',
			answerCorrect: 'Ondanks dat je het goed hebt geraden, is het belangrijk dat je het gebruik van alleen kleur vermijdt en altijd een tweede aanwijzing geeft. Mensen die kleurenblind zijn kunnen hierdoor soms niet het verschil zien tussen een tekst en een link. Geef links bijvoorbeeld aan door er een lijntje onder te plaatsen.',
			answerIncorrect: 'De afbeelding bevat vier links. Vermijd het gebruik van alleen kleur en geef altijd een tweede aanwijzing. Mensen die kleurenblind zijn kunnen hierdoor soms niet het verschil zien tussen een tekst en een link. Geef links bijvoorbeeld aan door er een lijntje onder te plaatsen.'
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
                <title>Quiz Links | Accessibility Training</title>
            </Helmet>

			<Row>
				<div className="home-introduction hidden-hover col-lg-6 col-sm-12 col-xs-12">

					<h1 class="u-text-title">Links</h1>

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
						<h2 class="u-text-title margin-top__title">Afgeronde onderdelen (4/7)</h2>

						<ol aria-hidden="true">
							<li>Kleurcontrast <FontAwesomeIcon icon={faCheckCircle} /></li>
							<li>Tekst <FontAwesomeIcon icon={faCheckCircle} /></li>
							<li>Tekstalternatieven <FontAwesomeIcon icon={faCheckCircle} /></li>
							<li>Links <FontAwesomeIcon icon={faCheckCircle} /></li>
							<li class="u-text-dissabled">Labels</li>
							<li class="u-text-dissabled">Buttons</li>
							<li class="u-text-dissabled">Document language</li>
						</ol>
						<div class="btn-action">
							<Link to="/labels"><Button>Naar het volgende onderdeel</Button></Link>
						</div>
					</div>
				</Row>
			) : null}
		</div>
	);
}