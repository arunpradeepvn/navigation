import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const MyActivity = () => {

  const navigation = useNavigation();

  return (
    <View>
      <Text>My Activity Screen</Text>

      <Button title='Group Activity' onPress={() => navigation.navigate('Group Activity')} />
    </View>
  );
};

export default MyActivity;
