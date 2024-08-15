'use client'

import React, { useState } from "react";
import { IproductProps } from "../models/Iproduct";
import Input from "./input";
import TextArea from "./textArea";
import Button from "./button";
import { FormContainer } from "./styles/formStyles";

const ProductForm: React.FC = () => {
    const [product, setProduct] = useState<IproductProps>({
        id: '',
        title: '',
        description: '',
        price: 0,
        image: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.currentTarget;
        setProduct({
            ...product,
            [id]: id === 'price' ? parseFloat(value) : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Crear el nuevo producto con un ID único (basado en la hora actual)
        const newProduct = {
            ...product,
            id: Date.now().toString(), // Genera un ID basado en el tiempo actual
        };

        console.log(newProduct);

        // Almacenar el producto en localStorage
        try {
            const storedData = localStorage.getItem('products');
            let products = storedData ? JSON.parse(storedData).products : [];

            // Agregar el nuevo producto al array de productos
            products = [...products, newProduct];
            console.log(product);

            // Guardar los productos actualizados en localStorage
            localStorage.setItem('products', JSON.stringify({ products }));

            console.log("Producto guardado en localStorage:", newProduct);

            // Realizar la petición POST al servidor para agregar el nuevo producto
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
                console.log("Producto agregado al servidor:", result);

                // También puedes resetear el estado del producto si es necesario
                setProduct({
                    id: '',
                    title: '',
                    description: '',
                    price: 0,
                    image: ''
                });
            } else {
                console.error("Error al agregar el producto al servidor:", response.statusText);
            }
        } catch (error) {
            console.error("Error en la petición o localStorage:", error);
        }
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Input
                label="Title"
                type="text"
                placeholder="Enter product title"
                id="title"
                value={product.title}
                onChange={handleChange}
            />
            <TextArea
                label="Description"
                id="description"
                value={product.description}
                onChange={handleChange}
            />
            <Input
                label="Price"
                type="number"
                placeholder="Enter product price"
                id="price"
                value={product.price.toString()}
                onChange={handleChange}
            />
            <Input
                label="Image URL"
                type="url"
                placeholder="Enter image URL"
                id="image"
                value={product.image}
                onChange={handleChange}
            />
            <Button
                label="Add Product"
                onClick={() => {}}
                className="btn-submit"
            />
        </FormContainer>
    );
}

export default ProductForm;
