import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Colors } from "../../constants/colors";

export default function ProductDetail() {
  const { id, name, price } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.price}>{price}</Text>

      <Text style={styles.desc}>
        Tapis Lampung adalah kain tradisional khas Lampung
        yang dibuat dengan benang emas.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary,
  },
  price: {
    fontSize: 18,
    color: Colors.gold,
    marginVertical: 8,
  },
  desc: {
    fontSize: 14,
    color: Colors.text,
  },
});
