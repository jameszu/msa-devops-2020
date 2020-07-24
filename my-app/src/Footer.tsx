import React from 'react';
import {Button} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    button: {
      margin: "2px",
      backgroundColor: "white",
      variant: "outlined",
      textTransform: "none"
    },
  }));

function Footer()
{
    const classes = useStyles();
    return (
        <div className="footer">
            <div>
                <Button href="https://github.com/jameszu/msa-devops-2020" variant="outlined" startIcon={<GitHubIcon />} className={classes.button}>
                    GitHub
                </Button>
            </div>

            <div>
                lalal just placeholders right now
            </div>

            <div>

                Data from this site is brought by{" "}
                <a
                style={{ color: "blue" }}
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <u>TMDB</u>
                </a>
                
            </div>
        </div>
    )
}
export default Footer;