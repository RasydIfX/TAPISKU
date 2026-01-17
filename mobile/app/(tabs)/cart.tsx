import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../constants/colors";
import { useCart } from "../context/CartContext";
import { router } from "expo-router";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = Number(item.price.replace(/\D/g, ""));
    return sum + price;
  }, 0);

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

          {/* CHECKOUT */}
          <Pressable
            style={styles.checkout}
            onPress={() => router.push("/checkout")}
          >
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