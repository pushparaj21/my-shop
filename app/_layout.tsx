import TimeToReach from "@/components/TimeToReach";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider style={styles.appContainer}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerLeft: () => <TimeToReach />,
            headerTitle: "",
          }}
        />

        <Stack.Screen
          name="productListByCategory/[id]"
          options={{
            headerLeft: () => <TimeToReach />,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="cart/index"
          options={{
            // headerLeft: () => <TimeToReach />,
            headerTitle: "Cart",
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 10,
  },
});
