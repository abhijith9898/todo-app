
import { ScrollView, Text, View } from 'react-native';
import  styles  from './styles';
import Task from './Task/Task';

export default function Tasks(props) {
    console.log(props.tasks);
  return (
      <View style={styles.container}>
          {/* <Text style={styles.text}>Tasks</Text>
            <Task/> */}
          <ScrollView>
            {props.tasks.map((task, index) => (
                  <Task key={index} task={task} onStatusChange={props.onStatusChange} onTaskRemoval={props.onTaskRemoval} />
              )
            )}
          </ScrollView>
        
      </View>
    

  );
}