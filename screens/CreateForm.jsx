import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const CreateForm = () => {

  const navigation = useNavigation();

  return (
    <View>
      <Text>Create Form Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default CreateForm;
