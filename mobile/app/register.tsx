import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { register } from "../src/services/auth";
import { useAuth } from "./context/AuthContext";
import { router } from "expo-router";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleRegister = async () => {
    try {
      const res = await register({ name, email, password });
      await login(res);
      router.replace("/(tabs)");
    } catch {
      alert("Register gagal");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar</Text>

      <TextInput placeholder="Nama" onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Email" onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} style={styles.input} />

      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Daftar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  input: { borderWidth: 1, marginBottom: 12, padding: 10, borderRadius: 8 },
  button: { backgroundColor: "#8B0000", padding: 14, borderRadius: 8 },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});