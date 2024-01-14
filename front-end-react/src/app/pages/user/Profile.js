import React, { useState, useEffect } from 'react'
import Base from '../../components/Base'
import Sidebar from '../../components/Sidebar'
import { getUser } from '../../services/login-service'
import { Card, CardContent, CardMedia, Typography, Divider } from '@mui/material';
import './Profile.css'  

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const Profile = () => {

  const [user, setUser] = useState(undefined)
  const [profileImagePath, setProfileImagePath] = useState(``)

  useEffect(() => {
      setUser(getUser());
      setProfileImagePath(`/src/assets/${getUser().userName}.png`);
  }, []);

  // const handleProfileUpdate = () => {
  // }

  return (
    <Base>
    <div className="row m-10">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10">
            <div className="text-center"> 
                <span className="heading"> Profile  </span>
            </div>
            <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {user && profileImagePath && (
                    <CardMedia
                        sx={{ height: 200, width: '30%',border: '2px solid', borderColor: '#a429b5', marginTop: '20px' }}
                        image={profileImagePath}
                        title="profile-image"
                    />
                )}
                <CardContent>

                  <Divider style={{ backgroundColor: '#a429b5', height: '2px', width: '100%', marginBottom: '10px' }} />

                  {user && (
                    <>
                      <Typography gutterBottom variant="subtitle1">
                        <b>User Name : &nbsp;</b>{user.userName}
                      </Typography>
                      <Typography gutterBottom variant="subtitle1">
                        <b>Name : &nbsp;</b>{user.firstName + " " + user.lastName}
                      </Typography>
                      <Typography gutterBottom variant="subtitle1">
                          <b>Email : &nbsp;</b>{user.email}
                      </Typography>
                      <Typography gutterBottom variant="subtitle1">
                          <b>Phone : &nbsp;</b>{user.phone}
                      </Typography>
                      {/* <Typography gutterBottom variant="subtitle1">
                          <b>Role : &nbsp;</b>{capitalizeFirstLetter(user.authorities[0].authority)}
                      </Typography> */}
                    </>
                  )}
                </CardContent>
            </Card>
      </div>
    </div>
  </Base> 
  )
}

export default Profile