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
// interface IState {
//   poster_path: string;
// }

// export default function App() {
//   //Add the api key
//   const APIKey = "57b49859795126623fb177661d312163";

//   const [dataFromAPI, setDataFromAPI] = useState<IState[]>([
//     { poster_path: "" }
//   ]);
//   useEffect(() => {
//     fetch(
//         "https://api.themoviedb.org/3/search/movie?api_key=" +
//         APIKey +
//         "&language=en-US&query=endgame&page=1"
//     )
//       .then(res => res.json())
//       .then(res => setDataFromAPI(res.results));
//   }, []);
//   const dimentions = "w300";
//   let images: JSX.Element[] = [];
//   dataFromAPI.forEach(element => {
//     if (dataFromAPI === [{ poster_path: "" }]) return null;
//     images.push(
//       <img
//         src={"https://image.tmdb.org/t/p/" + dimentions + element.poster_path}
//         alt=""
//       />
//     );
//   });
//   return (
//     <div className="App">
//       <h1>Search Any Movie U Want</h1>
//       {images}
//     </div>
//   );
// }
