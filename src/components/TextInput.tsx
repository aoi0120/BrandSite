import { TextInputProps } from "./types"

export const TextInput = ({
    type,
    label,
    name,
    value,
    onChange,
}: TextInputProps) => {
    return(
        <div>
            <label>{label}:</label>
            <input type={type} name={name} value={value} onChange={onChange} required></input>
        </div>
    )
}