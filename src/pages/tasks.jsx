import React, { useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import ModalTasks from '../components/ModalTasks';
import Task from '../components/Task';

import styles from "../styles";

export default function tasks() {
    const [showModalTask, setShowModalTask] = useState(false);

    return (
        <SafeAreaView>
            <ModalTasks isVisible={showModalTask} onCancel={() => setShowModalTask(false)}/>
            <View style={styles.contentGeral}>
                <Task/>
            </View>
            <TouchableOpacity style={styles.buttonModal} onPress={() => setShowModalTask(true)}>
                <Text style={{color: "#fff"}}>Adicionar Nota</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}