import { SelectInputProps } from "./types";

export const SelectInput = ({
    label,
    name,
    value,
    options,
    onChange,
}: SelectInputProps) => {
    return(
        <div>
            <label>{label}:</label>
            <select name={name} value={value} onChange={onChange} required>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}