import { StyleSheet, Text, View, FlatList } from 'react-native';
import AlbumDetail from "./AlbumDetail";
import Popular from "../../../json/Popular.json";
import Newest from "../../../json/Newest.json";

const AlbumList = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.sectionHeader}>{Popular.title}</Text>
      <FlatList
        horizontal={true}
        data={Popular.data}
        renderItem={({ item }) => <AlbumDetail book={item} navigation={navigation} />}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.title}
      />
      <Text style={styles.sectionHeader}>{Newest.title}</Text>
      <FlatList
        horizontal={true}
        data={Newest.data}
        renderItem={({ item }) => <AlbumDetail book={item} navigation={navigation} />}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.title}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  sectionHeader: {
    fontWeight: '600',
    fontSize: 24,
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 10,
    textTransform: 'uppercase',
  }
});

export default AlbumList;
