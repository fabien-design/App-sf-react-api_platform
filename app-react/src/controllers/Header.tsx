import React from "react";
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Grid, AppBar, Toolbar, Typography, IconButton, MenuItem, Menu, Badge } from "@mui/material";

export default function Header({ shoppingCart }){

    // const navigate = useNavigate();
    const showHome = () => {
        // navigate('/')
        console.log('/');
    }

    const showShoppingCart = () => {
        // navigate('/shopping-cart')
        console.log('/shopping-cart');
    }

    return (
        <AppBar position="static">
        <Toolbar>
          <Grid container justifyContent={'space-between'} alignItems={'center'} style={{width: '100%'}}> 
                <Grid item >
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={showHome}
                    color="inherit">
                        <StoreIcon />
                    </IconButton>
                </Grid>
                <Grid item >
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={showShoppingCart}
                    color="inherit">
                        <Badge badgeContent={0} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Grid>
          </Grid>
          
        </Toolbar>
      </AppBar>
    )
}
