import React, { useState } from 'react'  
import { View, Text, Keyboard, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';  
import styles from './style';  
import { Platform } from 'react-native';


const Form = (props) => { 
  
  const [task, setTask] = useState('');   
  const handleAddTask = () =>{
    if (task.length === 0) {  
      alert("Bạn vui lòng nhập công việc!");  
      return false;  
    }  
    props.onAddTask(task);
    setTask('');
    Keyboard.dismiss();
  }
  return (  
    <KeyboardAvoidingView  
      behavior={Platform.OS === "ios" ? "padding" : "height"}  
      keyboardVerticalOffset = {10}
      style={styles.addTask}  
    >  
    <TextInput 
        value={task}
        onChangeText={(text) => setTask(text)}
        placeholder="Thêm công việc" 
        style={styles.input} 
    />  
    <TouchableOpacity
      onPress={handleAddTask}
    >  
      <View style={styles.iconWrapper}>  
        <Text style={styles.icon}>+</Text>  
      </View>  
    </TouchableOpacity>  
    </KeyboardAvoidingView>     
  )
}  

export default Form;  