import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function LoginSuccess() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/tabs");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/success.json")}
        autoPlay
        loop={false}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.text}>Logged in successfully</Text>
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
    fontSize: 18,
    marginTop: 16,
    color: "#333",
  },
});