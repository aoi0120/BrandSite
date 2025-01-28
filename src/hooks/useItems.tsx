import axios from "axios";
import { useEffect, useState } from "react";


export const useItems = () => {
    interface Item {
        id: number;
        name: string;
        brand_id: number;
        photo_url: string;
        link_url: string;
    }

    const [items, setItems] = useState<Item[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:3100/items');
                setItems(response.data);
            } catch (error) {
                const err = error as Error;
                console.error(error);
                setError(err.message);
            }
        };
        fetchItems();
    }, []);
    return { items, error };
}