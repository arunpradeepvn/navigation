import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const ViewTodo = () => {

  const navigation = useNavigation();

  return (
    <View>
      <Text>View To-Do Screen</Text>

      <Button title='Create To-do' onPress={() => navigation.navigate('Create To-Do')} />
    </View>
  );
};

export default ViewTodo;
