import {View,  Text,  FlatList,  StyleSheet,  TextInput,  Pressable,  Image,} from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { Colors } from "../../constants/colors";

const DATA = [
  {
    id: "1",
    name: "Tapis Jung Sarat",
    price: "Rp 2.500.000",
    image: require("../../assets/images/kain jung.jpg"),
  },
  {
    id: "2",
    name: "Tapis Raja Medal",
    price: "Rp 3.000.000",
    image: require("../../assets/images/kain raja medal.jpg"),
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredData = DATA.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧵 TapisKu Lampung</Text>

      {/* SEARCH INPUT */}
      <TextInput
        placeholder="Cari tapis..."
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      {/* LIST PRODUK */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/product/[id]",
                params: item,
              })
            }
          >
            <View style={styles.card}>
              {/* GAMBAR PRODUK */}
              <Image source={item.image} style={styles.image} />

              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </Pressable>
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
});