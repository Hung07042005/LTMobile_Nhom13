import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Task from './components/Task';
import Form from './components/Form';
import styles from './App.components.style';



const HomeScreen = () => {
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };

  const handleDeleteTask = (index) => {
    Alert.alert(
      'Thông báo',
      'Bạn có chắc chắn muốn xóa?',
      [
        {
          text: 'Ok',
          onPress: () => {
            let taskListTmp = [...taskList];
            taskListTmp.splice(index, 1);
            setTaskList(taskListTmp);
          },
          style: 'cancel',
        },
        { text: 'Hủy', onPress: () => {} },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
         {
          taskList.map((item, index) => {
            return <Task key={index} title={item} number={index+1} onDeleteTask={() => handleDeleteTask(index)}/>
          })
         }
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask}/>
    </View>
  );
};




export default HomeScreen;
