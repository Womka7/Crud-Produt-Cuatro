export interface IformProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    title: string;
    description: string;
    price: string;
    image: string;
}