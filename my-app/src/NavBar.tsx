import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Slide
  } from "@material-ui/core";
import TheatersSharpIcon from '@material-ui/icons/TheatersSharp';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

interface Props {

  children: React.ReactElement;
}

function HideNavBar(props: Props)
{
  const {children} = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );

}
export default function NavBar()
{
  return (
    <div>
      <HideNavBar>
        <AppBar elevation={0} >
            <Toolbar variant="dense">
              <IconButton edge='start' color="inherit" aria-label="open drawer" href='/#'>
                <TheatersSharpIcon/>
              </IconButton>
              
              <Typography variant="h6" noWrap> The Movie Web App </Typography>
            </Toolbar>
          </AppBar>
      </HideNavBar>
    </div>
  )
  
}
