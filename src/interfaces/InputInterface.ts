import { RegisterOptions, UseFormRegister } from "react-hook-form"

export interface InputProps {
    type: string
    placeholder: string
    nome: string
    register: UseFormRegister<any>
    error?: string
    rules?: RegisterOptions
    value?: string
    onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}