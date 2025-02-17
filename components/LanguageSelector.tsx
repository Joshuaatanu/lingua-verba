import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LanguageSelector({ languages, onSwap }) {
  return (
    <View style={styles.container}>
      <Text style={styles.languageText}>{languages.source}</Text>
      <TouchableOpacity onPress={onSwap} style={styles.swapButton}>
        <Ionicons name="swap-vertical" size={24} color="#31AA45" />
      </TouchableOpacity>
      <Text style={styles.languageText}>{languages.target}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginVertical: 10,
  },
  languageText: {
    color: "#fff",
    fontFamily: "unbounded",
    fontSize: 18,
  },
  swapButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#1a1a1a",
  },
});
