import { Product } from "./Product";
export function ProductList({ products, onDelete, onAddToCart}){

    if(!products || products.length === 0) {
        return (
            <div>
                <h1>No products found</h1>
            </div>
        );
    }

    return (
        <div className="flex gap-2 pt-8 max-w-screen flex-wrap">
            {products.map((product) => {
                return (
                <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    cart={product.cart}
                    onDelete={onDelete}
                    onAddToCart={onAddToCart}
                />
                );
            })}
        </div>
    );
}