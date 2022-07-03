// if (__DEV__) {
//   import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));

import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import { CarouselWithZoom } from "./src/CarouselWithZoom/index";

const images = [
  {
    url: "https://images.unsplash.com/photo-1586920740199-47ce35183cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4031&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1585314614250-d213876625e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2728&q=80",
  },
];

/* 
  ##props: 
  images: {url: string}[],
  width: ?number, // the width of the carousel
  height: number, // the height of the carousel

*/

import Test from "./src/Test";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CarouselWithZoom images={images} height={200} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    // backgroundColor: "green",
    // borderWidth: 2,
    // borderColor: "red",
  },
});
