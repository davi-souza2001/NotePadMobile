import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Entypo } from "@expo/vector-icons";

import styles from "../styles";

export default function Task(props) {

    function modalTask(){
        return(
            <TouchableOpacity style={styles.contentTaskDelete} onPress={props.deleteFun}>
                <Entypo name="trash" size={30} style={styles.taskDelete}/>
            </TouchableOpacity>
        )
    }

    return (
        <Swipeable renderRightActions={modalTask}>
            <View style={styles.task}>
                <Text style={{color: "#fff"}} key={props.keySelf}>{props.content}</Text>
            </View>
            <View style={{width: "100%", height: 3}}></View>
        </Swipeable>
    )
}
