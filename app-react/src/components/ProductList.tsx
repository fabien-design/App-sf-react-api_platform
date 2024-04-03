import React from 'react';
import { Product } from "./Product";
import { Grid } from "@mui/material";
import { Product as ProductInterface  } from "./useProducts" ;

export function ProductList({ products, onDelete, onAddToCart, shoppingCart, addToShoppingCart }){

    const handleProductLabel = (product: ProductInterface) => {
        const productInShoppingCart = shoppingCart?.items?.find(item => item.product.id === product.id);
        
        return productInShoppingCart ? productInShoppingCart.quantity : 0;
    }

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
                        cart={handleProductLabel(product) > 0 ? handleProductLabel(product) : product.cart}
                        onDelete={onDelete}
                        onAddToCart={onAddToCart}
                    />
                        
                );
            })}
        </Grid>
    );
}