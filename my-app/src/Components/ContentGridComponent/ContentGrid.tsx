import React, { useState, useEffect } from 'react';
import ContentCard from '../ContentCardComponent/ContentCard';
import { Grid } from '@material-ui/core';
import './ContentGrid.css';

interface IState {
    overview: string | undefined;
    poster_path: string | null;
    original_title: string | undefined;
  }
interface IContentGridProps {
    InputQuery: string | null;
    
}

function ContentGrid(props: IContentGridProps) {
    var API_KEY = process.env.REACT_APP_API_KEY;
    const [dataFromAPI, setDataFromAPI] = useState<IState[]>([
        { poster_path: "", overview: "", original_title: ""}
    ]);
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
      const dimentions = "w500";
      let images: JSX.Element[] = [];
      dataFromAPI.forEach(element => {
        
        if (dataFromAPI === [{ poster_path: "", overview: "", original_title: "" }]) return null;
        if (element.poster_path === ""){element.poster_path = "%PUBLIC_URL%/notfound_0.png"}
        images.push(
            <Grid item md={4} lg={3} className="ContentGridCard">
                <ContentCard 
                ImageUrl={"https://image.tmdb.org/t/p/" + dimentions + element.poster_path} 
                Plot={element.overview}
                Title={element.original_title} />
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
