import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text, List, ListItem } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import ReminderItem from './ReminderItem';

const reminders = [
  {title: "Задача 1", date: Date.now() + 1000 * 5},
  {title: "Задача 2", date: Date.now() + 2000 * 5},
  {title: "Задача 3", date: Date.now() + 3000 * 5},
]
class Home extends React.Component {
render() {
  return (
    <View>
      <List>
      {
        reminders.map((r, i) => (
          <ListItem onPress={() => this.props.navigation.navigate('reminderItem', r)}
          title="Go to Brent's profile" key={i} >
            <Text>{ r.title } </Text>
          </ListItem>
        ))
      }
      </List>
    </View>
  )
}
}
export default  Home;