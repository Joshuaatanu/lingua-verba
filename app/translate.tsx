import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import LanguageSelector from "@/components/LanguageSelector";
import CustomButton from "@/components/CustomButton";

export default function TranslatePage() {
  const [fontsLoaded] = useFonts({
    unbounded: require("@/assets/fonts/Unbounded-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [languages, setLanguages] = useState({
    source: "English",
    target: "Igala",
  });

  const handleTranslate = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api-ex6d.onrender.com/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "english-text": inputText }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Translation failed");
      }

      setTranslatedText(data.translated_text);
    } catch (error) {
      console.error("Translation error:", error);
      setTranslatedText("Translation error - please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <LanguageSelector
        languages={languages}
        onSwap={() =>
          setLanguages((prev) => ({
            source: prev.target,
            target: prev.source,
          }))
        }
      />

      <TextInput
        style={styles.input}
        placeholder={`Enter ${languages.source} text...`}
        placeholderTextColor="#666"
        multiline
        value={inputText}
        onChangeText={setInputText}
        maxLength={500}
      />

      <CustomButton
        title={loading ? "Translating..." : "Translate"}
        onPress={handleTranslate}
        disabled={!inputText.trim() || loading}
      />

      {translatedText && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>
            {languages.target} Translation:
          </Text>
          <Text style={styles.resultText}>{translatedText}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  contentContainer: {
    padding: 20,
    gap: 20,
  },
  input: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    fontSize: 16,
    borderRadius: 12,
    padding: 16,
    minHeight: 150,
    textAlignVertical: "top",
  },
  resultContainer: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 16,
  },
  resultLabel: {
    color: "#31AA45",
    fontFamily: "unbounded",
    marginBottom: 8,
  },
  resultText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 24,
  },
});
