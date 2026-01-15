import { View, Text, FlatList, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const DATA = [
  { id: "1", name: "Tapis Jung Sarat", price: "Rp 2.500.000" },
  { id: "2", name: "Tapis Raja Medal", price: "Rp 3.000.000" },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧵 TapisKu Lampung</Text>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
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
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  price: {
    marginTop: 4,
    color: Colors.primary,
    fontWeight: "bold",
  },
});
