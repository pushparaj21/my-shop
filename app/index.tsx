import CategoryCard from "@/components/CategoryCard";
import useGetProductCategory from "@/hooks/useGetProductCategory";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const index = () => {
  const { isLoading, category, error } = useGetProductCategory();

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.titleText}>Shop by category</Text>
      <View style={styles.container}>
        {category.map((item) => (
          <CategoryCard
            name={item.name}
            img={item.image}
            id={item.id}
            key={item.id}
          />
        ))}
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  pageContainer: { paddingHorizontal: 10, flex: 1 },
  titleText: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: 800,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  img: {
    borderRadius: 20,
  },
});
