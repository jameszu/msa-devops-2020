import React from 'react';
import {Button} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    button: {
      margin: "7px",
      backgroundColor: "white",
      variant: "outlined",
      textTransform: "none",
      fontSize: 12,
      border: 0,
      borderRadius: 3,
      fontFamily: 'Roboto',
    },

  }));

function Footer()
{
    const classes = useStyles();
    return (
        <div className="footer">
            <div>
                <Button href="https://github.com/jameszu/msa-devops-2020" startIcon={<GitHubIcon />} className={classes.button}>
                    GitHub
                </Button>
            </div>

            <div>
                Didn't see any results? Maybe check your spelling~
            </div>

            <div>
                Huge thanks to {" "}
                <a
                style={{ color: "blue" }}
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <u>TMDB </u>
                </a>
                for the data API
                
            </div>
            <div>
                Huge thanks to {" "}
                <a
                style={{ color: "blue" }}
                href="https://nzmsa.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <u>MSA </u>
                </a>
                for instructions
                
            </div>
            <div>
                AUTHOR: James You 2020
            </div>
            <div>
                NO RIGHTS RESERVED
            </div>
        </div>
    )
}
export default Footer;