import React from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

import styles from "../styles";

export default function tasks() {
    return (
        <SafeAreaView>
            <Text>Testando</Text>
            {[1,2,3,4,5].map((item) => {
                return (
                    <TouchableOpacity key={item}>
                        <Text>
                            Podcafdsst: 0{item}
                        </Text>
                    </TouchableOpacity>
                )
            })}
        </SafeAreaView>
    )
}