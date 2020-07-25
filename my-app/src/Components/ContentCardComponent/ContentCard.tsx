import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Rating } from '@material-ui/lab';

import './ContentCard.css';

interface IContentCardProps
{
    ImageUrl: string | undefined;
    Plot: string | undefined;
    Title: string | undefined;
    rating: number | 0;
    ID: number | 0;
}
function ContentCard(props: IContentCardProps)
{
    const URL = "https://www.themoviedb.org/movie/" + props.ID;
    return  (
        <div>
            <Card className="ContentCardContainer">
                <CardActionArea href={URL} target="_blank">
                    <CardMedia
                        className="ContentCardImage"
                        image={props.ImageUrl}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h5">
                            {props.Title}
                        </Typography>
                        <Rating value={props.rating} disabled={true}></Rating>
                        <Typography variant="body2" 
                                    color="textSecondary"
                                    component="p"
                                    className="ContentCardDescription">
                                        {props.Plot}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default ContentCard
