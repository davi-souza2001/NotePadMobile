import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, TextInput, Button, View } from 'react-native';
import useAuth from "../data/hook/useAuth";

import styles from "../styles";

export default function configPage({ navigation }) {
    // Mandar para outra rota
    /* navigation.navigate("SuasNotas") */

    const { createUserWithEmailAndPassword,
        loginWithEmailAndPassword,
        user,
        logout } = useAuth();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

 // Part of create user and Login  

    async function createWithCredencials() {
        try {
            await createUserWithEmailAndPassword(email, password);
            navigation.navigate("SuasNotas")
        } catch (e) {
            console.warn(e);
        }
    }

    async function loginWithCredencials() {
        try {
            await loginWithEmailAndPassword(email, password);
        } catch (e) {
            console.warn(e);
        }
    }
// Ends
    return (
        <SafeAreaView>
            <View style={styles.contentConfigPage}>
                {user ? (
                    <>
                        <View style={styles.contentLoggedUser}>
                            <Text style={{color: "#fff", fontSize: 20}}>Seja bem Vindo ao Notepad</Text>
                            <Text style={{color: "#fff", fontSize: 15, marginTop: 25}}>Logado com {user?.email}</Text>
                            <Button onPress={logout} title="Sair" color="#6D28D9" />
                        </View>
                    </>
                ) : (
                    <>
                        <View style={styles.contentTitleNotepad}>
                            <Text style={{ color: "#fff", fontSize: 32 }}>Bem vindo ao Notepad</Text>
                        </View>
                        <View style={styles.contentFormsEmailAndPassword}>
                            <TextInput placeholder="Informe seu email"
                                value={email}
                                onChangeText={value => setEmail(value)}
                                style={styles.form}
                            />
                            <TextInput placeholder="Informe sua senha"
                                value={password}
                                onChangeText={value => setPassword(value)}
                                style={styles.form}
                            />
                        </View>
                        <View style={styles.ContentButtonsLoginAndCreate}>
                            <Button onPress={loginWithCredencials} title="Logar" color="#6D28D9"/>
                            <Text style={{color: "#6D78D9", fontSize:20 , marginTop: 4, marginBottom: 4}}>Ou Crie sua conta</Text>
                            <View style={{flexDirection: "row", padding: 2}}>
                                <Button onPress={createWithCredencials} title="Criar" color="#6D28D9"/>
                                <Button onPress={logout} title="Sair" color="#6D28D9" />
                            </View>
                        </View>
                    </>
                )}
            </View>
        </SafeAreaView>
    )
}