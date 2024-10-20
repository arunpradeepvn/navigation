import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screens
import FormList from './screens/FormList';
import CreateForm from './screens/CreateForm';
import FormRenderer from './screens/FormRenderer';
import MyActivity from './screens/MyActivity';
import GroupActivity from './screens/GroupActivity';
import ViewTodo from './screens/ViewTodo';
import CreateTodo from './screens/CreateTodo';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function FormsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Form List" component={FormList} />
      <Stack.Screen name="Create Form" component={CreateForm} />
      <Stack.Screen name="Form Renderer" component={FormRenderer} />
    </Stack.Navigator>
  );
}

function ActivityNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Activity" component={MyActivity} />
      <Stack.Screen name="Group Activity" component={GroupActivity} />
    </Stack.Navigator>
  );
}

function TodosNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="View To-Do" component={ViewTodo} />
      <Stack.Screen name="Create To-Do" component={CreateTodo} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Forms" component={FormsNavigator} />
        <Tab.Screen name="Activity" component={ActivityNavigator} />
        <Tab.Screen name="To-Dos" component={TodosNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const test = {
  drawer: {
    'First Module': {
      tabs: {
        'Forms': {
          screen1: 'Form List',
          screen2: 'Create Form',
          screen3: 'Form Renderer',
        },
        'Activity': {
          screen1: 'My Activity',
          screen2: 'Group Activity'
        },
        'To-Dos': {
          screen1: 'View To-Do',
          screen2: 'Create To-Do'
        }
      }
    },
    'Second Module': {
      screen1: 'This is second module page'
    }
  }
};