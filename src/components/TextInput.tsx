interface TextInput {
    type: string,
    label: string,
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({
    type,
    label,
    name,
    value,
    onChange,
}: TextInput) => {
    return(
        <div>
            <label>{label}:</label>
            <input type={type} name={name} value={value} onChange={onChange} required></input>
        </div>
    )
}