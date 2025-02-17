import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";

export default function Index() {
  const [fontsLoaded] = useFonts({
    unbounded: require("@/assets/fonts/Unbounded-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={require("@/assets/images/welcome.png")} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Lingua Verba</Text>
        <Text style={styles.subtitle}>
          Translate any conversation with ease
        </Text>
        <Text style={styles.description}>
          from whispers to <Text style={{ color: "#31AA45" }}>global</Text>
          conversations, Lingua verba speaks{" "}
          <Text style={{ color: "#31AA45" }}>Igala</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
  title: {
    fontFamily: "unbounded",
    fontSize: 40,
    textAlign: "center",
    color: "#fff",
  },
  subtitle: {
    fontFamily: "unbounded",
    fontSize: 20,
    marginTop: 15,
    textAlign: "left",
    color: "#fff",
  },
  content: {
    paddingHorizontal: 20,
  },
  description: {
    fontFamily: "unbounded",
    fontSize: 15,
    textAlign: "left",
    color: "#fff",
  },
  button: {
    backgroundColor: "#31AA45",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontFamily: "unbounded",
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
  },
});
