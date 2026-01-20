import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: any;

          switch (route.name) {
            case "index":
              iconName = "home";
              break;
            case "explore":
              iconName = "compass";
              break;
            case "login":
              iconName = "log-in";
              break;
            default:
              iconName = "ellipse";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#4A90D9",
        tabBarInactiveTintColor: "#999999",
      })}
    />
  );
}