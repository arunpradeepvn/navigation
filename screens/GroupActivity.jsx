import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const GroupActivity = () => {

  const navigation = useNavigation();

  return (
    <View>
      <Text>Group Activity Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default GroupActivity;
