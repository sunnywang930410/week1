import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import albums from "./albums.json"


const AlbumsList = () => {
  return (
    <ScrollView>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albums[0].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albums[0].title}</Text>
            <Text>{albums[0].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri:
                albums[0].image
            }}
          />
        </View>

        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri:albums[1].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albums[1].title}</Text>
            <Text>{albums[1].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri:albums[1].image
            }}
          />
        </View>

        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albums[2].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albums[2].title}</Text>
            <Text>{albums[2].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri:albums[2].image
            }}
          />
        </View>

        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albums[3].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albums[3].title}</Text>
            <Text>{albums[3].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri:albums[3].image
            }}
          />
        </View>

        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albums[4].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albums[4].title}</Text>
            <Text>{albums[4].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri:albums[4].image
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10
  },
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 300,
    width: null
  }
});

export default AlbumsList;