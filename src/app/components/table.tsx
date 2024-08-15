'use client';
import { useEffect, useState } from 'react';
import { Product } from '../models/table.model';
import { TableContainer, TableElement, TableHeader, TableCell, TableRow, Button  } from "./styled-components";

export default function Table() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/db/db.json'); // Asegúrate de que la ruta sea correcta
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data.products); // Accede correctamente a la propiedad 'products'
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <TableContainer>
            <TableElement>
                <thead>
                    <tr>
                        <TableHeader>Id</TableHeader>
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
                            <TableCell>{product.id}</TableCell>
                            <TableCell>{product.title}</TableCell>
                            <TableCell>{product.description}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>
                                {/* Renderiza la imagen si existe */}
                                {product.img && (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={product.img}
                                        alt={product.title}
                                        width={100}
                                        height={100}
                                    />
                                )}
                            </TableCell>
                            <TableCell>
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </TableElement>
        </TableContainer>
    );
}
