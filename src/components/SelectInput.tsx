import { Brand } from "./types";

interface SelectInput {
    label: string,
    name: string,
    value: number,
    options: Brand[],
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectInput = ({
    label,
    name,
    value,
    options,
    onChange,
}: SelectInput) => {
    return(
        <div>
            <label>{label}</label>
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