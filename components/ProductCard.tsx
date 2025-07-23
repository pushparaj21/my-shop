import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const ProductCard = ({
  img,
  id,
  title,
  price,
}: {
  img: string;
  id: string;
  title: string;
  price: number;
}) => {
  return (
    <Link style={styles.card} href={`/productListByCategory/${id}`}>
      <Image
        source={{ uri: img }}
        width={200}
        height={200}
        style={styles.img}
      />
      <View style={{ paddingBottom: 10 }}>
        <Text style={[styles.cardText]} numberOfLines={1}>
          {title}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.cardText} numberOfLines={1}>
            MRP :{price}
          </Text>
          <Pressable
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: "green",
              borderRadius: 5,
            }}
          >
            <Text>Add</Text>
          </Pressable>
        </View>
      </View>
    </Link>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  img: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  card: {
    marginHorizontal: 10,
    flexDirection: "column",
    maxWidth: "42%",
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
  },
  cardText: {
    fontWeight: 600,
    paddingTop: 8,
    paddingLeft: 8,
    // width: "100%",
    // paddingBottom: 12,
  },
});
