import plante_img from '../assets/plante1.avif';


export function Product({id, name, description, price, cart, onDelete, onAddToCart}){

    return (
        <div className="relative w-fit max-w-[250px] border-2 border-gray-500 rounded-md">
            <img src={plante_img} alt="" />
            <div className="bg-gray-600 py-6 px-5 text-white ">
                <button onClick={() => onDelete(id) } className='bg-red-500 absolute right-1 top-0 py-1 px-3 text-white mt-3 '>X</button>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{price}€</p>
                <button className="bg-blue-500 px-4 py-2 text-white mt-3 w-[113px]" onClick={() => onAddToCart(id)}>{cart != null && cart > 0 ? 'x'+cart : 'Add to cart'}</button>
            </div>
        </div>
    )
}