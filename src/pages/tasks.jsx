import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, FlatList } from 'react-native';
import firebase from "../firebase/config";

import ModalTasks from '../components/ModalTasks';
import Task from '../components/Task';

import styles from "../styles";

export default function tasks() {
    const [showModalTask, setShowModalTask] = useState(false);
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        const todoRef = firebase.database().ref("Todo");
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const todoList = [];
            for (let id in todos) {
                todoList.push({ id, ...todos[id] });
            }
            setTodoList(todoList);
        })
    }, []);

    return (
        <SafeAreaView>
            <ModalTasks isVisible={showModalTask} onCancel={() => setShowModalTask(false)} />
            <View style={styles.contentGeral}>
                <View style={styles.contentTasks}>
                    <FlatList data={todoList} keyExtractor={item => `${item.note}`}
                        renderItem={({ item }) => <Task content={item.note} />} />
                </View>
                <TouchableOpacity style={styles.buttonModal}
                    onPress={() => setShowModalTask(true)}>
                    <Text style={{ color: "#fff" }}>Adicionar Nota</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}