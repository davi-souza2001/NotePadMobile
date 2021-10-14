import React, { useEffect, useState } from "react";
import { SafeAreaView, 
    Text, 
    TouchableOpacity, 
    View
 } from 'react-native';
import firebase from "../firebase/config";
import useAuth from "../data/hook/useAuth";

import ModalTasks from '../components/ModalTasks';
import Task from '../components/Task';

import styles from "../styles";

export default function tasks() {
    const [showModalTask, setShowModalTask] = useState(false);
    const [todoList, setTodoList] = useState([]);
    const { user } = useAuth();

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

    function renderNotes() {
        return todoList?.map((todo, index) => {
            if(todo.email == user?.email) {
                return(
                    <Task content={todo?.note} deleteFun={() => firebase.database().ref("Todo").child(todo.id).remove()} key={todo?.index}/>
                )
            }
        })
    }

    return (
        <SafeAreaView>
            <ModalTasks isVisible={showModalTask} onCancel={() => setShowModalTask(false)} />
            <View style={styles.contentGeral}>
                <View style={styles.contentTasks}>
                    {user ? renderNotes() : <Text>Faça seu login</Text>}
                </View>
                <TouchableOpacity style={styles.buttonModal}
                    onPress={() => setShowModalTask(true)}>
                    <Text style={{ color: "#fff" }}>Adicionar Nota</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}