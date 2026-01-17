import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { login as loginApi } from "../src/services/auth";
import { useAuth } from "./context/AuthContext";
import { router } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const res = await loginApi(email, password);
      await login(res);
      router.replace("/(tabs)");
    } catch (e) {
      alert("Login gagal");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      {/* ✅ LINK KE REGISTER */}
      <Pressable
        style={styles.registerWrapper}
        onPress={() => router.push("/register" as any)}

      >
        <Text style={styles.registerText}>
          Belum punya akun? <Text style={styles.registerBold}>Daftar</Text>
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#6b4eff",
    padding: 14,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  /* ✅ REGISTER */
  registerWrapper: {
    marginTop: 16,
  },
  registerText: {
    textAlign: "center",
    color: "#444",
  },
  registerBold: {
    fontWeight: "bold",
    color: "#6b4eff",
  },
});