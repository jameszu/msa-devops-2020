import React,{useState} from 'react';
import './App.css';
import SearchBox from './Components/SearchBoxComponent/SearchBox';
import ContentGrid from './Components/ContentGridComponent/ContentGrid';
import { IUserInput } from './Common/Interfaces';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';

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
    InputQuery: "Endgame",

  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }

  return (
    <div className="App" >
      <h1>Search Any Movie U Want</h1>
      <MuiThemeProvider theme={theme}>
          <SearchBox SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
          <ContentGrid InputQuery={UserInput.InputQuery}/>
      </MuiThemeProvider>
    </div>
  );
}

export default App;