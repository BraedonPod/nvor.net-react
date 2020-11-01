import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        backgroundSize: 'contain',
    },
    card: {
        color: 'rgb(169, 169, 169)',
        backgroundColor: 'rgb(36, 36, 36)',
        height: 500,
        maxHeight: 500,
    },
  });

function AdCard({ data, index }) {
    const classes = useStyles();

    return (
        <>
        <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
                <CardHeader title={data.title} subheader={data.sub} />
                <Link to={{ pathname: data.link}} target="_blank">
                <CardMedia
                    className={classes.media}
                    image={data.image}
                    title={data.title}
                />
                </Link>
                <CardContent>
                    <Typography variant="body2" component="p">
                        {data.desc}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        </>
    )
}

export default AdCard
