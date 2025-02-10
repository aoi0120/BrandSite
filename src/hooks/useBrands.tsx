import axios from "axios";
import { useState, useEffect } from "react";
import { Brand } from "../components/types";

//fetchBrands関数を作成
const FetchBrands = async () => {
    try {
      const response = await axios.get('http://localhost:3100/brands');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
}

//brandDataをfetchBrands関数で取得する
export const useBrands = () => {
    const [brandData, setBrandData] = useState<Brand[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchBrands = async () => {
        try {
          const data = await FetchBrands();
          setBrandData(data);
        } catch (error) {
          const err = error as Error;
          console.error(error);
          setError(err.message);
        }
      };
      fetchBrands();
    }, []);
    return { brandData, error };
}