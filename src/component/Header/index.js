import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./style";

const Header = () => {
    return (
        <View style={styles.headerStyle}>
          <Text style={styles.textStyle}>Albums</Text>
        </View>
    );
  };
  // export可以匯出多個
  const a=1;
  const b=2;
  export {a,b};
   // export default只能匯出一個
  export default Header;