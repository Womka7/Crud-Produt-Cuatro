'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image'; // Importa correctamente Image desde next/image
import { Product } from '../models/table.model';

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
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>
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
                        </td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
