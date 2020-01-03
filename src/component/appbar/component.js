import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
function Apps() {
  return (
      <Box display="flex" justifyContent="center">
        <React.Fragment>
      <AppBar position="static" style={{backgroundColor:'green',maxWidth:448,position:"fixed",height:60}}>
        <Toolbar>
          <Typography variant="h6">
            AppBar
          </Typography>
        </Toolbar>
      </AppBar>
      </React.Fragment>
      </Box>
  );
}

export default Apps;
