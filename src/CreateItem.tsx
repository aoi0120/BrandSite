import axios, { AxiosError } from "axios";
import { useState } from "react"
import { useBrands } from "./hooks/useBrands";
import { SelectInput } from "./components/SelectInput";
import { TextInput } from "./components/TextInput";

export const CreateItem = () => {
    interface Item {
        name: string;
        description: string;
        photo_url: string;
        brand_id: number;
    }

    const [formData, setFormData] = useState<Item>({
        name: '',
        description: '',
        photo_url: '',
        brand_id: 1,
    })

    const [errorMessage,setErrorMessage] = useState<string | null>(null);

    const { brandData } = useBrands();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const data: Item = {
            ...formData,
            brand_id: Number(formData.brand_id),
        }

        try {
            await axios.post('http://localhost:3100/api/items', data)
            alert('商品登録出来ました!');
            setFormData({ name: '', description: '', photo_url: '', brand_id: 0 })
            setErrorMessage(null);
        } catch (error) {
            const axiosError = error as AxiosError<{message: string}>;
            setErrorMessage(axiosError.response?.data?.message || '商品登録出来ません');
        }
    }

    return (
        <form className="mt-56 ml-56" onSubmit={handleSubmit}>
            <TextInput
                type="text"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <div>
                <label>Description:</label>
                <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>
            </div>
            <TextInput
                type="text"
                label="photo_url"
                name="photo_url"
                value={formData.photo_url}
                onChange={handleChange}
            />
            <SelectInput
                label="Brand"
                name="Brand_id"
                value={formData.brand_id}
                options={brandData}
                onChange={handleChange} />

            {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
            <button type="submit">作成</button>
        </form>
    )

}