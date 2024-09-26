import { InputProps } from "../../interfaces/InputInterface"

export function Input({ onchange, type, placeholder, nome, register, error, rules, value }: InputProps) {
  return (
    <div>
        <input 
            className="form-control"
            type={type}
            placeholder={placeholder}
            {...register(nome, rules)}
            id={nome}
            value={value}
            onChange={onchange}
        />
        { error && <p>{ error }</p> }
    </div>
  )
}
