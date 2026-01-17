import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { router } from "expo-router";
import { Colors } from "../constants/colors";
import { useCart } from "./context/CartContext";

export default function Checkout() {
  const { cart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = Number(item.price.replace(/[^0-9]/g, ""));
    return sum + price;
  }, 0);

  const handlePay = () => {
    Alert.alert(
      "Pembayaran Berhasil",
      "Terima kasih sudah berbelanja 🙏",
      [
        {
          text: "OK",
          onPress: () => {
            clearCart();
            router.replace("/(tabs)");
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧾 Checkout</Text>

      {cart.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      ))}

      <Text style={styles.total}>
        Total: Rp {total.toLocaleString("id-ID")}
      </Text>

      <Pressable style={styles.payButton} onPress={handlePay}>
        <Text style={styles.payText}>Bayar Sekarang</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  price: {
    marginTop: 4,
    color: Colors.primary,
    fontWeight: "bold",
  },
  total: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
  },
  payButton: {
    marginTop: 20,
    backgroundColor: Colors.primary,
    padding: 14,
    borderRadius: 10,
  },
  payText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});