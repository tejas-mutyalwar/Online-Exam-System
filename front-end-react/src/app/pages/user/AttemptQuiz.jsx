import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Container,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  Divider,
  CircularProgress,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { evaluateQuiz, getQuiz } from "../../services/quiz-service";
import Base from "../../components/Base";
import Sidebar from "../../components/Sidebar";
import './AttemptQuiz.css'
import { getUser } from "../../services/login-service";

const AttemptQuiz = () => {

  const { quizId, quizTitle } = useParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [totalMarks, setTotalMarks] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [attemptedQuestions, setAttemptedQuestions] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [quizDuration, setQuizDuration] = useState(0);
  const [remainingTime, setRemainingTime] = useState();
  const [quizAttemptData, setQuizAttemptData] = useState(undefined);
  const [intervalId, setIntervalId] = useState(undefined);

  const navigate = useNavigate();

  useEffect(() => {
	const fetchQuiz = async () => {
	  try {
		const data = await getQuiz(quizId);
		setQuizQuestions(data.questions);
		console.log("quizQuestions->",data);
		setTotalMarks(data.maxMarks);
		setTotalQuestions(data.numberOfQuestions);
		setRemainingTime(data.numberOfQuestions*2*10);
		setQuizDuration(data.numberOfQuestions*2*10);
	  } catch (error) {
		console.error(`Error fetching quiz - ${quizTitle}`, error);
	  }
	};

	fetchQuiz();
  }, []);

  useEffect(() => {
	const updateQuizAttemptData = async () => {
		setQuizAttemptData({
			"quizTitle" : quizTitle,
			"numberOfQuestions" : totalQuestions,
			"totalMarks" : totalMarks,
			"userName" : getUser().userName,
			"quizAttemptQuestions" : quizQuestions
		});
	};

	updateQuizAttemptData();
  }, [quizAttemptData]);

  useEffect(() => {
	const intervalId = setInterval(() => {
	  setRemainingTime((prevTime) => prevTime - 1);
	}, 1000);
  
	return () => {
	  clearInterval(intervalId);
	  // Add a condition to check if remainingTime is <= 0 and submit the quiz
	  if (remainingTime === 0) {
		submitQuiz();
	  }
	};
  }, [remainingTime]);

//   useEffect(() => {
// 	const id = setInterval(() => {
// 		setRemainingTime((prevTime) => prevTime - 1);
// 	}, 1000);
// 	setIntervalId(id);
//   }, []); 

//   useEffect(() => {
// 	if (remainingTime == 0) {
// 		submitQuiz();
// 		clearInterval(intervalId);
// 	}
//   }, [remainingTime]);

  const handleRadioChange = (questionIndex, selectedOption) => {
    const updatedQuestions = [...quizQuestions];
    updatedQuestions[questionIndex].answerGiven = selectedOption;
    setQuizQuestions(updatedQuestions);

  };

  const submitQuiz = () => {
    // Add your logic to calculate score, correctAnswers, and attemptedQuestions
    console.log("submitted question->", quizQuestions);
	if (!isSubmitted) {
		setIsSubmitted(true);
		evaluateQuiz(quizAttemptData)
			.then((data)=>{
				console.log("score->", data);
				setScore(parseFloat(Number(data['score']).toFixed(2)));
				setCorrectAnswers(data['correctAnswers'])
				setAttemptedQuestions(data['attemptedQuestions'])
			}).catch((error) => {
				console.log("error in evaluate quiz ");
			})
	}
  };

  const printPage = () => {
    // Add your logic to print the page
	window.print()
  };

  const handleHome = () => {
    // Add your logic to print the page
	navigate(`/user/dashboard`);
  };

  const getFormattedTime = () => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div>
        {!isSubmitted && (
          <Grid container spacing={3} >
            {/* Instructions */}
            <Grid item xs={2}>
              <div className="text-center">
                <Typography variant="h5" gutterBottom fontWeight={"bold"}>
                  Instructions
                </Typography>
                <Card>
                  <CardContent>
                    <ul style={{ textAlign: "left" }}>
                      <li>
                        <strong>Do not open new tab</strong>
                      </li>
                      <br />
                      <li>
                        <strong>Do not reload the page</strong>
                      </li>
                      <br />
                      <li>
                        <strong>Do not right-click on the page</strong>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </Grid>

            {/* Questions */}
            <Grid item xs={8}>
				{quizQuestions && (
					<div className="text-center">
					<Typography variant="h5" gutterBottom fontWeight={"bold"}>
						Quiz - {quizTitle}
					</Typography>
					</div>
				)}

				{quizQuestions.map((quizQuestion, index) => (
					<Card key={index} className="mt10">
					<CardContent>
						<Typography variant="h6" gutterBottom fontWeight={"bold"}>
						Q{index + 1}) {quizQuestion.questionContent}
						</Typography>
						<br />

						<RadioGroup
						aria-label={`Question ${index + 1}`}
						name={`question${index + 1}`}
						value={quizQuestion.answerGiven} // Assuming you have a property to track the selected option
						onChange={(event) => handleRadioChange(index, event.target.value)}
						>
						{quizQuestion.options.map((option, i) => (
							<FormControlLabel
							key={i}
							value={option}
							control={<Radio />}
							label={option}
							/>
						))}
						</RadioGroup>
					</CardContent>
					</Card>
				))}
              <br />
              <hr />
              <br />
              	<div className="container text-center mt20 mb20" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<div className="submit-btn" onClick={submitQuiz}>
						Submit Quiz
					</div>
				</div>

            </Grid>

            {/* Progress */}
            <Grid item xs={2} className="text-center">
              <div>
                <Typography variant="h5" gutterBottom fontWeight={"bold"}>
                  Progress
                </Typography>

				<Card>
					<CardContent>
						<Typography variant="h6" gutterBottom>
							Time Remaining
						</Typography>
						<Divider style={{ backgroundColor: '#a429b5', height: '2px' }} />
						<Typography variant="h6" gutterBottom>
						{getFormattedTime()}
						</Typography>
						<br />
						<CircularProgress
						variant="determinate"
						value={(remainingTime / quizDuration) * 100}
						className="mt20"
						style={{ margin: 'auto', width: '100px', height: '100px' }}
						color="secondary"
						/>
					</CardContent>
				</Card>
              </div>
            </Grid>
          </Grid>
        )}

        {/* Show the result */}
        {isSubmitted && (

			<Base>
				<div class="row">
					<div class="col-md-2">
						<Sidebar></Sidebar>
					</div>
					<div class="col-md-10">

						<div className="text-center ">
							<div class="text-center"> 
								<span className='heading'> Quiz Result </span>
							</div>
						</div>

						<div className="row mt10">
							<div className="col-md-6 offset-md-3">
							<Card className="text-center mb20 mt20">
								<CardContent>
								<hr className="hr-divider" />
								<br />
								<Typography variant="h6" gutterBottom>
									Max Marks: {totalMarks}
								</Typography>
								<br />
								<Typography variant="h6" gutterBottom>
									Score: {score}
								</Typography>
								<br />
								<Typography variant="h6" gutterBottom>
									Correct Answers: {correctAnswers}
								</Typography>
								<br />
								<Typography variant="h6" gutterBottom>
									Questions Attempted: {attemptedQuestions}
								</Typography>
								<br />
								<hr className="hr-divider" />
								</CardContent>

								<CardActions>
								<div className='submit-container'>
									<div className='submit' onClick={printPage}>Print</div>
									<div className='submit' onClick={handleHome}>Home</div>	
								</div>
								</CardActions>
							</Card>
							</div>
						</div>

					</div>
				</div>
			</Base>

        )}
    </div>
  );
};

export default AttemptQuiz;
