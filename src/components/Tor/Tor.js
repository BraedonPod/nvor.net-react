import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Torimg from '../../assets/img/tor-white.png';


const useStyles = makeStyles({
    root: {
      maxWidth: '50%',
      '@media (max-width: 768px)': {
        maxWidth: '90%',
      },
      color: 'rgb(169, 169, 169)',
      backgroundColor: 'rgb(36, 36, 36)',
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 100,
      padding: 20,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        color: 'rgb(255, 255, 255)',
        '&:hover': {
            color: 'rgb(85, 26, 139)',
        },
        textDecoration: 'none',
    },
    typography: {
        marginTop: 13,
        marginBottom: 13,
        fontFamily: 'monospace',
    },
    media: {
        height: 92,
        width: 152,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
  });

function Tor() {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <CardContent>
                <CardMedia
                    className={classes.media}
                    image={Torimg}
                    title="Tor"
                />
                    <Typography variant="body2" component="p" className={classes.typography}>
                        Going to feed some data here from my Tor relays and hidden site using a custom tor-stem API.
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.typography}>
                        In case this barren page isn't any indication, I haven't gotten around to doing that yet.. In the meantime, you can check out one of my relays on Tor Metrics:
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Link size="small" className={classes.button} to={{ pathname: "https://metrics.torproject.org/rs.html#details/E26635F9ED41CDA8467C2AA992D81074337602EF"}} target="_blank">
                        torproject.org
                    </Link>
                </CardActions>
            </Card>
        </>
    )
}

export default Tor
