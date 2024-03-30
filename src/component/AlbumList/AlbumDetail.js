import React from "react";
import { StyleSheet, Text, View, Image, Pressable} from "react-native";


const AlbumDetail = ({navigation, book}) => {
   return (
      <View>
        <Pressable onPress={()=>navigation.navigate('AlbumDetail',book)}>
          <Image source={{uri:book.image}} key={book.title}/>
          <Text>{book.title}</Text>
          <Text>{book.author}</Text>
        </Pressable>
      </View>
  )};


export default AlbumDetail;
