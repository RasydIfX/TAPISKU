import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Colors } from "../../constants/colors";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Profil Saya</Text>

      <Text style={styles.text}>Nama: Pengguna TapisKu</Text>

      <Pressable
        style={styles.logout}
        onPress={() => router.replace("/login")}
      >
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
  text: {
    fontSize: 16,
    marginBottom: 24,
  },
  logout: {
    backgroundColor: "red",
    padding: 14,
    borderRadius: 10,
  },
  logoutText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});