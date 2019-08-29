import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {

    return (<View>
        <ImageDetail 
        title = "Forest" 
        imgsrc = {require("../../assets/forest.jpg")
        }/>
        <ImageDetail 
        title = "Beach"
        imgsrc = {require("../../assets/beach.jpg")}
        />
        <ImageDetail 
        title = "Mountain"
        imgsrc = {require("../../assets/mountain.jpg")}
        />
    </View>);
};

const styles = StyleSheet.create({});

export default ImageScreen;