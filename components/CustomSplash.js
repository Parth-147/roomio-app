import { View, Text, StyleSheet, Animated } from "react-native";
import { useEffect, useRef } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function CustomSplash({ onFinish }) {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(async () => {
      await SplashScreen.hideAsync();
      onFinish();
    });
  }, []);

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Roomio</Text>
      <Text style={styles.tagline}>Elevated Service</Text>

      <View style={styles.barBackground}>
        <Animated.View
          style={[styles.barFill, { width: progressWidth }]}
        />
      </View>

      <Text style={styles.loadingText}>Loading your experience</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontSize: 42,
    fontWeight: "700",
    color: "#2563EB",
  },
  tagline: {
    marginTop: 6,
    fontSize: 14,
    color: "#000",
  },
  barBackground: {
    marginTop: 40,
    width: "70%",
    height: 4,
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    backgroundColor: "#2563EB",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 12,
    color: "#9CA3AF",
  },
});
