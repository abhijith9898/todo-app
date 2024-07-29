
import { ScrollView, Text, View, ActivityIndicator } from 'react-native';
import  styles  from './styles';
import Task from './Task/Task';
import { AntDesign } from '@expo/vector-icons';

export default function Tasks(props) {
    console.log(props.tasks);
  return (
      <View style={styles.container}>
          {/* <Text style={styles.text}>Tasks</Text>
            <Task/> */}
      <ScrollView>
        {props.loadingdata ?
        (
        <ActivityIndicator size="large" color="#596796" />
        )
        :
        (
        props.tasks.length == 0 ?
          (
            <View>
              <Text><AntDesign name="infocirlceo" size={24} color="black" /> There are no tasks in the list!</Text>
            </View>
          )
          :
          (
            props.tasks.map((task, index) => (
              <Task key={index} task={task} onStatusChange={props.onStatusChange} onTaskRemoval={props.onTaskRemoval} />
            )
            )
          )
        )}
      </ScrollView>
        
      </View>
    

  );
}