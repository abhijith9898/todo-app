import { View, Text, Switch, Platform, Pressable } from "react-native";
import { useState, useEffect } from "react";
import styles from "./styles";
import * as Notifications from 'expo-notifications';

export default function Settings(){
    const [reminder, setReminder] = useState(false);
    const [schedule, setSchedule] = useState([]);
    const handleReminderPress = async ()=>{
        if(!reminder){
            const scheduled = await scheduleReminder()
            if(scheduled){
                setReminder(true)
            }
        } else{
            const cancelled = await cancelReminder()
            if(cancelled){
                setReminder(false)
            }
        }
    }

    // useEffect(()=>{
    //     (async () =>{
    //         const previouslyScheduled = await getSchedule();
    //         console.log('Schedule', previouslyScheduled)
    //     })();
    // }, []);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Notifications:</Text>
            <Text style={styles.description}>
                Send me daily reminder for tasks
            </Text>

            
            <View style={styles.options.container}>
                <Switch value={reminder} onValueChange={handleReminderPress}/>
                <Pressable onPress={handleReminderPress}>
                    <Text style={styles.options.label}>
                        Set Daily Reminder
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

async function scheduleReminder(){
    console.log('Schedule for', Platform.OS);

    try {
        const permissions = await Notifications.getPermissionsAsync();
        console.log('Permissions:', permissions)
        if(!permissions.granted){
            const request = await Notifications.requestPermissionsAsync({
                ios: {
                    allowAlert: true,
                    allowSound: true,
                    allowBadge: true
                }
            });
            console.log("Request", request);
            if(!request.granted){
                return false;
            }
        }
        console.log('Scheduling');
        const id = await Notifications.scheduleNotificationAsync({
            content:{
                title: 'Todo Reminder',
                body:'Remember to check your tasks',
                sound: true,
                subtitle:'Do not forget!',
                color:'#e4e8f5',
                priority: Notifications.AndroidNotificationPriority.HIGH,
                badge: 0,
                data: {
                    type: 'reminder'
                }
            },
            trigger:{
                seconds: Platform.OS=='ios'?60:5,
                repeats: true
            }
        });

        console.log("schedule id", id)
        if(!id){
            console.log("no id", id)
            return false;
        }
        return true;
    } catch(error) {
        return false;
        console.log("error", error)
    }
}

async function cancelReminder(){
    console.log('Cancel for', Platform.OS)
    let cancelled = false;
    const schedule = await getSchedule();
    // schedule.forEach((item) => {
    //     if(item.type === 'reminder'){
    //         await Notifications.cancelScheduledNotificationAsync(item.id)
    //         console.log('Canceled', item.id)
    //         cancelled =  true;
    //     }
    // });

    for(const item of schedule){
        if(item.type === 'reminder'){
            await Notifications.cancelScheduledNotificationAsync(item.id)
            console.log('Canceled', item.id)
            cancelled =  true;
        }
    }

    console.log("was cancelled:", cancelled)

    return cancelled;
}

async function getSchedule(){
    const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();
    console.log('Schedule', scheduledNotifications)

    const schedule = []
    scheduledNotifications.forEach((scheduledNotifications)=>{
        schedule.push({
            id: scheduledNotifications.identifier,
            type: scheduledNotifications.content.data.type
        })
    })

    return schedule
}