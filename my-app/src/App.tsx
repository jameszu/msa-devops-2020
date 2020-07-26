import React,{useState} from 'react';
import { IUserInput } from './Common/Interfaces';
import './App.css';
import SearchBox from './Components/SearchBoxComponent/SearchBox';
import ContentGrid from './Components/ContentGridComponent/ContentGrid';
import NavBar from './NavBar';
import Footer from './Footer';

import {createMuiTheme, MuiThemeProvider, Grid} from '@material-ui/core';
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  
})


function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    InputQuery: "toy",

  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }

  return (
    <div className="App" >
      <NavBar/>
      <MuiThemeProvider theme={theme}>
        <SearchBox SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
        <ContentGrid InputQuery={UserInput.InputQuery}/>
      </MuiThemeProvider>
      <Grid className="footer" item xs={12}>
        <Footer/>
      </Grid>
      
    </div>
  );
}

export default App;