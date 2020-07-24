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

import './NavBar.css';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
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

// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
// import Slide from '@material-ui/core/Slide';

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
//   children: React.ReactElement;
// }

// function ScrollNavBar(props: Props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({ target: window ? window() : undefined });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// export default function NavBar(props: Props) {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <ScrollNavBar {...props}>
//         <AppBar>
//           <Toolbar>
//             <Typography variant="h6">Scroll to Hide App Bar</Typography>
//           </Toolbar>
//         </AppBar>
//       </ScrollNavBar>
//       <Toolbar />
//     </React.Fragment>
//   );
// }