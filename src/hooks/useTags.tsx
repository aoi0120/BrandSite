import axios from "axios";
import { useCallback, useEffect, useState } from "react"
import { Tag } from "../components/types"


export const useTags = () => {

    const [tagData, setTagData] = useState<Tag[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchTags = useCallback(async () => {
        try {
            const response = await axios.get<Tag[]>('http://localhost:3100/tags');
            setTagData(response.data);
            setError(null);
        } catch (error) {
            const err = error as Error;
            console.error(err);
            setError(err.message);
        }
    }, []);

    useEffect(() => {
        fetchTags();
    }, [fetchTags])


    // useEffect(() => {
    //     const fetchTags = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:3100/tags');
    //             setTags(response.data);
    //         } catch (error) {
    //             const err = error as Error;
    //             console.error(error);
    //             setError(err.message);
    //         }
    //     }
    //     fetchTags();
    // }, []);
    return { tagData, error };
}