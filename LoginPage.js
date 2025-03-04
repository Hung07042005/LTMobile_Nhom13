import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Thông tin tài khoản cố định
  const validUser = {
    email: 'admin@example.com',
    password: '123456',
  };

  const handleLogin = () => {
  console.log('Email:', email);
  console.log('Password:', password);

  if (email === '' || password === '') {
    Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin!');
    return;
  }

  if (email === validUser.email && password === validUser.password) {
    console.log('Đăng nhập thành công!');
    navigation.navigate('Home');
  } else {
    console.log('Sai tài khoản hoặc mật khẩu!');
    Alert.alert('Lỗi', 'Sai tên đăng nhập hoặc mật khẩu!');
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Đăng nhập" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});

export default LoginPage;
