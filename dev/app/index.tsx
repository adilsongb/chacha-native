import { Text, View } from "react-native";
import { Button, Typograph } from "@adilsongb/chacha-native";

export default function StorybookScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typograph variant="h1">Testando o texto</Typograph>
      <Button title="teste" onPress={() =>{}} />
    </View>
  );
}
