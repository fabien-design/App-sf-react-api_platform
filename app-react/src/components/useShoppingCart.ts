import { useEffect, useState } from "react";
import { Product } from "./useProducts";

export interface ShoppingCart{
    items: ShoppingCartItem[];
}

export interface ShoppingCartItem{
    product: Product;
    quantity: number;
}


export default function useShoppingCart(){

    const [shoppingCart, setShoppingCart] = useState<ShoppingCart>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const existingShoppingCartString = sessionStorage.getItem('shoppingCart');
        if (existingShoppingCartString) {
            const existingShoppingCart: ShoppingCart = JSON.parse(existingShoppingCartString);
            setShoppingCart(existingShoppingCart);
        } else {
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
        }
    }, []);

    const addToShoppingCart = (product: Product) => {
        setLoading(true);
        // Recherche du produit dans le panier
        const existingShoppingCartItemIndex = shoppingCart?.items.findIndex(item => item.product.id === product.id);

        if (existingShoppingCartItemIndex === -1 || existingShoppingCartItemIndex === undefined) {
            // Le produit n'existe pas encore dans le panier, ajoutez-le avec une quantité de 1
            const updatedItems = [...(shoppingCart?.items || []), {
                product: product,
                quantity: 1
            }];
            
            setShoppingCart({ items: updatedItems });

        } else {
            // Le produit existe déjà dans le panier, mettez à jour sa quantité
            setShoppingCart((prevShoppingCart) => {
                if (!prevShoppingCart) return prevShoppingCart; // Si le panier est undefined, ne rien changer
                const updatedItems = prevShoppingCart.items.map((item, index) => {
                    if (index === existingShoppingCartItemIndex) {

                        return {
                            ...item,
                            quantity: item.quantity + 1
                        };
                    }
                    return item;
                });
                return { items: updatedItems };
            });
        }
        sessionStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
        setLoading(false);
    };
    
    
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