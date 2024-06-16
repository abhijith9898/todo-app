
import { Text, View } from 'react-native';
import  styles  from './styles';

export default function Task(prop) {
  return (
    <View style={styles.container}>
      <Text style={styles.sub}>ID: {prop.task.id}</Text>
      <Text style={styles.title}>{prop.task.description}</Text>
      <Text style={styles.sub}>{prop.task.done ? 'Completed':'Open'}</Text>
    </View>
  );
}