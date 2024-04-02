import { Grid, Paper, Box, Button, Stack } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'


export function Product({id, name, imageName, description, price, cart, onDelete, onAddToCart}){

    return (
        <Grid item xs={6} key={id}>
            <Box sx={{ width: 300, m: 2 }}>
                <Paper elevation={3} sx={{ p:2, position: 'relative'}}>
                    <Stack direction={'column'} spacing={2}>
                    <Box component={'img'} sx={{width: '100%', height: 'auto'}} src={'http://127.0.0.1:8003/images/products/'+imageName} alt='Plante' >

                    </Box>
                        <div className="bg-gray-600 py-6 px-5 text-white ">
                            <button onClick={() => onDelete(id) } className='bg-red-500 absolute right-1 top-0 py-1 px-3 text-white mt-3 '>X</button>
                            <h2>{name}</h2>
                            <p>{description}</p>
                            <p>{price}€</p>
                            <Button variant="contained"  color='primary' endIcon={<ShoppingBasketIcon />} onClick={() => onAddToCart(id)}>{cart != null && cart > 0 ? 'x'+cart : 'Add to cart'}</Button>
                        </div>
                    </Stack>
                </Paper>
            </Box>
        </Grid>
    )
}