import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import { Colors } from "../../constants/colors";
import { useCart } from "../context/CartContext";

export default function Profile() {
  const { cart, clearCart,  } = useCart();

  // 👤 nama user (dummy, bisa diedit)
  const [username, setUsername] = useState("Pengguna TapisKu");

  // ambil inisial untuk avatar
  const initials = username
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Apakah kamu yakin ingin logout?",
      [
        { text: "Batal", style: "cancel" },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => {
            clearCart(); // bersihkan cart
            router.replace("/login");
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Profil</Text>

      {/* AVATAR */}
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>

      {/* NAMA */}
      <View style={styles.card}>
        <Text style={styles.label}>Nama</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
      </View>

      {/* INFO CART */}
      <View style={styles.card}>
        <Text style={styles.label}>Item di Keranjang</Text>
        <Text style={styles.value}>{cart.length} produk</Text>
      </View>

      {/* LOGOUT */}
      <Pressable style={styles.logout} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 16,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
  },
  avatarText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: "#666",
    marginBottom: 6,
  },
  value: {
    fontSize: 18,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.gold,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },

  logout: {
    marginTop: 30,
    backgroundColor: "red",
    padding: 14,
    borderRadius: 10,
  },
  logoutText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});