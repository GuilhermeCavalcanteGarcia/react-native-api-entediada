import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BarHome = ({ refresh, myListActivity }) => {
  const navigation = useNavigation();

  if (navigation.getState().index == 0) {
    return (
      <View style={tw`flex-row justify-evenly mb-2 pb-2 pt-2 relative`}>
        <View style={tw`border-b-4`}>
          <TouchableOpacity onPress={() => refresh()}>
            <FontAwesome
              name="refresh"
              size={25}
              color={tw`text-blue-400`.color}
            />
          </TouchableOpacity>
        </View>
        <View style={tw`border-b-4`}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MyListActivity', { myListActivity })
            }
          >
            <FontAwesome
              name="list"
              size={25}
              color={tw`text-blue-400`.color}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={tw`flex-row justify-evenly mb-2 pb-2 pt-2 relative`}>
      <View style={tw`border-b-4`}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeActivity')}>
          <FontAwesome name="home" size={25} color={tw`text-blue-900`.color} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BarHome;
