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
    // const [ItemArray, setItemArray] = useState<IState[]>([{ links: [], data: [] }]);
    const APIKey = "57b49859795126623fb177661d312163";
    const [dataFromAPI, setDataFromAPI] = useState<IState[]>([
        { poster_path: "", overview: "" }
    ]);
    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/search/movie?api_key=" +
            APIKey +
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
    // useEffect(() => {
    //     fetch('https://images-api.nasa.gov/search?media_type=image&q=' + props.SearchQuery + '&year_start=' + props.StartDate?.getFullYear() + '&year_end=' + props.EndDate?.getFullYear())
    //         .then(response => response.json())
    //         .then(response => {
    //             setItemArray(response.collection.items)
    //         })
    //         .catch(() => console.log("it didn't work")
    //         );

    // }, [props.SearchQuery, props.EndDate, props.StartDate]);

    // var Cards: JSX.Element[] = [];
    // ItemArray.forEach((el: IState, i: Number) => {
    //     if (!el || !el.links[0] || !el.data) {
    //         return;
    //     }
    //     Cards.push(
    //         <Grid key={"card_"+i} item sm={6} md={4} lg={3} className="MediaGridCard">
    //             <MediaCard ImageUrl={el['links'][0]['href']} Description={el["data"][0]['description']} />
    //         </Grid>)
    // })

    return (
        <div>
            <Grid container spacing={3} className="ContentGridContainer">
                {images}
            </Grid>
        </div>
    )
}

export default ContentGrid
