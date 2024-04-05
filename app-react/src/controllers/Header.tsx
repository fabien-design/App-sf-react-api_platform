import React, { useEffect, useRef, useState } from "react";
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Grid, AppBar, Toolbar, Typography, IconButton, MenuItem, Menu, Badge, Popover, Card, Box, CardContent, CardMedia, FormControl, InputLabel, NativeSelect, Select } from "@mui/material";

export default function Header({ shoppingCart }){

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleCartPopup = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCartPopupClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    // const navigate = useNavigate();
    const showHome = () => {
        // navigate('/')
        console.log('/');
    }

    useEffect(() => {

        const handleClickOutside = (event: MouseEvent) => {
            if (event.target instanceof HTMLElement && event.target.classList.contains('MuiBackdrop-root')) {
                handleCartPopupClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [anchorEl]);

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
                    className="relative"
                    onClick={handleCartPopup}
                    color="inherit">
                        <Badge badgeContent={shoppingCart?.items?.length} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                    <Popover 
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    id="shoppingCartPopup"
                    >
                        
                        <Grid container columns={1} rowSpacing={1} width={500}>
                            {shoppingCart?.items.map((item) => (
                                <Grid item xs={12}>
                                    <Card sx={{ display: 'flex' }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 100 }}
                                            image={'http://127.0.0.1:8003/images/products/'+item.product.imageName}
                                            alt={"image of"+item.product.name}
                                        />
                                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                            <CardContent sx={{ flex: '1 0 auto' }}>
                                                <Typography component="div" variant="h5">
                                                    {item.product.name}
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    {item.product.description}
                                                </Typography>
                                                <Box maxWidth={100} display={'flex'} alignItems={'center'} gap={1}>
                                                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                                        Qté:
                                                    </InputLabel>
                                                    <NativeSelect
                                                    defaultValue={item.quantity}
                                                    >
                                                        <option value={1}>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                        <option value={4}>4</option>
                                                        <option value={5}>5</option>
                                                        <option value={6}>6</option>
                                                        <option value={7}>7</option>
                                                        <option value={8}>8</option>
                                                        <option value={9}>9</option>
                                                    </NativeSelect>
                                                </Box>
                                            </CardContent>
                                        </Box>
                                        <Box>
                                            <Typography variant="h5" fontWeight={'bold'} pt={2} pr={2}>
                                                {item.product.price}€
                                            </Typography>
                                        </Box>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                    </Popover>
                    
                </Grid>
          </Grid>
          
        </Toolbar>
      </AppBar>
    )
}
