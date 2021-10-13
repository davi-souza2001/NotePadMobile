import React, { useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, FlatList } from 'react-native';

import ModalTasks from '../components/ModalTasks';
import Task from '../components/Task';

import styles from "../styles";

export default function tasks() {
    const [showModalTask, setShowModalTask] = useState(false);

    const tasks = [{
        id: Math.random(),
        content: "Comprar livro",
    }, {
        id: Math.random(),
        content: "Compra livro 2"
    },]

    return (
        <SafeAreaView>
            <ModalTasks isVisible={showModalTask} onCancel={() => setShowModalTask(false)} />
            <View style={styles.contentGeral}>
                <View style={styles.contentTasks}>
                    <FlatList data={tasks} keyExtractor={item => `${item.id}`} 
                    renderItem={({item}) => <Task content={item.content}/>}/>
                </View>
                <TouchableOpacity style={styles.buttonModal} 
                onPress={() => setShowModalTask(true)}>
                    <Text style={{ color: "#fff" }}>Adicionar Nota</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}