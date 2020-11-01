import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


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
    pos: {
      marginBottom: 12,
      color: 'rgb(169, 169, 169)',
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
  });

function Infra() {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="body2" component="p" className={classes.typography}>
                        I'm probably going to stick the dumb stuff I'm hosting in my Digital Ocean droplets here at some point.
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.typography}>
                        UNDER CONSTRUCTION. Come back later dawg.
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default Infra
