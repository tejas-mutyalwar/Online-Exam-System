import React, { useState, useEffect } from 'react'
import Base from '../../components/Base'
import Sidebar from '../../components/Sidebar'
import { getResultsOfUser } from '../../services/result-service'
import { isLoggedIn, getUser } from '../../services/login-service'

// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createResult(quizTitle, score, totalMarks, attemptTime) {
  return { quizTitle, score, totalMarks, attemptTime };
}

const Dashboard = () => {

  const [results, setResults] = useState([]);
  const [fetched, setFetched] = useState(false)

  const fetchResults = async () => {
    try {
      if (isLoggedIn() && !fetched) {
        setFetched(true);
        const data = await getResultsOfUser(getUser().userName);

        setResults(data.map(result => createResult(result.quizTitle, result.score, result.totalMarks, new Date(result.attemptTime).toLocaleString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }))));
        console.log("results->",data.length);
      }
    } catch (error) {
      console.error('Error fetching results:', error);
    }
  };

  useEffect(() => {
    console.log("inside useEffect of Dashboard");
    fetchResults();
  }, []);

  return (
    <Base>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10" >
            <div className="text-center" style={{marginBottom: '30px'}}> 
                <span className="heading"> Dashboard  </span>
            </div>
          <TableContainer component={Paper}>
            <Table  sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundImage: 'linear-gradient(135deg, #a429b5, #ff6ec4)'}}>
                <TableRow>
                  <TableCell>Quiz</TableCell>
                  <TableCell align="right">Score</TableCell>
                  <TableCell align="right">Total Marks</TableCell>
                  <TableCell align="right">Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {results.map((row) => (
                  <TableRow
                    key={row.attemptTime}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.quizTitle}
                    </TableCell>
                    <TableCell align="right">{row.score}</TableCell>
                    <TableCell align="right">{row.totalMarks}</TableCell>
                    <TableCell align="right">{row.attemptTime}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </Base>
  )
}

export default Dashboard