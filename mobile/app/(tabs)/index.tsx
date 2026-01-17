import {View,Text,FlatList,StyleSheet,TextInput,Pressable,Image,Alert,} from "react-native";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { Colors } from "../../constants/colors";
import { useCart } from "../context/CartContext";

export default function Home() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ CART GLOBAL
  const { cart, addToCart } = useCart();

  // ✅ FETCH DARI APIDOG (AMAN)
  useEffect(() => {
    fetch("https://mock.apidog.com/m1/1178355-1172455-default/products")
      .then((res) => res.json())
      .then((json) => {
        // AMANKAN SEMUA BENTUK RESPONSE
        const list = Array.isArray(json)
          ? json
          : json.data || json.products || [];

        setProducts(list);
        setLoading(false);
      })
      .catch((err) => {
        console.log("API ERROR:", err);
        setProducts([]);
        setLoading(false);
      });
  }, []);

  // ✅ FILTER AMAN
  const filteredData = products.filter((item) =>
    item?.name?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading produk...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧵 TapisKu Lampung</Text>

      {/* INFO KERANJANG */}
      <Pressable onPress={() => router.push("/cart")}>
        <Text style={styles.cartInfo}>🛒 Keranjang: {cart.length}</Text>
      </Pressable>

      {/* SEARCH */}
      <TextInput
        placeholder="Cari tapis..."
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      {/* LIST PRODUK */}
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) =>
          item?.id?.toString() || index.toString()
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* DETAIL */}
            <Pressable
              onPress={() =>
                router.push({
                  pathname: "/product/[id]",
                  params: item,
                })
              }
            >
              {/* IMAGE AMAN */}
              <Image
                source={{
                  uri: item.image || "https://via.placeholder.com/400x300",
                }}
                style={styles.image}
              />

              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </Pressable>

            {/* TAMBAH KE CART */}
            <Pressable
              style={styles.addButton}
              onPress={() => {
                addToCart(item);
                Alert.alert("Berhasil", `${item.name} ditambahkan`);
              }}
            >
              <Text style={styles.addText}>Tambah ke Keranjang</Text>
            </Pressable>
          </View>
        )}
      />
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
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 6,
  },
  cartInfo: {
    color: Colors.gold,
    fontWeight: "bold",
    marginBottom: 12,
  },
  search: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.gold,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderLeftWidth: 6,
    borderLeftColor: Colors.gold,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 10,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  price: {
    marginTop: 4,
    color: Colors.primary,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  addText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});