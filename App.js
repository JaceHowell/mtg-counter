import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from "react-native";
import styles from "./styles";

export default function App() {
  const initCount = 20;

  let [countOne, setCountOne] = useState(initCount);

  const decrementCount = () => setCountOne(--countOne)
  const incrementCount = () => setCountOne(++countOne)

  return (
    <SafeAreaView style={styles.container}>
      <Text>MTG Counter</Text>
      <View style={{ position: "relative", flexDirection: "row", alignItems: "center", padding: 20, borderWidth: 1, borderColor: "green" }}>
        <TouchableHighlight onPress={decrementCount}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.counterText}>{countOne}</Text>
        <TouchableHighlight onPress={incrementCount}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableHighlight>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
