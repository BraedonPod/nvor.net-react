import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import GitHubIcon from '@material-ui/icons/GitHub';

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
      fontFamily: 'monospace',
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

function Index() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Nvor{bull}net
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Yo.
                    </Typography>
                    <Typography variant="body2" component="p"  className={classes.typography}>
                        I'm Nvor (though I also go by my non-cyber handle, Nick).
                    <br />
                        I make stuff.
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Link size="small" className={classes.button} to={{ pathname: "https://github.com/Nvor"}} target="_blank">
                        <GitHubIcon /><br />
                        Github
                    </Link>
                </CardActions>
            </Card>
        </>
    )
}

export default Index
