import React, { useState } from 'react';  
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';  

export default function LoginScreen() {  
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');  

    const handleLogin = () => {  
        if (email && password) {  
            Alert.alert("Đăng nhập thành công!", `Email: ${email}`);  
            // Thêm logic kiểm tra đăng nhập ở đây   
        } else {  
            Alert.alert("Thông báo", "Vui lòng điền đầy đủ thông tin!");  
        }  
    };  

    return (  
        <View style={styles.container}>  
            <Text style={styles.title}>Đăng Nhập</Text>  
            <TextInput  
                style={styles.input}  
                placeholder="Email"  
                value={email}  
                onChangeText={setEmail}  
                keyboardType="email-address"  
            />  
            <TextInput  
                style={styles.input}  
                placeholder="Mật Khẩu"  
                value={password}  
                onChangeText={setPassword}  
                secureTextEntry  
            />  
            <TouchableOpacity style={styles.button} onPress={handleLogin}>  
                <Text style={styles.buttonText}>Đăng Nhập</Text>  
            </TouchableOpacity>  
            <TouchableOpacity onPress={() => Alert.alert("Quên mật khẩu")}>  
                <Text style={styles.link}>Quên mật khẩu?</Text>  
            </TouchableOpacity>  
            <TouchableOpacity onPress={() => Alert.alert("Đăng ký tài khoản")}>  
                <Text style={styles.link}>Đăng ký ngay</Text>  
            </TouchableOpacity>  
        </View>  
    );  
}  

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        padding: 20,  
        backgroundColor: '#fff',  
    },  
    title: {  
        fontSize: 24,  
        marginBottom: 20,  
        textAlign: 'center',  
    },  
    input: {  
        height: 50,  
        borderColor: '#ccc',  
        borderWidth: 1,  
        marginBottom: 20,  
        paddingHorizontal: 15,  
    },  
    button: {  
        backgroundColor: '#007bff',  
        padding: 15,  
        alignItems: 'center',  
        borderRadius: 5,  
    },  
    buttonText: {  
        color: '#fff',  
        fontSize: 18,  
    },  
    link: {  
        marginTop: 15,  
        color: '#007bff',  
        textAlign: 'center',  
    },  
});  