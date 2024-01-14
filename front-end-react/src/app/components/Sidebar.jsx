import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import QuizIcon from '@mui/icons-material/Quiz';
import CategoryIcon from '@mui/icons-material/Category';
import './Sidebar.css';
import { getCategories } from '../services/category-service';

// Assuming "categories" is an array of objects with a "categoryId" and "title" property


const Sidebar = () => {

  // const [categories, setCategories] = useState([]);

  // useEffect(()=>{
  //   const fetchCategories = async () => {
  //     try {
  //       const data = await getCategories();
  //       setCategories(data);
  //       console.log("categories->",data.length);
  //     } catch (error) {
  //       console.error('Error fetching quizzes:', error);
  //     }
  //   };

  //   fetchCategories();
  // }, []);

  return (
    <Card style={{ marginLeft: 10, marginTop: 10, border: '2px solid #a429b5' }}>
      <List>
        <ListItem 
        button component={Link} 
        to="/user/dashboard" >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <Divider style={{ backgroundColor: '#a429b5', height: '2px' }} />

        <ListItem button component={Link} to="/user/profile">
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <Divider style={{ backgroundColor: '#a429b5', height: '2px' }} />

        <ListItem button component={Link} to="/user/quizzes/-1">
          <ListItemIcon>
            <QuizIcon />
          </ListItemIcon>
          <ListItemText primary="Quizzes" />
        </ListItem>
        {/* <Divider style={{ backgroundColor: '#a429b5', height: '2px' }} /> */}

        {/* {categories.map((category, index) => (
          <div key={category.categoryId}>
            <ListItem button component={Link} to={`/user/quizzes/${category.categoryId}`}>
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary={category.title} />
            </ListItem>
            {index !== categories.length - 1 && <Divider style={{ backgroundColor: '#a429b5', height: '2px' }} />}
          </div>
        ))} */}
      </List>
    </Card>
  )
}

export default Sidebar