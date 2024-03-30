export function ProductForm({ onSubmit }){

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        
        if (!name || !description || !price) {
            return;
        }
        const newProduct = {
            name: name,
            description: description,
            price: price,
            cart: 0
        }
        onSubmit(newProduct);

        e.target.name.value = "";
        e.target.description.value = "";
        e.target.price.value = "";
        
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)} className="mt-5 ml-2">
            <input type="text" name="name" placeholder="nom" />
            <input type="text" name="description" placeholder="description" />
            <input type="number" min="1" step="any" name="price" placeholder="price" />

            <button type="submit" className="bg-blue-500 px-4 py-2 text-white">Add</button>
        </form>
    )
}