'use client';
import { useEffect, useState } from 'react';
import { Product } from '../models/table.model';
import { TableContainer, TableElement, TableHeader, TableCell, TableRow, Button } from './styles/styled-components';
import Popup from './popup';
import SimpleForm from './simpleForm';
import { fetchData, handleClosePopup, handleDelete, handleEditClick, handleSubmitEdit } from '../services/ProductController';

export default function Table() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    useEffect(() => {
        fetchData(setProducts);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.currentTarget;
        setSelectedProduct({
            ...selectedProduct!,
            [id]: id === 'price' ? parseFloat(value) : value,
        });
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
                                    <Button onClick={() => handleEditClick(product, setSelectedProduct, setIsPopupOpen)}>Edit</Button>
                                    <Button onClick={() => handleDelete(products, setProducts, product, () => handleClosePopup(setIsPopupOpen, setSelectedProduct))}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </TableElement>
            </TableContainer>

            {selectedProduct && (
                <Popup isOpen={isPopupOpen} onClose={() => handleClosePopup(setIsPopupOpen, setSelectedProduct)}>
                    <SimpleForm
                        onSubmit={(e) => handleSubmitEdit(e, products, setProducts, selectedProduct, () => handleClosePopup(setIsPopupOpen, setSelectedProduct))}
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
