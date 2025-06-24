import { Button, Typograph } from "@adilsongb/chacha-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <StatusBar style="dark" />
      <Button title="Botão" onPress={() => {}} />
      <Typograph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        sdwqdqw sdwfwfwfiwifqifiq Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam, quos. sdwqdqw sdwfwfwfiwifqifiq Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Quisquam, quos. sdwqdqw
        sdwfwfwfiwifqifiq Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam, quos. sdwqdqw sdwfwfwfiwifqifiq Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Quisquam, quos. sdwqdqw
        sdwfwfwfiwifqifiq
      </Typograph>
    </SafeAreaView>
  );
}
