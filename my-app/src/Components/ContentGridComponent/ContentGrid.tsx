import React, { useState, useEffect } from 'react';
import ContentCard from '../ContentCardComponent/ContentCard';
import { Grid } from '@material-ui/core';
import './ContentGrid.css';

interface IState {
    overview: string | undefined;
    poster_path: string | null;
    original_title: string | undefined;
    vote_average: number | 0;
    id: number | 0;
  }
interface IContentGridProps {
    InputQuery: string | null;
    
}

function ContentGrid(props: IContentGridProps) {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [dataFromAPI, setDataFromAPI] = useState<IState[]>([
        { poster_path: "", overview: "", original_title: "", vote_average: 0, id: 0}
    ]);
    var URL = "";
    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/search/movie?api_key=" +
            API_KEY +
            "&language=en-US&query=" +
            props.InputQuery +
            "&page=1"
        )
          .then(res => res.json())
          .then(res => setDataFromAPI(res.results))
          .catch(() => console.log("There is an issue from API, please check the input")
          );

      }, [props.InputQuery, API_KEY]);
      const dimentions = "w500";
      let card: JSX.Element[] = [];
      dataFromAPI.forEach((element: IState, i: Number) => {
        
        if (dataFromAPI === [{ poster_path: "", overview: "", original_title: "", vote_average: 0, id: 0}])  return null;
        if (element.poster_path === null){URL = "notfound_0.png";}
        else{URL = "https://image.tmdb.org/t/p/" + dimentions + element.poster_path;}
        
        card.push(
            <Grid key={"card_"+i} item md={4} lg={3} className="ContentGridCard">
                <ContentCard 
                ImageUrl={URL} 
                Plot={element.overview}
                Title={element.original_title}
                rating={element.vote_average*0.5}
                ID={element.id} />
            </Grid>)
      });
    return (
        <div>
            <Grid container spacing={3} className="ContentGridContainer">
                {card}
            </Grid>
        </div>
    )
}

export default ContentGrid
