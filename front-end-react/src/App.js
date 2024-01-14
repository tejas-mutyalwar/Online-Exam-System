import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'bootstrap';
// import Base from './app/components/Base';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './app/pages/Home';
import Login from './app/pages/Login';
import Signup from './app/pages/Signup';
import About from './app/pages/About';
import Dashboard from './app/pages/user/Dashboard';
import PrivateRoute from './app/components/PrivateRoute';
import Profile from './app/pages/user/Profile';
import Quizzes from './app/pages/user/Quizzes';
import Instructions from './app/pages/user/Instructions';
import AttemptQuiz from './app/pages/user/AttemptQuiz';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/about' element={<About />} />

            <Route path='/user' element={<PrivateRoute />}>
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='profile' element={<Profile />} />
                <Route path='quizzes/-1' element={<Quizzes />} />
                <Route path='quiz/instructions/:quizId/:quizTitle' element={<Instructions />} />
                <Route path='quiz/attempt-quiz/:quizId/:quizTitle' element={<AttemptQuiz />} />

            </Route>
        </Routes>
    </BrowserRouter>

  );
}

export default App;
