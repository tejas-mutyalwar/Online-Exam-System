import React from 'react'
import Base from '../components/Base'
import './Home.css'

const Home = () => {

  const navigateToTeacherPage = () => {
    window.location.href = "http://localhost:4200";
  }

  return (
    <Base>
      <div className="bootstrap-wrapper">
          <div className="container">
              <div style={{marginTop: '20px'}}>
                  <div className="col-md-11 offset-md-1 text-center">
                      <h4>Welcome to Student Section !! </h4>
                  </div>
                  <div className='submit-container' style={{marginTop: '20px'}}>
                    <div class='submit-bn' onClick={navigateToTeacherPage}>Go to Teacher Section</div>
                  </div>
              </div>
          </div>
      </div>
    </Base>
  )
}

export default Home