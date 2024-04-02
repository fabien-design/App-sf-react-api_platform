import React, { useEffect, useState } from "react";
import { ProductForm } from "./components/ProductForm";
import { ProductList } from "./components/ProductList";
import useProducts from "./components/useProducts";

function App() {
    const { products, onDelete, onAddToCart, addProduct } = useProducts();

    console.log(products);
    

    return (
        <div>
            <ProductForm onSubmit={addProduct} />
            <ProductList products={products} onDelete={onDelete} onAddToCart={onAddToCart} />
        </div>
    );
}

export default App;
