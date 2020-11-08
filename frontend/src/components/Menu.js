import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const theme = createMuiTheme({
        typography: {
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        },
      });

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button font-family="sans-serif" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Recipients
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Amanda</MenuItem>
          <MenuItem onClick={handleClose}>Konoha</MenuItem>
          <MenuItem onClick={handleClose}>Erique</MenuItem>
        </Menu>
      </div>
    );
  }
  