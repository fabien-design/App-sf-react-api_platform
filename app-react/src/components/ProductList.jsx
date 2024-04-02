import { Product } from "./Product";
import { Grid } from "@mui/material";

export function ProductList({ products, onDelete, onAddToCart}){


    return (

        <Grid container spacing={2} marginTop={5}>
            {products?.map((product) => {
                return (
                <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    imageName={product.imageName}
                    description={product.description}
                    price={product.price}
                    cart={product.cart}
                    onDelete={onDelete}
                    onAddToCart={onAddToCart}
                />
                );
            })}
        </Grid>
    );
}