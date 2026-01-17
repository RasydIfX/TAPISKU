import { View, Text, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { Colors } from "../../constants/colors";

export default function History() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://mock.apidog.com/m2/1177348-1171401-default/26849317?apidogApiId=26849317")
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📜 Riwayat Pembelian</Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>ID: {item.id}</Text>
            <Text>Tanggal: {item.date}</Text>
            <Text>Total: Rp {item.total.toLocaleString("id-ID")}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: Colors.background },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  card: { backgroundColor: "#fff", padding: 12, marginBottom: 10, borderRadius: 8 }
});