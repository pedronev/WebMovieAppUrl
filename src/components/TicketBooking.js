import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import { Navigation } from './navigation';
import FinalBooking from './finalBooking';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { Component } from 'react';
import {useLocation} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
  }));

export default function TicketBooking(props) {
  const classes = useStyles();
  const [seat, setSeat] = React.useState('');
  const [timings, setTimings] = React.useState('');
  const [date, setDate] = React.useState('');
  let data = useLocation();
  console.log(data);

  const handleChange = (event) => {
    setSeat(event.target.value);
  };

  const handleChange2 = (event) => {
    setTimings(event.target.value);
  };

  const handleChange3 = (event) => {
    setDate(event.target.value);
  };

  const [open, setOpen] = React.useState(false);


  const handleClose = () => {
    setOpen(false);
  };

  function bookNow(country) {

    setOpen(true);
  }

  return (
      <div >
    <Navigation  />
    <div>
    <FormControl className={classes.formControl}>
        <div className="row col-xs-6 col-md-3">
  <TextField
    id="date"
    label="Date"
    type="date"
    defaultValue="2017-05-24"
    value={date}
          onChange={handleChange3}
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
  </div>
  </FormControl>
  <FormControl className={classes.formControl}>
  <div className="  col-md-12">
  <InputLabel id="demo-simple-select-label">Available Show Timings</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={timings}
          onChange={handleChange2}
        >
          <MenuItem value={"10:30"}>10:30</MenuItem>
          <MenuItem value={"18:00"}>18:00</MenuItem>
          <MenuItem value={"20:00"}>20:00</MenuItem>
        </Select>
        </div>
        </FormControl>
        <FormControl className={classes.formControl}>
        <div className=" col-md-12">
        <InputLabel id="demo-simple-select-label">Choose number of seat</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={seat}
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
        </div>
</FormControl>
<FormControl style={{paddingTop:"20px"}}>
<Button variant="contained" color="primary" onClick={() => bookNow(props)}>
          Book
        </Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <FinalBooking className={classes.paper}
        date={date} seat={seat} timings={timings} movie={"Avengers"} >

                  </FinalBooking>
      </Modal>
</FormControl>
</div>
    </div>

  );
}