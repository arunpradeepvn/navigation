import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const FormList = () => {

  const navigation = useNavigation();

  return (
    <View>
      <Text>Form List Screen</Text>

      <Button title='Create Form' onPress={() => navigation.navigate('Create Form')} />
      <Button title='Form Renderer' onPress={() => navigation.navigate('Form Renderer')} />
    </View>
  );
};

export default FormList;
