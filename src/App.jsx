import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Profile from './Pages/Profile';
import "./index.css"
import Cards from './Pages/Cards';
import Emoji from './Pages/Emoji';
import MobileNavigation from './Components/MobileNavigation/MobileNavigation';
import Edit from './Pages/Edit';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import Messaging from './Pages/Messaging';

const theme = createTheme();

const App = () => {



  return (
    <>
     <StyledEngineProvider injectFirst>
     <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" exact element={<Profile />} />
        <Route path="/cards" exact element={<Cards />} />
        <Route path="/uploadEmoji" exact element={<Emoji />} />
        <Route path="/edit" exact element={<Edit />} />
        <Route path="/message" exact element={<Messaging />} />
      </Routes>
      <div className="lg:hidden block"><MobileNavigation/></div>
      </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
};

export default App;
