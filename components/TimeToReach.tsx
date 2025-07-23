import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TimeToReach = () => {
  return (
    <View>
      <Text style={styles.text}>Delivery in 8 minutes</Text>
    </View>
  );
};

export default TimeToReach;
const styles = StyleSheet.create({
  text: { color: "#000", fontSize: 18, fontWeight: 600 },
});
