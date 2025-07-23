import CartBottom from "@/components/CartBottom";
import ProductCard from "@/components/ProductCard";
import { ProductType } from "@/types/GlobleType";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const ProductListofCategory = () => {
  const { id } = useLocalSearchParams();
  const [productList, setProductList] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const getProductList = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get<ProductType[]>(
          `https://api.escuelajs.co/api/v1/categories/${id}/products`
        );
        setProductList(res?.data);
      } catch (error) {
        setError("getting error during product fetch");
        setIsLoading(false);
      }
    };
    if (id != "") {
      getProductList();
    }
  }, [id]);
  if (productList.length == 0) {
    return (
      <View style={styles.pageContainer}>
        <Text>There is no porduct releted to this categroy try othre</Text>
        <CartBottom />
      </View>
    );
  }
  if (error != "") {
    return (
      <View style={styles.pageContainer}>
        <Text>{error}</Text>
        <CartBottom />
      </View>
    );
  }
  return (
    <View style={styles.pageContainer}>
      <View style={styles.container}>
        {productList.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            price={item.price}
            img={item.images[0]}
            title={item.title}
          />
        ))}
      </View>
      <CartBottom />
    </View>
  );
};

export default ProductListofCategory;

const styles = StyleSheet.create({
  pageContainer: { paddingHorizontal: 10, flex: 1 },
  titleText: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: 800,
  },
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  img: {
    borderRadius: 20,
  },
});
function useGetProductListbyCategoruyId({ ca }: { ca: any }) {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState<any[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (!ca) return;
    setIsLoading(true);
    setError(null);

    // Simulate API call
    fetch(`https://api.example.com/products?categoryId=${ca}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProductList(data.products || []);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [ca]);

  return { isLoading, productList, error };
}
