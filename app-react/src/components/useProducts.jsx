import { useEffect, useState } from "react";

export default function useProducts(){

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8003/api/products")
            .then((response) => response.json())
            .then((data) => {
                data["hydra:member"].forEach((product) => {
                    const newProduct = {
                        id: product.id,
                        name: product.name,
                        imageName: product.imageName,
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

}