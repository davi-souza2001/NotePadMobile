import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, TextInput } from 'react-native';
import useAuth from "../data/hook/useAuth";

export default function configPage({ navigation }) {

    const { createUserWithEmailAndPassword, loginWithEmailAndPassword, user } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function createWithCredencials() {
        try {
            await createUserWithEmailAndPassword(email, password );
            
        } catch(e) {
            console.warn(e);
        }
    
    }

    async function loginWithCredencials() {
        try {
            await loginWithEmailAndPassword(email, password );
           
        } catch(e) {
            console.warn(e);
        }
    
    }

    console.log(user)

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => navigation.navigate("SuasNotas")}>
                <Text>Clique</Text>
            </TouchableOpacity>
            <TextInput placeholder="Informe seu email" 
            value={email} onChangeText={value => setEmail(value)}/>

            <TextInput placeholder="Informe sua senha" 
            value={password} onChangeText={value => setPassword(value)}/>

            <Text onPress={createWithCredencials}>Criar</Text>
            <Text onPress={loginWithCredencials}>Logar</Text>

            <Text>{user?.email}</Text>
                
        </SafeAreaView>
    )
}