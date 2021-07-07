import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    pages: {
        backgroundColor: '#f9f9f9'
    }
});

const Layout = ({ children }) => {
    const classes = useStyles();
    return (
        <div>
            {/* Appbar Section */}
            <div>
                
            </div>

            {/* Side Drawer Section */}
            <div>

            </div>

            {/* Dynamic Pages Section */}
            <div className={classes.pages}>
                {children}
            </div>
        </div>
    )
}

export default Layout;