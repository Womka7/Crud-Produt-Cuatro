// components/Popup.tsx
import React from 'react';
import { PopupProps } from '../../types/Ipopup';
import { CloseButton, Overlay, PopupContainer } from './popupStyles';

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
    return (
        <Overlay isOpen={isOpen} onClick={onClose}>
            <PopupContainer onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>×</CloseButton>
                {children}
            </PopupContainer>
        </Overlay>
    );
};

export default Popup;
