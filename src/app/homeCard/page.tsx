'use client'
import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/ProductServices';
import { Product } from '../types/table.model';
import { CardGridContainer } from './cardGridStyles';
import Card from '../components/card/card';
import NoProductsAvailable from '../components/notFound/notFound';
import { AlertMessage } from '../utils/alert';

export default function HomeCard() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchData(setProducts);
    }, []);

    const handleAddToCart = (product: Product) => {
        AlertMessage( `Product added to cart: ${product.title}`, "success")
    };

    return (
        <article>
            <CardGridContainer>
                {products.length > 0 ? (
                    products.map(product => (
                        <Card key={product.id} product={product} onAddToCart={handleAddToCart} />
                    ))
                ) : (
                    <NoProductsAvailable/>
                )}
            </CardGridContainer>
        </article>
    );
}
