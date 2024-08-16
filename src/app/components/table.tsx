'use client';
import { useEffect, useState } from 'react';
import { Product } from '../models/table.model';
import { TableContainer, TableElement, TableHeader, TableCell, TableRow, Button } from './styles/styled-components';
import Popup from './popup';
import SimpleForm from './simpleForm';
import { AlertConfirm, AlertMessage } from '../utils/alert';

export default function Table() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchData = async () => {
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

        fetchData();
    }, []);

    const handleEditClick = (product: Product) => {
        setSelectedProduct(product);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setSelectedProduct(null);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.currentTarget;
        setSelectedProduct({
            ...selectedProduct!,
            [id]: id === 'price' ? parseFloat(value) : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    
    

    return (
        <>
            <TableContainer>
                <TableElement>
                    <thead>
                        <tr>
                            <TableHeader>Title</TableHeader>
                            <TableHeader>Description</TableHeader>
                            <TableHeader>Price</TableHeader>
                            <TableHeader>Image</TableHeader>
                            <TableHeader>Actions</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.title}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>
                                    {product.image && (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            width={100}
                                            height={100}
                                        />
                                    )}
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => handleEditClick(product)}>Edit</Button>
                                    <Button>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </TableElement>
            </TableContainer>

            {selectedProduct && (
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
                    <SimpleForm
                        onSubmit={handleSubmit}
                        handleChange={handleChange}
                        title={selectedProduct.title}
                        description={selectedProduct.description}
                        price={selectedProduct.price}
                        image={selectedProduct.image}
                    />
                </Popup>
            )}
        </>
    );
}
