import React , {useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Base from '../../components/Base';
import Sidebar from '../../components/Sidebar';
import { Card, CardHeader, CardContent, Typography, Button, Divider, List, ListItem } from '@mui/material';
import { getQuiz } from '../../services/quiz-service';
import './Instructions.css'

const Instructions = () => {

    const { quizId, quizTitle } = useParams();
    const [quiz, setQuiz] = useState([]);
    const [quizTime, setQuizTime] = useState({
        "hr" : 0,
        "min" : 0
    });
    const navigate = useNavigate();

    const handleStartQuiz = (quizId, quizTitle) => {
        // Add your logic for starting the quiz
        navigate(`/user/quiz/attempt-quiz/${quizId}/${quizTitle}`);

    };

    useEffect(() => {
        const fetchQuiz = async () => {
          try {
            const data = await getQuiz(quizId);
            setQuiz(data);
            console.log("quiz->",data.title);
            // setQuizTime({
            //     "hr": Math.floor((data.numberOfQuestions * 2) / 60),
            //     "min": Math.floor((data.numberOfQuestions * 2) % 60)
            // });
          } catch (error) {
            console.error(`Error fetching quiz - ${quizTitle}`, error);
          }
        };
    
        fetchQuiz();
      }, []);

      useEffect(()=>{
            setQuizTime({
                "hr": Math.floor((quiz.numberOfQuestions * 2) / 60),
                "min": Math.floor((quiz.numberOfQuestions * 2) % 60)
            });
      }, [quiz])

    return (
        <Base>
            <div class="row">
                <div class="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div class="col-md-10">
                    <div class="text-center"> 
                        <span className='heading'> Instructions for taking the Quiz - {quizTitle} </span>
                    </div>

                    <div className="bootstrap-wrapper">
                        <div className="container">
                            <div className="row">
                                <div >
                                    <Card className="mt10 mb10 font-family font-color">
                                        <CardHeader title="Read the instructions carefully before starting the quiz" />
                                        <CardContent className="mt20 mb20">
                                            <Typography variant="h5" component="div">
                                                Quiz: {quizTitle}
                                            </Typography>
                                            <Typography variant="body1" component="div">
                                                {quiz.description}
                                            </Typography>
                                            <Divider style={{ backgroundColor: '#a429b5', height: '2px' }} />
                                            <Typography variant="h5" component="div">
                                                Important Instructions
                                            </Typography>
                                            <List>
                                                <ListItem>This quiz is for practice only.</ListItem>
                                                <ListItem>This quiz will submit automatically once the timer has run out.</ListItem>
                                                <ListItem>You can attempt the quiz any number of times.</ListItem>
                                                <ListItem>There are&nbsp;<b>{quiz.numberOfQuestions} questions</b>&nbsp;in this quiz.</ListItem>
                                                {quizTime.hr !== 0 ? (
                                                    <ListItem>Time for the quiz is&nbsp;<b>{quizTime.hr}&nbsp;hours</b> and&nbsp;<b>{quizTime.min}&nbsp;minutes.</b></ListItem>
                                                ) : (
                                                    <ListItem>Time for the quiz is&nbsp;<b>{quizTime.min}&nbsp;minutes.</b></ListItem>
                                                )}
                                                <ListItem>Total marks for the quiz:&nbsp;<b>{quiz.maxMarks}&nbsp;marks.</b></ListItem>
                                                <ListItem>All questions are multiple-choice questions.</ListItem>
                                            </List>
                                            <Divider style={{ backgroundColor: '#a429b5', height: '2px' }} />
                                        </CardContent>
                                        <div className='submit-container'>
						                    <div className='submit' onClick={() => handleStartQuiz(quiz.quizId, quiz.title)}>Start Quiz</div>
					                    </div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default Instructions
