import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import { Colors } from "../constants/colors";

export default function Login() {
  const [username, setUsername] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧵 TapisKu</Text>
      <Text style={styles.subtitle}>Login</Text>

      <TextInput
        placeholder="Nama pengguna"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      <Pressable
        style={styles.button}
        onPress={() => {
          if (!username) return;
          router.replace("/(tabs)");
        }}
      >
        <Text style={styles.buttonText}>Masuk</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.primary,
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.gold,
    marginBottom: 16,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 14,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});