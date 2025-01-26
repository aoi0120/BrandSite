import axios, { AxiosError } from "axios";
import { useState } from "react"
import { useBrands } from "./hooks/useBrands";
import { SelectInput } from "./components/SelectInput";

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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required></input>
            </div>
            <div>
                <label>Description:</label>
                <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>
            </div>
            <div>
                <label>photo_url:</label>
                <input type="text" name="photo_url" value={formData.photo_url} onChange={handleChange} required></input>
            </div>
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