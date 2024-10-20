import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const CreateTodo = () => {

  const navigation = useNavigation();


  return (
    <View>
      <Text>Create To-Do Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />

      <Button title='Create Form' onPress={() => navigation.navigate('Create Form')} />
    </View>
  );
};

export default CreateTodo;
