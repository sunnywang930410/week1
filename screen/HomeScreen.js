import React from 'react';
import { Pressable, View } from 'react-native';
import { Text } from "@gluestack-ui/themed";
import AlbumList from "../src/component/AlbumList/AlbumList"

const HomeScreen=({navigation})=>{
   <View style={styles.containerStyle}>
        <View>
        <Pressable onPress={()=>navigation.toggleDrawer()}>
           <Image source={uri="https://raw.githubusercontent.com/sunnywang930410/starsimg/main/drawer.png"}/>
        </Pressable>
        <Pressable>
           <Image source={uri="https://raw.githubusercontent.com/sunnywang930410/starsimg/main/Search.png"}/>
        </Pressable>
        </View>
        <View>
            <ScrollView>
                <AlbumList/>
            </ScrollView>
        </View>   
   </View>
}

const styles=StyleSheet.create({
    containerStyle:{
      backgroundColor:'#fff',
      marginBottom:56
  }
})

export default HomeScreen;