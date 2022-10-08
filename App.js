import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SecretNetworkClient, Wallet } from "secretjs";

export default function App() {
  const [address, setAddress] = useState("");
  const [mnemonic, setMnemonic] = useState("");

  useEffect(() => {
    const wallet = new Wallet();
    setMnemonic(wallet.mnemonic);
    setAddress(wallet.address);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{address}</Text>
      <Text>{mnemonic}</Text>
      <Text>loaded</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
