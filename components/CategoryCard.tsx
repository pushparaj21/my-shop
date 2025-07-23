import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text } from "react-native";

type CategoryCardPorps = {
  img: string;
  name: string;
  id: number;
};
const CategoryCard = ({ name, id, img }: CategoryCardPorps) => {
  return (
    <Link style={styles.card} href={`/productListByCategory/${id}`}>
      <Image
        source={{ uri: img }}
        width={100}
        height={100}
        style={styles.img}
      />
      <Text style={styles.cardText} numberOfLines={1}>
        {name}
      </Text>
    </Link>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  img: {
    borderRadius: 20,
  },
  card: {
    marginHorizontal: 10,
    width: 100,
  },
  cardText: {
    fontWeight: 600,
    paddingTop: 8,
    paddingBottom: 12,
  },
});
