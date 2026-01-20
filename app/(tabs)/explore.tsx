import { View, Text, StyleSheet } from "react-native";

export default function TabTwo() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore Tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  text: {
    fontSize: 20,
    color: "#333333",
  },
});