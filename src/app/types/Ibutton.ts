export interface IbuttonProps {
    label: string;
    onClick?: () => void; // Ahora es opcional
    type?: 'button' | 'submit' | 'reset'; // Permitir el tipo de botón
    className?: string;
}
