import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  }
}));

const options = [
  'Cube',
  'Sphere',
  'Cone'
];

const Header = ({onSelected}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleSelected = (option) => {
    handleClose();
    onSelected(option);
  };

  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton}
                      edge="start"
                      color="inherit"
                      aria-label="more"
                      aria-controls="long-menu"
                      aria-haspopup="true"
                      onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    width: 200,
                    marginLeft: 50
                  },
                }}>
            {options.map(option => (
              <MenuItem key={option} onClick={() => handleSelected(option)}>{`Add ${option}`}</MenuItem>
            ))}
          </Menu>
          <Typography variant="h6" align="right" className={classes.title}>ThreeJS Primitives</Typography>
        </Toolbar>
      </AppBar>
    </header>
  )
};

export default Header;