import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WarningIcon from '@material-ui/icons/Warning';
import Divider from "@material-ui/core/Divider";

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
    typography: {
        marginTop: 13,
        marginBottom: 13,
        fontFamily: 'monospace',
    },
    span: {
        color: 'red',
        display: 'flex',
        marginBottom: 10,
    },
    icon: {
        paddingRight: 10,
    },
    divider: {
        backgroundColor: 'rgba(255, 255, 255, .2)',
    }
  });

function Contact() {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <CardHeader title="Contact Me" />
                <small className={classes.span}>
                    <WarningIcon className={classes.icon} />
                    I've disabled this form since I don't actually want anybody to contact me from here..
                </small>
                <Divider className={classes.divider} />
                <CardContent>
                    <Typography variant="body2" component="p"  className={classes.typography}>

                    </Typography>
                </CardContent>

            </Card>
        </>
    )
}

export default Contact
