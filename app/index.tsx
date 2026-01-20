import { View, Text, StyleSheet, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { useRouter } from "expo-router";

export default function Splash() {
  const router = useRouter();
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 2200,
      useNativeDriver: false,
    }).start(() => {
      router.replace("/home"); // 👈 Go to Home
    });
  }, []);

  const widthInterpolated = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Roomio</Text>
      <Text style={styles.tagline}>Service Management</Text>

      <View style={styles.loader}>
        <Animated.View
          style={[
            styles.loaderFill,
            { width: widthInterpolated },
          ]}
        />
      </View>

      <Text style={styles.loading}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 38,
    fontWeight: "700",
    color: "#1F2937",
  },
  tagline: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 60,
  },
  loader: {
    width: "70%",
    height: 6,
    backgroundColor: "#E5E7EB",
    borderRadius: 100,
    overflow: "hidden",
  },
  loaderFill: {
    height: "100%",
    backgroundColor: "#4A90D9",
  },
  loading: {
    marginTop: 18,
    fontSize: 14,
    color: "#9CA3AF",
  },
});
