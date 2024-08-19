'use client'

import React from 'react';
import { Product } from '../../types/table.model';
import { CardContainer, CardImage, CardTitle, CardPrice, AddToCartButton, CardContent} from './cardStyles';

interface CardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

const Card: React.FC<CardProps> = ({ product, onAddToCart }) => {
    return (
        <CardContainer>
            <CardContent>
                <CardTitle>{product.title}</CardTitle>
                <CardImage src={product.image} alt={product.title} />
                <CardPrice>${product.price}</CardPrice>
                <AddToCartButton onClick={() => onAddToCart(product)}>Add to Cart</AddToCartButton>
            </CardContent>
        </CardContainer>
    );
};

export default Card;
