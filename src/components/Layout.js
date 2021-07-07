import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { useHistory, useLocation } from 'react-router';

const drawerWidth = 240;
const menuItems = [
    {
        name: 'Home',
        icon: <SubjectOutlinedIcon />,
        path: '/'
    },
    {
        name: 'Create',
        icon: <AddCircleOutlineOutlinedIcon />,
        path: '/create'
    }
]

// Makestyles with customize theme as parameter
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    pages: {
        backgroundColor: '#f9f9f9',
        width: '100%'
    },
    sideDrawer: {
        width: drawerWidth
    },
    sideDrawerTitle: {
        padding: theme.spacing(2)
    },
    sideDrawerPaper: {
        width: drawerWidth
    },
    active: {
        background: '#f4f4f4'
    }
}));

const Layout = ({ children }) => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    return (
        <div className={classes.root}>
            {/* Appbar Section */}
            <div>
                
            </div>

            {/* Side Drawer Section */}
            <Drawer
                variant="permanent"
                className={classes.sideDrawer}
                classes={{ paper:  classes.sideDrawerPaper}}
                anchor="left"
            >
                <Typography className={classes.sideDrawerTitle}>
                    Notes Drawer
                </Typography>
                <List>
                   {
                       menuItems.map(item => (
                           <ListItem
                            key={item.name}
                            button
                            onClick={() => history.push(item.path)}
                            className={location.pathname === item.path ? classes.active : null}
                            >
                               <ListItemIcon>
                                   {item.icon}
                               </ListItemIcon>
                               <ListItemText primary={item.name} />
                           </ListItem>
                       ))
                   } 
                </List>
            </Drawer>

            {/* Dynamic Pages Section */}
            <div className={classes.pages}>
                {children}
            </div>
        </div>
    )
}

export default Layout;