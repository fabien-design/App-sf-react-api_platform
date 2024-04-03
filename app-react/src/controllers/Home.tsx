import React from 'react';
import useShoppingCart from '../components/useShoppingCart';
import Header from './Header';
import useProducts from '../components/useProducts';
import { ProductForm } from '../components/ProductForm';
import { ProductList } from '../components/ProductList.tsx';

export default function Home()
{
    const {addToShoppingCart, shoppingCart} = useShoppingCart();
    const { products, onDelete, onAddToCart, addProduct } = useProducts(shoppingCart, addToShoppingCart);

    return (
        <>
            <Header shoppingCart={shoppingCart} />
            <ProductForm onSubmit={addProduct} />
            <ProductList addToShoppingCart={addToShoppingCart} shoppingCart={shoppingCart} products={products} onDelete={onDelete} onAddToCart={onAddToCart} />
        </>
    )
}