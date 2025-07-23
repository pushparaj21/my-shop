import axios from "axios";
import { useEffect, useState } from "react";

type ProductCategoryType = {
  id: number;
  name: string;
  slug: string;
  image: string;
};

const useGetProductCategory = () => {
  const [category, setCategory] = useState<ProductCategoryType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const getProductCategory = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get<ProductCategoryType[]>(
          "https://api.escuelajs.co/api/v1/categories"
        );
        setCategory(res?.data);
      } catch (error) {
        setError("getting error during product fetch");
        setIsLoading(false);
      }
    };
    getProductCategory();
  }, []);
  return { category, isLoading, error };
};

export default useGetProductCategory;
