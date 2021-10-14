import React, { useEffect, useState } from "react";
import { Modal, View, TouchableWithoutFeedback, Text, TouchableOpacity, TextInput } from 'react-native';
import firebase from "../firebase/config";
import useAuth from "../data/hook/useAuth";

import styles from "../styles";

export default function ModalTasks(props) {
    const [note, setNote] = useState("");
    const [date, setDate] = useState("");
    const { user } = useAuth();
    const email = user?.email;

    function sub() {
        const todoRef = firebase.database().ref("Todo");
        /* const email = user.email; */
        const list = {
            note,
            date,
            email
        }
        todoRef.push(list);
    }
    
    return (
        <Modal transparent={true} visible={props.isVisible} onRequestClose={props.onCancel} animationType="slide">
            <TouchableWithoutFeedback onPress={props.onCancel}>
                <View style={styles.modaloverlay}></View>
            </TouchableWithoutFeedback>
            <View style={styles.container}>
                <Text style={styles.header}>Nova Tarefa</Text>
                <TextInput style={styles.input} placeholder="Informe sua nota" value={note} onChangeText={value => setNote(value)}/>
                <TextInput style={styles.input} placeholder="Informe a data para esta nota" value={date} onChangeText={value => setDate(value)}/>
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={props.onCancel}>
                        <Text style={styles.button}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.button} onPress={sub}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableWithoutFeedback onPress={props.onCancel}>
                <View style={styles.modaloverlay}></View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}
