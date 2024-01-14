import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { Card, CardContent, Typography, Divider, CardActions } from '@mui/material';
import { getActiveQuizzes } from '../../services/quiz-service';
import Base from '../../components/Base';
import Sidebar from '../../components/Sidebar';
import './Quizzes.css'
import { useNavigate } from 'react-router-dom';

const Quizzes = () => {

    const [quizzes, setQuizzes] = useState([]);

    const navigate = useNavigate();

    const fetchQuizzes = async () => {
      console.log('getActiveQuizzes is called!');
      try {
        const data = await getActiveQuizzes();
        setQuizzes(data);
        console.log("active quizzes->",data.length);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    useEffect(() => {  
      fetchQuizzes();
    }, []);

    const handleStartQuiz = (quizId, quizTitle) => {
        navigate(`/user/quiz/instructions/${quizId}/${quizTitle}`);
	  }

    return (
        <Base>
        <div className="row">
          <div className="col-md-2">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-10">
            <div className="text-center"> 
                <span className="heading"> Quizzes  </span>
            </div>
            <Grid container spacing={2} sx={{ marginTop: 2, width: '80%'}}>
                {Array.isArray(quizzes) && quizzes.map((quiz) => (
                    <Grid item key={quiz.quizId} xs={12} sm={6} md={4}  sx={4}>
                    <Card>
                        <CardContent>
                        <Typography variant="h5" component="div">
                            {quiz.title}
                        </Typography>
                        <Typography color="text.secondary">
                            {quiz.description}
                        </Typography>
                        </CardContent>
                        <Divider style={{ backgroundColor: '#a429b5', height: '2px' }} />
                        <CardActions>
                        <div className='submit-container'>
                            <div className='submit' onClick={() => handleStartQuiz(quiz.quizId, quiz.title)}>Start Quiz</div>
                        </div>
                        </CardActions>
                    </Card>
                    </Grid>
                ))}
            </Grid>
          </div>
        </div>
      </Base>
    )
}

export default Quizzes