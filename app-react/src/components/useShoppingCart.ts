import { useEffect, useState } from "react";
import { Product } from "./useProducts";

export interface ShoppingCart{
    items: Product[];
}

export interface ShoppingCartItem{
    product: Product;
    quantity: number;
}


export default function useShoppingCart(){

    const [shoppingCart, setShoppingCart] = useState<ShoppingCart>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("http://127.0.0.1:8003/session/shopping-cart")
            .then((response) => response.json())
            .then((data) => {
                setShoppingCart(data);
            })
            .catch((error) => {
                console.error("Error fetching shopping cart:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const addToShoppingCart = (productId: Product['id']) => {
        setLoading(true);
        fetch(`http://127.0.0.1:8003/session/shopping-cart/${productId}`,{method: "POST"})
            .then((response) => response.json())
            .then((data) => {
                setShoppingCart(data);
                console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const removeFromShoppingCart = (product: Product) => {
        setLoading(true);
        fetch(`http://127.0.0.1:8003/session/shopping-cart/${product.id}`,{method: "DELETE"})
        .then((response) => response.json())
        .then((data) => {
            setShoppingCart(data);
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
        })
        .finally(() => {
            setLoading(false);
        });
    }

    

    return { shoppingCart, addToShoppingCart, removeFromShoppingCart, loading };

}