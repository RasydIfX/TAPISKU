import { View, Text, FlatList, StyleSheet, Pressable, Alert } from "react-native";
import { Colors } from "../../constants/colors";
import { useCart } from "../context/CartContext";
import { router } from "expo-router";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = Number(item.price.replace(/\D/g, ""));
    return sum + price;
  }, 0);

  // ✅ POST ORDER KE APIDOG
  const submitOrder = async () => {
    const orderData = {
      date: new Date().toISOString().split("T")[0],
      total: total,
      items: cart.map((item) => ({
        name: item.name,
        price: Number(item.price.replace(/\D/g, "")),
      })),
    };

    try {
      const res = await fetch(
        "https://mock.apidog.com/m2/1177348-1171401-default/26849672",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      const data = await res.json();
      console.log("ORDER SUCCESS:", data);

      Alert.alert("Berhasil", "Order berhasil dibuat");
      clearCart();
      router.push("/history");
    } catch (error) {
      console.log("ORDER ERROR:", error);
      Alert.alert("Error", "Gagal checkout");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Keranjang Belanja</Text>

      {cart.length === 0 ? (
        <Text>Keranjang masih kosong</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>

                <Pressable onPress={() => removeFromCart(item.id)}>
                  <Text style={styles.remove}>Hapus</Text>
                </Pressable>
              </View>
            )}
          />

          <Text style={styles.total}>
            Total: Rp {total.toLocaleString("id-ID")}
          </Text>

          {/* ✅ CHECKOUT LANGSUNG POST */}
          <Pressable style={styles.checkout} onPress={submitOrder}>
            <Text style={styles.checkoutText}>Checkout</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  price: {
    color: Colors.primary,
    marginVertical: 4,
  },
  remove: {
    color: "red",
    marginTop: 6,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 12,
    color: Colors.gold,
  },
  checkout: {
    marginTop: 16,
    backgroundColor: Colors.primary,
    padding: 14,
    borderRadius: 10,
  },
  checkoutText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});