import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Entypo } from "@expo/vector-icons";

import styles from "../styles";

export default function Task() {

    function deleteTask(){
        console.warn("deletada");
    }

    function modalTask(){
        return(
            <TouchableOpacity style={styles.contentTaskDelete} onPress={deleteTask}>
                <Entypo name="trash" size={40} style={styles.taskDelete}/>
            </TouchableOpacity>
        )
    }

    return (
        <Swipeable renderRightActions={modalTask}>
            <View style={styles.task}>
                <Text style={{color: "#fff"}}>Trocar cartoes da academia, spotify....</Text>
            </View>
        </Swipeable>
    )
}
