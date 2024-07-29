
import { Button, Switch, Text, TextInput, View } from 'react-native';
import  styles  from './styles';
import { useState } from 'react';
import { Keyboard } from 'react-native';
import * as database from '../../../src/database'

export default function Form(props) {

  const [taskDescription, setTaskDescription] = useState('');
  const [taskDone, setTaskDone] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleAddPress = async () => {
    if (taskDescription) {
      console.log('Button pressed');
      let addObj = {
        description: taskDescription,
        done: taskDone
      }
      const dataId = await database.save(addObj)
      props.onAddTask(dataId, taskDescription, taskDone);
      setErrorMessage(null);
      setTaskDescription('');
      setTaskDone(false);
      Keyboard.dismiss();
    }
    else {
      setErrorMessage('The description is required.');
    }
  }

  const handleDescriptionChange = (value) => {
    setTaskDescription(value);
    if(value){
      setErrorMessage(null);
    }
  }

  const handleStatusChange = (value) => {
    setTaskDone(value);
  }

  return (
    <View style={styles.container}>

      {errorMessage && (
        <View>
          <Text style={styles.red}>Attention : {errorMessage}!</Text>
        </View>
      )}

      <TextInput
        style={styles.input}
        placeholder=' Enter a task description'
        maxLength={150}
        onChangeText={handleDescriptionChange}
        defaultValue={taskDescription} 
      />

      <View style = {styles.switchContainer}>
        <Text style={styles.text}>Completed : </Text>
        <Switch
          style={styles.switch}
          value={taskDone}
          onValueChange={handleStatusChange}
        />
      </View>
      <Button style={styles.button} title='Add' onPress={handleAddPress}/>
    </View>
  );
}