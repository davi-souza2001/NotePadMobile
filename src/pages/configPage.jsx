import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import useAuth from "../data/hook/useAuth";

export default function configPage({ navigation }) {

    const { loginGoogle } = useAuth();

    return (
        <SafeAreaView>
            <Text>ConfigUser</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SuasNotas")}><Text>Clique</Text></TouchableOpacity>
            <TouchableOpacity onPress={loginGoogle}>
                <Text>Login com o goole</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}