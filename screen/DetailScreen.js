import { ScrollView } from "@gluestack-ui/themed";
import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const DetailScreen = ({ navigation, route }) => {
    <View>
        <View>
            <Pressable onPress={() => navigation.goBack()}>
                <Image source={uri = "https://raw.githubusercontent.com/sunnywang930410/starsimg/main/goback.png"} />
            </Pressable>
            <Pressable>
                <Image source={uri = "https://raw.githubusercontent.com/sunnywang930410/starsimg/main/bookmarker.png"} />
            </Pressable>
            <ScrollView>
                <View>
                    <Image source={uri=route.params.image} key={route.params.title}/>
                    <Text>{route.params.title}</Text>
                    <Text>{route.params.author}</Text>
                    <View>
                        <Image source={uri=route.params.star}key={route.params.title}/>
                        <Text>{route.params.starnumber}</Text>
                    </View>
                    <Text>{route.params.description}</Text>
                    <Pressable>
                        <Text>Buy Now for $46.99</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    </View>
}

export default DetailScreen;