import { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  SafeAreaView,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const scaleAnim = useRef(new Animated.Value(0)).current;

  const handleLogin = async () => {
    if (!email || !password) return;

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);

      setSuccess(true);

      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        router.replace("/(tabs)");
      }, 1200);
    } catch (error) {
      alert("Invalid admin credentials");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <SafeAreaView style={styles.successContainer}>
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <Ionicons name="checkmark-circle" size={100} color="#16A34A" />
        </Animated.View>
        <Text style={styles.successText}>Login Successful</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>R</Text>
        <Text style={styles.brand}>Roomio</Text>
        <Text style={styles.role}>ADMIN PANEL</Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputWrapper}>
          <Ionicons name="mail-outline" size={20} color="#2563EB" />
          <TextInput
            placeholder="admin@roomio.com"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrapper}>
          <Ionicons name="lock-closed-outline" size={20} color="#2563EB" />
          <TextInput
            placeholder="Enter your password"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#2563EB"
            />
          </Pressable>
        </View>

        <Pressable
          style={[styles.button, loading && { opacity: 0.6 }]}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Logging in..." : "Login to Dashboard"}
          </Text>
        </Pressable>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.status}>
          System Status: <Text style={styles.online}>● Operational</Text>
        </Text>
        <Text style={styles.version}>VERSION 2.4.0 (BUILD 902)</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  logo: {
    fontSize: 42,
    fontWeight: "800",
    color: "#2563EB",
  },
  brand: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111827",
  },
  role: {
    fontSize: 14,
    color: "#2563EB",
    marginTop: 4,
    letterSpacing: 1,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },
  label: {
    fontSize: 14,
    color: "#111827",
    marginBottom: 6,
    marginTop: 12,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 48,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#2563EB",
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    alignItems: "center",
    marginTop: 24,
  },
  status: {
    fontSize: 12,
    color: "#6B7280",
  },
  online: {
    color: "#16A34A",
    fontWeight: "600",
  },
  version: {
    fontSize: 11,
    color: "#9CA3AF",
    marginTop: 6,
  },
});
