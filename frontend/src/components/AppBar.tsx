// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Navbar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>

                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        YadavJiBlogs
                    </Link>
                </Typography>

                <Typography variant="body1" style={{ marginRight: '20px' }}>
                    <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Sign Up
                    </Link>
                </Typography>

                <Typography variant="body1" style={{ marginRight: '20px' }}>
                    <Link to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Sign In
                    </Link>
                </Typography>

                <Typography variant="body1" style={{ marginRight: '20px' }}>
                    <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>

                        Profile
                    </Link>
                </Typography>

                <Typography variant="body1" >
                    <Link to="/publish" style={{ textDecoration: 'none', color: 'inherit' }}>

                        New
                    </Link>
                </Typography>


            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
