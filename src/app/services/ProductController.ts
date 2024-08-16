import { IproductProps } from "../models/Iproduct";

export const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    product:IproductProps,
    setProduct:React.Dispatch<React.SetStateAction<IproductProps>>,
    initialState:IproductProps 
    ) => {
    e.preventDefault();

    // Crea el nuevo producto con un ID único
    const newProduct = {
        ...product,
        id: Date.now().toString(), 
    };

    console.log(newProduct);

    // Almacena el producto en localStorage
    try {
        const storedData = localStorage.getItem('products');
        let products = storedData ? JSON.parse(storedData).products : [];

        // Agrega el nuevo producto al array de productos
        products = [...products, newProduct];
        console.log(product);

        // Guarda los productos actualizados en localStorage
        localStorage.setItem('products', JSON.stringify({ products }));

        console.log("Producto guardado en localStorage:", newProduct);

        // Petición POST para crear nuevo producto
        const response = await fetch("http://localhost:3001/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        });
        console.log(response.ok)
        if (response.ok) {
            const result = await response.json();
            console.log("Product added:", result);

            setProduct(initialState);
        } else {
            console.error("Error adding the product:", response.statusText);
        }
    } catch (error) {
        console.error("Error in the request:", error);
    }
};