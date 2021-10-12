import React, { useState } from 'react';
import { Modal, View, TouchableWithoutFeedback, Text, TouchableOpacity, TextInput } from 'react-native';

import styles from "../styles";

export default function ModalTasks(props) {
    const [test, setTest] = useState("");
    return (
        <Modal transparent={true} visible={props.isVisible} onRequestClose={props.onCancel} animationType="slide">
            <TouchableWithoutFeedback onPress={props.onCancel}>
                <View style={styles.modaloverlay}></View>
            </TouchableWithoutFeedback>
            <View style={styles.container}>
                <Text style={styles.header}>Nova Tarefa</Text>
                <TextInput style={styles.input} placeholder="Informe sua nota" value={test} onChangeText={value => setTest(value)}/>
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={props.onCancel}>
                        <Text style={styles.button}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.button}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableWithoutFeedback onPress={props.onCancel}>
                <View style={styles.modaloverlay}></View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}
