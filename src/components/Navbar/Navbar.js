import React from 'react'
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from '@material-ui/core/Avatar';
import DisplayImg from '../../assets/img/nom-cat.png';

import FaceIcon from '@material-ui/icons/Face';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VpnLockIcon from '@material-ui/icons/VpnLock';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appBar: {
        backgroundColor: 'rgb(36, 36, 36)'
    },
    button: {
      color: 'white'
    },
    title: {
      flexGrow: 1,
    },
    text: {
      color: 'white'
    },
    pos: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'monospace',
        marginBottom: 20,
    },
    list: {
      width: 250,
    },
    fullList: {
      width: "auto"
    },
    divider: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    listItem: {
        display: 'block',
        textAlign: 'center',
    },
    avatar: {
        height: 100,
        width: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    navitems: {
        color: 'rgb(169, 169, 169)',
        fontFamily: 'monospace',
        fontSize: 16,
    },
    link: {
        textDecoration: 'none',
    },
    listLink: {
        '&:hover' : {
            backgroundColor: '#414040',
            paddingLeft: 40,
        },
    }
  }));


function Navbar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
            <ListItem className={classes.listItem}>
              <ListItemText primary="Nvor" className={classes.text} />
              <ListItemText className={classes.pos} >
                <small>Certified Human</small>
              </ListItemText>
              <Avatar alt="Nvor" src={DisplayImg} className={classes.avatar} />
            </ListItem>
        </List>
        <Divider className={classes.divider} />
        <List>
            <Link to="/" className={classes.link}>
                <ListItem className={classes.listLink}>
                <ListItemIcon className={classes.navitems}>
                    <FaceIcon />
                </ListItemIcon>
                <ListItemText primary="nvor" className={classes.navitems} />
                </ListItem>
            </Link>
            <Link to="/tor" className={classes.link}>
                <ListItem className={classes.listLink}>
                <ListItemIcon className={classes.navitems}>
                    <VisibilityOffIcon />
                </ListItemIcon>
                <ListItemText primary="tor" className={classes.navitems} />
                </ListItem>
            </Link>
            <Link to="/infra" className={classes.link}>
                <ListItem className={classes.listLink}>
                <ListItemIcon className={classes.navitems}>
                    <VpnLockIcon />
                </ListItemIcon>
                <ListItemText primary="infra" className={classes.navitems} />
                </ListItem>
            </Link>
            <Link to="/advocacy" className={classes.link}>
                <ListItem className={classes.listLink}>
                <ListItemIcon className={classes.navitems}>
                    <AccountBalanceIcon />
                </ListItemIcon>
                <ListItemText primary="advocacy" className={classes.navitems} />
                </ListItem>
            </Link>
            <Link to="/contact" className={classes.link}>
                <ListItem className={classes.listLink}>
                <ListItemIcon className={classes.navitems}>
                    <MailIcon />
                </ListItemIcon>
                <ListItemText primary="contact" className={classes.navitems} />
                </ListItem>
            </Link>
        </List>
      </div>
    );

    return (
        <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}><MenuIcon className={classes.button} /></Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
            <Typography variant="h6" className={classes.title}>
              Nvor.net
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Navbar
