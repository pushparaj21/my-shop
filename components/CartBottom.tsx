import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CartBottom = () => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 40,
        left: 0,
        right: 0,
      }}
    >
      <View
        style={{
          marginHorizontal: 30,
          backgroundColor: "rgb(12,131,31)",
          borderRadius: 10,
          paddingHorizontal: 20,
          paddingVertical: 10,
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}
        >
          <AntDesign name="shoppingcart" size={30} color="#fff" />
          <View>
            <Text style={{ color: "white" }}>1 item</Text>
            <Text style={{ color: "white", fontSize: 18 }}>₹ {29}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href={"/cart"}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 18, fontWeight: 500 }}>
                View Cart{" "}
              </Text>
              <AntDesign name="caretright" size={18} color="white" />
            </View>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default CartBottom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccc",
    borderRadius: 20,
  },
});
