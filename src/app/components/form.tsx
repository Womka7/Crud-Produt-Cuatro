'use client'

import React, { useState } from "react";
import { IproductProps } from "../models/Iproduct";
import Input from "./ui/input";
import TextArea from "./ui/textArea";
import Button from "./ui/button";
import { FormContainer } from "./styles/formStyles";
import { handleSubmit } from "../services/ProductController";
import { useRouter } from "next/navigation";

const initialState: IproductProps = {
    id: '',
    title: '',
    description: '',
    price: 0,
    image: ''
}

const ProductForm: React.FC = () => {
    const [product, setProduct] = useState<IproductProps>(initialState);
    const router = useRouter();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.currentTarget;
        setProduct({
            ...product,
            [id]: id === 'price' ? parseFloat(value) : value,
        });
    };


    return (
        <FormContainer onSubmit={(event) =>handleSubmit(event,product,setProduct,initialState,router)}>
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
