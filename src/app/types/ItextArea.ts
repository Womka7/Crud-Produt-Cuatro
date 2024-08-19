export interface ItextAreaProps{
    label: string;
    id: string;
    required: string;
    value: string;
    onChange: (event:React.ChangeEvent<HTMLTextAreaElement>) => void;

}