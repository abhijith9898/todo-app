import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Header from './src/components/Header/Header';
import Tasks from './src/components/Tasks/Tasks';
import Form from './src/components/Form/Form';
import  styles  from './src/styles/main';
import uuid from 'react-uuid';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();


export default function App() {

  const [tasks, setTasks] = useState(
    [
      {
        id: uuid(),
        description: "Walk the dog",
        done: true
      },
      {
        id: uuid(),
        description: "Wash the car",
        done: false
      },
      {
        id: uuid(),
        description: "Finish the lab",
        done: false
      },
      {
        id: uuid(),
        description: "Walk the dog",
        done: true
      },
      {
        id: uuid(),
        description: "Wash the car",
        done: false
      },
      {
        id: uuid(),
        description: "Finish the lab",
        done: false
      },
    ]
  )

  const handleAddTask = (taskDescription, taskDone) => {
    const updatedTasks = [...tasks];
    updatedTasks.push(
      {
        id: uuid(),
        description: taskDescription,
        done: taskDone
      }
    );
    setTasks(updatedTasks);
  }

  const handleStatusChange = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const handleTaskRemoval = (id) => {
    const updatedTasks = tasks.filter(
    (task) => task.id !== id
    );
    setTasks(updatedTasks);
    }

  return (
    <NavigationContainer>
      <View style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />

        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen 
          name='List'
          options={{
            title:'List',
            tabBarBadge: tasks.length,
            tabBarIcon:()=>{
              return(
                <Entypo name="list" size={24} color="black" />
              )
            }
          }}>
            {(props) => (
              <Tasks {...props} tasks={tasks} onStatusChange={handleStatusChange} onTaskRemoval={handleTaskRemoval}/>
            )}
          </Tab.Screen>
          <Tab.Screen 
          name='Add'
          options={{
            title:'Add',
            tabBarIcon:()=>{
              return(
                <MaterialIcons name="add-circle-outline" size={24} color="black" />
              )
            }
          }}>
            {(props) => (
              <Form {...props} onAddTask={handleAddTask} />
            )}
          </Tab.Screen>
        </Tab.Navigator>

      </View>
      </View>
    </NavigationContainer>
  );
}


