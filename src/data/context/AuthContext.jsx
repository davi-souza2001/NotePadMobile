import React from 'react';
import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";

const AuthContext = createContext({});

async function userNormal( userFirebase ){
    const token = await userFirebase.getIdToken()
    return {
        uid: userFirebase.uid,
        name: userFirebase.displayName,
        email: userFirebase.email,
        token,
        provedor: userFirebase.providerData[0].providerId,
        imagemUrl: userFirebase.photoURL
    }
}

export function AuthProvider(props) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    async function configureSection(userFirebase) {
        if (userFirebase?.email) {
            const user = await userNormal(userFirebase);
            setUser(user);
            setLoading(false);
            return user.email;
        } else {
            setUser(null);
            setLoading(false);
            return false;
        }
    }

    async function createUserWithEmailAndPassword(email, password) {
        try {
            const resp = await firebase.auth().createUserWithEmailAndPassword(email, password);
            await configureSection(resp.user);
        } finally {
            setLoading(false);
        }
    };

    async function loginWithEmailAndPassword(email, password) {
        try {
            const resp = await firebase.auth().signInWithEmailAndPassword(email, password); 
            await configureSection(resp.user);
            route.push('/createprofile');
        } finally {
            setLoading(false);
        }
    };

    async function logout() {
        try {
            setLoading(true);
            await firebase.auth().signOut();
            await configureSection(null);
        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            logout,
            createUserWithEmailAndPassword,
            loginWithEmailAndPassword
        }}>

            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;