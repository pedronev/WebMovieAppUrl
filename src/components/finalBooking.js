import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import QRCode  from 'qrcode.react';
import Swal from 'sweetalert2';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function FinalBooking(props) {
  const classes = useStyles();

  let stringQr = props;



  console.log(stringQr);
  function final() {

    const newMovie= {
      date: props.date,
      movie: props.movie,
      seat: props.seat,
      timings: props.timings
    }

    axios.post('http://localhost:3001/create', newMovie)
    .then(function (response){
      alert.log(response);
    });

  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <QRCode value= {stringQr}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ticket Deatils
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Date: {props.date}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          seat: {props.seat}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Time: {props.timings}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Movie: {props.movie}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => final()}>
          Done
        </Button>

      </CardActions>
    </Card>
  );
}