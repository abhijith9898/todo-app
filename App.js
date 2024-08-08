import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Text, View } from 'react-native';
import Header from './src/components/Header/Header';
import Tasks from './src/components/Tasks/Tasks';
import Form from './src/components/Form/Form';
import Settings from './src/components/Settings/Settings';
import  styles  from './src/styles/main';
import uuid from 'react-uuid';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as database from './src/database'
import * as Notifications from 'expo-notifications'

const Tab = createBottomTabNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true
  }),
  handleSuccess: (notificationId) => {
    console.log('Handler Success:', notificationId)
  },
  handleError: (notificationId, error)=>{
    console.log('Handler Error: ', error)
  }
});

export default function App() {
  const [tasks, setTasks] = useState([])
  const [loadingData, setLoadingData] = useState(true)

  useEffect(()=>{
    handleLoadTask()
  },[])

  const handleLoadTask = () => {
    (async ()=>{
      const updatedTasks = [...tasks];
      const data =  await database.load()
      setLoadingData(false)
      if(data){
        updatedTasks.push(
          {
            id: data.id,
            description: data.description,
            done: data.done
          }
        );
        setTasks(data)
      }
    })()
  }


  const handleAddTask = (id, taskDescription, taskDone) => {
      const updatedTasks = [...tasks];
      updatedTasks.push(
        {
          id: id,
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
        {loadingData?(<ActivityIndicator size="large" color="#596796"/>):(<></>)}
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
              <Tasks {...props} tasks={tasks} loadingData={loadingData} onStatusChange={handleStatusChange} onTaskRemoval={handleTaskRemoval}/>
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
          <Tab.Screen 
          name='Settings'
          options={{
            title:'Settings',
            tabBarIcon:()=>{
              return(
                <Ionicons name="settings-outline" size={24} color="black" />
              )
            }
          }}>
            {(props) => (
              <Settings/>
            )}
          </Tab.Screen>
        </Tab.Navigator>

      </View>
      </View>
    </NavigationContainer>
  );
}


