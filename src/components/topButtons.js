import React , {useCallback}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import { useNavigate  } from "react-router-dom";

const images = [
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFRS1fdfbyacOrcDNrnIs1c_iHBLxRjyvBfg&usqp=CAU',
    title: 'Latest Movies',
    width: '33%',
    urltoReg : 'latest'
  },
  {
    url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/opening-soon-template-design-0100b0c214ac3cf2c6f433c06c28c508_screen.jpg?ts=1607800796',
    title: 'Upcoming Movies',
    width: '33%',
    urltoReg : 'upcoming'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZkX0Ib2I0hhRl5XBwBYqPeDaXFg7JzHAyA&usqp=CAU',
    title: 'Nearby Events',
    width: '33%',
    urltoReg : 'events'
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));



// const handleOnClick = useCallback(() => history.push('/sample'), [history]);

// function getDeatils(country) {
  
//   history.push('/sample')
// }

function TopButtons() {
  const classes = useStyles();

  let navigate = useNavigate();

  function handleClick(url) {
    navigate("/" + url);
  }

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
        onClick={() => handleClick(image.urltoReg)}
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
export default TopButtons;