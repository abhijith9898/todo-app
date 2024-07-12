
import { Text, View, Pressable, Modal, Switch, Alert } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Task(prop) {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  }

  const handleStatusChangePress = () => {
    prop.onStatusChange(prop.task.id);
  }


  const handleRemovePress = () => {
    Alert.alert(
      'Remove Task',
      'This action will permanently delete this task. This action cannot be undone!',
      [{
        text: 'Confirm',
        onPress: () => {
          prop.onTaskRemoval(prop.task.id);
          setShowModal(false);
        }
      },
      {
        text: 'Cancel'
      }
    ]);
  }


  return (
   

    <>
      <Pressable onPress={handleModalToggle}>
        <View style={styles.container}>
          <Text style={styles.sub}>ID: {prop.task.id}</Text>
          <Text style={styles.title}>{prop.task.description}</Text>
          <Text style={styles.sub}>{prop.task.done ? 'Completed':'Open'}</Text>
        </View>
      </Pressable>

      <Modal visible={showModal} transparent={true} animationType='fade'>
        <View style={styles.modelPopUp}>
          <View style={styles.modalContainer}>
            <Pressable onPress={handleModalToggle}>
              <View style={styles.closeContainer}>
              <Text><Text style={styles.closeIcon}>X</Text>
                 Close</Text>
              </View>
            </Pressable>
            <Text style={styles.popTitle}>{prop.task.description.toUpperCase()}</Text>
            <View style={styles.switch}>
              <Text>Status</Text>
              <Switch
                value={prop.task.done}
                onValueChange={handleStatusChangePress}
              />
              <View style={styles.removeButton}>
              <Pressable onPress={handleRemovePress}>
                <View>
                <Text style={styles.removeLabel}><MaterialCommunityIcons name="delete-outline" size={24} color="#ced6ed" /> Remove</Text>
                </View>
              </Pressable>
            </View>
            </View>
            
          </View>
        </View>
      </Modal>
    </>


  );
}