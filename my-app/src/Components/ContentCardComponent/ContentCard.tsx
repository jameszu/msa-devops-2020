import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './ContentCard.css';

interface IContentCardProps
{
    ImageUrl: string | undefined;
    Plot: string | undefined;
    Title: string | undefined;
    // Rating: string | undefined;
}
function ContentCard(props: IContentCardProps)
{
    return  (
        <div>
            <Card className="ContentCardContainer">
                <CardActionArea>
                    <CardMedia
                        className="ContentCardImage"
                        image={props.ImageUrl}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h5">
                            {props.Title}
                        </Typography>
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
