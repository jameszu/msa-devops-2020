import React, { useState, useEffect } from 'react';
import ContentCard from '../ContentCardComponent/ContentCard';
import { Grid } from '@material-ui/core';
import './ContentGrid.css';

interface IState {
    overview: string | undefined;
    poster_path: string | null;
  }
interface IContentGridProps {
    InputQuery: string | null;
    
}
function ContentGrid(props: IContentGridProps) {
    const API_KEY = process.env["REACT_APP_API_KEY"];
    const [dataFromAPI, setDataFromAPI] = useState<IState[]>([
        { poster_path: "", overview: "" }
    ]);
    console.log(API_KEY);
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
          .catch(() => console.log("it didn't work")
          );

      }, [props.InputQuery]);
      const dimentions = "w300";
      let images: JSX.Element[] = [];
      dataFromAPI.forEach(element => {
        if (dataFromAPI === [{ poster_path: "", overview: "" }]) return null;
        images.push(
            <Grid key={"card_"} item sm={6} md={4} lg={3} className="ContentGridCard">
                <ContentCard 
                ImageUrl={"https://image.tmdb.org/t/p/" + dimentions + element.poster_path} 
                Plot={element.overview} />
            </Grid>)
      });
    return (
        <div>
            <Grid container spacing={3} className="ContentGridContainer">
                {images}
            </Grid>
        </div>
    )
}

export default ContentGrid
