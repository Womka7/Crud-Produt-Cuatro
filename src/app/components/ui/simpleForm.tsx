'use client';

import React from 'react';
import Input from './input';
import TextArea from './textArea';
import Button from './button';
import { FormContainer } from '../form/formStyles';
import { IformProps } from '../../types/Iform';

const SimpleForm: React.FC<IformProps> = ({
    onSubmit,
    handleChange,
    title,
    description,
    price,
    image,
}) => {
    const handleButtonClick = () => {
        // Dispara el evento de submit manualmente
        const event = new Event('submit', { bubbles: true });
        document.querySelector('form')?.dispatchEvent(event);
    };

    return (
        <FormContainer onSubmit={onSubmit}>
            <Input
                label="Title"
                type="text"
                placeholder="Enter product title"
                id="title"
                value={title}
                onChange={handleChange}
            />
            <TextArea
                label="Description"
                id="description"
                value={description}
                onChange={handleChange}
            />
            <Input
                label="Price"
                type="number"
                placeholder="Enter product price"
                id="price"
                value={price.toString()}
                onChange={handleChange}
            />
            <Input
                label="Image URL"
                type="url"
                placeholder="Enter image URL"
                id="image"
                value={image}
                onChange={handleChange}
            />
            <Button
                label="Save Changes" // Cambiado para edición
                type="submit"
                className="btn-submit"
            />
        </FormContainer>
    );
}

export default SimpleForm;
