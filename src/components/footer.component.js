import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/DeleteRounded';

const useStyles = makeStyles({
  card: {
    minWidth: 300
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 0
  }
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer>
      <Card className={classes.card}>
        <CardHeader
          title={
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Word of the Day
            </Typography>
          }
          action={
            <IconButton>
              <DeleteIcon />
            </IconButton>
          }
        />
      </Card>
    </footer>
  )
};

export default Footer;