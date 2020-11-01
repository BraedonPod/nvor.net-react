import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import data from './Data.json';
import AdCard from './AdCard';


const useStyles = makeStyles({
    root: {
      maxWidth: '50%',
      '@media (max-width: 768px)': {
        maxWidth: '90%',
      },
      color: 'rgb(169, 169, 169)',
      backgroundColor: 'rgb(36, 36, 36)',
      textAlign: 'left',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 100,
      padding: 20,
    },
    root2: {
        flexGrow: 1,
      },
    typography: {
        marginTop: 13,
        marginBottom: 13,
        fontFamily: 'monospace',
    },
  });

function Advocacy() {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Digital Rights and Privacy.
                    </Typography>
                    <Typography variant="body2" component="p"  className={classes.typography}>
                        Do you not like being spied on by governments, law enforcement agencies, and private corporations? The digital age has had a profound impact on how humans communicate and share ideas and information. As data has evolved and its volume continues to grow exponentially, many public and privately sponsored entities have invested heavily in domestic and global surveillance capabilities, with the intention of collecting any amount of information on all members of the general public. Fortunately, there are a number of awesome tools that allow us to push back and hide our internet activities from the watchful eye of surveillance.
                    </Typography>
                    <Typography variant="body2" component="p"  className={classes.typography}>
                        Check out the below tools for maximizing your anonymity and privacy over the web.
                    </Typography>
                </CardContent>
            </Card>

            <div className="content">
                <Grid container className={classes.root2} spacing={4}>
                    {data.map(( d, index ) =>{
                        return <AdCard  data={d} key={index} />
                    })}
                </Grid>
            </div>
        </>
    )
}

export default Advocacy
