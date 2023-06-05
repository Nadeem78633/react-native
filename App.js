import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import TodoList from "./src/components/TodoList";
import AddTodo from "./src/components/AddTodo";
import DeleteAll from "./src/components/DeleteAll";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useRef } from "react";

// Card
import { Card, Text, Avatar } from "@rneui/themed";
import { ScrollView } from "react-native-web";

export default function App() {

  const scrollViewRef = useRef();

const scrollToTop = () => {
  scrollViewRef.current.scrollToPosition(0, 0, true);
};
  return (
    <KeyboardAwareScrollView ref={scrollViewRef}>

    <View style={styles.container}>
      <Provider store={store}>
        <Card containerStyle={{ borderWidth: 0 }}>
          <Text style={{ textAlign: "center", marginTop: 90 }}>
            Task Details
          </Text>
          <Text style={{ color: "#82869e", marginTop: 40 }}>Task Title </Text>
          <Text h5 style={{ fontWeight: "bold", marginTop: 10 }}>
            NFT Web App Prototype
          </Text>
          <Text style={{ color: "#82869e", marginTop: 20 }}>Description</Text>
          <Text style={{ width: 300, marginTop: 10 }}>
            Last year was a fantastic year for NFTs, with the market reaching a
            $40 billion valuation for the first time. In addition more than $10
            billion worth of NFTs are now sold every week - with NFT..
          </Text>
          <DeleteAll />
          <TodoList />
          <AddTodo scroll={scrollToTop} />
        </Card>
      </Provider>

      <StatusBar style="auto" />
    </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
  },
  text1: {
    color: "blue",
  },
});
