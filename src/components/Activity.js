import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const Activity = ({ activity, addToList }) => {
  const navigation = useNavigation();

  if (navigation.getState().index == 0) {
    return (
      <View style={tw`border-2 rounded-2xl border-blue-800 bg-blue-400 p-2`}>
        <View
          style={tw`flex-row justify-center border-2 rounded-2xl bg-blue-500 border-blue-800 p-10`}
        >
          <Text style={tw`text-4 mr-6 text-blue-200`}>
            {activity.activity} !
          </Text>

          <TouchableOpacity onPress={addToList}>
            <FontAwesome
              name="plus-circle"
              size={25}
              color={tw`text-blue-900`.color}
            />
          </TouchableOpacity>
        </View>
        <Text style={tw`text-xl text-center text-blue-200 p-2`}>Detalhes</Text>
        <Text style={tw`text-4 text-center text-blue-200 p-2`}>
          Tipo de atividade : {activity.type}
        </Text>
        <Text style={tw`text-4 text-center text-blue-200 p-2`}>
          N° de participantes : {activity.participants}
        </Text>
      </View>
    );
  }
  return (
    <View style={tw`border-2 rounded-2xl border-blue-800 bg-blue-400 p-2`}>
      <View
        style={tw`flex-row justify-center border-2 rounded-2xl bg-blue-500 border-blue-800 p-10`}
      >
        <Text style={tw`text-4 mr-6 text-blue-200`}>{activity.activity} !</Text>
      </View>
      <Text style={tw`text-xl text-center text-blue-200 p-2`}>Detalhes</Text>
      <Text style={tw`text-4 text-center text-blue-200 p-2`}>
        Tipo de atividade : {activity.type}
      </Text>
      <Text style={tw`text-4 text-center text-blue-200 p-2`}>
        N° de participantes : {activity.participants}
      </Text>
    </View>
  );
};

export default Activity;
