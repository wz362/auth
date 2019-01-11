import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { CardSection, Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBPNZZDnxKrddodZm9eeoideVOQxndbvEc",
            authDomain: "auth-bb592.firebaseapp.com",
            databaseURL: "https://auth-bb592.firebaseio.com",
            projectId: "auth-bb592",
            storageBucket: "auth-bb592.appspot.com",
            messagingSenderId: "536064012760"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                    );
            case false:
                return <LoginForm />;
            default:
                return (
                    <CardSection>
                        <Spinner />
                    </CardSection>
                );
        } 
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
                
            </View>
        )
    };
}

export default App;