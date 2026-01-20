import { Stack } from "expo-router";
import { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import CustomSplash from "../components/CustomSplash";

// STOP native splash from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <CustomSplash onFinish={() => setShowSplash(false)} />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
