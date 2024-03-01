import React from "react";
import { Text, SafeAreaView, StatusBar } from "react-native";
// 匯入Header目錄
import Albumlist from "./src/component/AlbumList/AlbumList.js";
import Header from "./src/component/Header";

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Header />
      <Albumlist />
    </SafeAreaView>

  );
};

export default App;