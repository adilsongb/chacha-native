import { Button, StyledView } from "@adilsongb/chacha-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <StatusBar style="dark" />

      <StyledView gap={10}>
        <Button title="Botão 1" onPress={() => console.log("Botão 1")} />
        <Button
          title="Botão 2"
          disabled
          onPress={() => console.log("Botão 2")}
        />
        <Button
          title="Botão 3"
          loading
          onPress={() => console.log("Botão 3")}
        />

        <Button
          title="Botão 4"
          variant="outline"
          onPress={() => console.log("Botão 4")}
        />
      </StyledView>
    </SafeAreaView>
  );
}
