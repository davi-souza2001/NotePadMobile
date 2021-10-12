import React, { useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

import ModalTasks from '../components/ModalTasks';

import styles from "../styles";

export default function tasks() {
    const [showModalTask, setShowModalTask] = useState(false);

    return (
        <SafeAreaView>
            <ModalTasks isVisible={showModalTask} onCancel={() => setShowModalTask(false)}/>
            <TouchableOpacity onPress={() => setShowModalTask(true)}><Text>fsdfsdf</Text></TouchableOpacity>
        </SafeAreaView>
    )
}