import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text, List, ListItem, Col, Grid, H1 } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
function ReminderItem( {route, navigation} ) {
  const title = navigation.state.params.title;
  console.log(title)
  return (
    <Container>
      <Grid>
          <Col style={{ backgroundColor: '#635DB7', height: 200, justifyContent: "center", alignItems: "center" }}>
          <H1 style={{color: "white"}}>SSSSSSSSSSSS</H1>
          </Col>
        </Grid>
    </Container>
  )
}
const styles = StyleSheet.create({
  flexBox: {
    justifyContent: "center", alignItems: "center"
  },
})
export default  ReminderItem;