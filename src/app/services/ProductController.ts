import { IproductProps } from "../models/Iproduct";
import { Product } from "../models/table.model";
import { AlertConfirm, AlertMessage } from "../utils/alert";

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

//*Función para mostrar productos */

export const fetchData = async (
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
) => {
    try {
        const response = await fetch('db/db.json'); 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.products);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

//*Función para el formulario de eliminación */
export const handleDelete = async (
    products: Product[],
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>,
    selectedProduct: Product | null,
    handleClosePopup: () => void
) => {
    if (selectedProduct) {
        try {
            // Mostrar el alerta de confirmación
            const result = await AlertConfirm('Are you sure you want to delete this product?');

            // Verificar si el usuario confirmó la acción
            if (result.isConfirmed) {
                const response = await fetch(`http://localhost:3001/products/${selectedProduct.id}`, {
                    method: 'DELETE',
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                await AlertMessage('Successfully deleted product', 'success');
                setProducts(products.filter(product => product.id !== selectedProduct.id));
                handleClosePopup();
                window.location.reload(); // Recarga la página aquí de borrar   
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            await AlertConfirm('Error deleting product'); // Mostrar un alerta de error si falla
        }
    }
};

//*Función para boton de editar */
export const handleEditClick = (
    product: Product,
    setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>,
    setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
};

//*Función para cerrar el popup */
export const handleClosePopup = (
    setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>
) => {
    setIsPopupOpen(false);
    setSelectedProduct(null);
};

//*Función para el formulario de edición */
export const handleSubmitEdit = async (
    e: React.FormEvent<HTMLFormElement>,
    products: Product[],
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>,
    selectedProduct: Product | null,
    handleClosePopup: () => void
) => {
    e.preventDefault();
    if (selectedProduct) {
        try {
            // Mostrar el alerta de confirmación
            const result = await AlertConfirm('Are you sure you want to update this product?');

            // Verificar si el usuario confirmó la acción
            if (result.isConfirmed) {
                const response = await fetch(`http://localhost:3001/products/${selectedProduct.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(selectedProduct),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                await AlertMessage('Successfully updated product', 'success');
                const updatedProduct = await response.json();
                setProducts(products.map(product =>
                    product.id === updatedProduct.id ? updatedProduct : product
                ));
                handleClosePopup();
                window.location.reload(); // Recarga la página después de guardar
            }
        } catch (error) {
            console.error('Error updating product:', error);
            await AlertConfirm('Error updating product'); // Mostrar un alerta de error si falla
        }
    }
};