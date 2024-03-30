import React, { useEffect, useState } from "react";
import { ProductForm } from "./components/ProductForm";
import { ProductList } from "./components/ProductList";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    const onDelete = (productId) => {
        setProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== productId)
        );
    };

    const onAddToCart = (productId) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === productId ? { ...product, cart: product.cart + 1 } : product
            )
        );
    };

    const addProduct = (product) => {
        if(!product.id){
            product.id = products.length > 0 ? products[products.length - 1].id + 1 : 0;
        }
        setProducts((prevProducts) => [...prevProducts, product]);
    };

    return { products, onDelete, onAddToCart, addProduct };
};

function App() {
    const { onDelete, onAddToCart, addProduct, products } = useProducts();

    useEffect(() => {
        fetch("http://127.0.0.1:8003/api/products")
            .then((response) => response.json())
            .then((data) => {
                data["hydra:member"].forEach((product) => {
                    const newProduct = {
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        price: (product.price/100),
                        cart: 0
                    };
                    addProduct(newProduct);
                });
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <div>
            <ProductForm onSubmit={addProduct} />
            <ProductList products={products} onDelete={onDelete} onAddToCart={onAddToCart} />
        </div>
    );
}

export default App;
