import { ProductType } from "@/types/GlobleType";
import axios from "axios";
import { useEffect, useState } from "react";

const useGetProductListbyCategoruyId = ({
  categoryid,
}: {
  categoryid: string;
}) => {
  const [productList, setProductList] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const getProductList = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get<ProductType[]>(
          `https://api.escuelajs.co/api/v1/categories/${categoryid}/products`
        );
        setProductList(res?.data);
      } catch (error) {
        setError("getting error during product fetch");
        setIsLoading(false);
      }
    };
    if (categoryid) {
      getProductList();
    }
  }, []);
  return { productList, isLoading, error };
};

export default useGetProductListbyCategoruyId;
