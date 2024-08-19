export interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}