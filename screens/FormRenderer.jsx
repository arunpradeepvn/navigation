import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const FormRenderer = () => {

  const navigation = useNavigation();

  return (
    <View>
      <Text>Form Renderer Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default FormRenderer;
