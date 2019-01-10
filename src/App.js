import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBPNZZDnxKrddodZm9eeoideVOQxndbvEc",
            authDomain: "auth-bb592.firebaseapp.com",
            databaseURL: "https://auth-bb592.firebaseio.com",
            projectId: "auth-bb592",
            storageBucket: "auth-bb592.appspot.com",
            messagingSenderId: "536064012760"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm />
            </View>
        )
    };
}

export default App;