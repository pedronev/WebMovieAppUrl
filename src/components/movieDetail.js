import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MovieDetail(props) {

  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
        <CardMedia
        className={classes.cover}
        image={props.img}
        
        id={props.id}

        
       
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          title: {props.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          rate: {props.rate}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          type: {props.type}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          language: {props.language}
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary">
        {/* <Link to ={{pathname: '/booking', state: { movie: 'jack', age: 25, city: 'Antwerp'}}}>Book Now</Link> */}

        <Link  to={{
    pathname: "/booking",
    state: { name: 'jack', age: 25, city: 'Antwerp'},
    myCustomProps: "product"
  }}
> book
</Link>
        </Button>
      </CardActions>
      </div>

    </Card>
  );
}