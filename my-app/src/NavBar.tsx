import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Slide
  } from "@material-ui/core";
import Menu from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

interface Props {

  children: React.ReactElement;
}

function HideNavBar(props: Props)
{
  const { children} = props;
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
        <AppBar>
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="open drawer">
                <Menu />
              </IconButton>
              <Typography variant="h6" noWrap> The Movie Web App </Typography>
            </Toolbar>
          </AppBar>
      </HideNavBar>
    </div>
  )
  
}
