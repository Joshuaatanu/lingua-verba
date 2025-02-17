import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

export default function CustomButton({ title, onPress, disabled }) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      {typeof title === "string" ? (
        <Text style={styles.text}>{title}</Text>
      ) : (
        <ActivityIndicator color="#fff" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#31AA45",
    borderRadius: 12,
    padding: 18,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontFamily: "unbounded",
    fontSize: 16,
  },
  disabled: {
    opacity: 0.6,
  },
});
