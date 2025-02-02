import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../components/types";


export const useItems = () => {

    const [items, setItems] = useState<Product[]>([]);
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