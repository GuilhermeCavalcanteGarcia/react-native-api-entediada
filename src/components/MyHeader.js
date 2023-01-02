import { Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';
import BarHome from './BarHome';

const MyHeader = ({ refresh, myListActivity }) => {
  return (
    <View>
      <View
        style={tw`flex-row justify-center mb-4 pb-3 pt-4 border-b-2 border-blue-900 relative`}
      >
        <FontAwesome name="spinner" size={38} color={tw`text-blue-900`.color} />
        <Text style={tw`text-2xl text-blue-600 ml-2`}>Bored App !</Text>
      </View>
      <BarHome refresh={refresh} myListActivity={myListActivity} />
    </View>
  );
};

export default MyHeader;
