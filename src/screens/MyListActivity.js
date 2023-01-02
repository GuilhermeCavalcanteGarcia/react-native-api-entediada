import { View, FlatList, Text } from 'react-native';
import React from 'react';
import MyHeader from '../components/MyHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import Activity from '../components/Activity';
import tw from 'twrnc';

const MyListActivity = ({ route }) => {
  const { myListActivity } = route.params;

  return (
    <SafeAreaView style={tw`flex-1`}>
      <MyHeader />
      <Text style={tw`text-2xl text-center text-blue-600 pb-6 pt-2 underline`}>
        Minha lista de atividades
      </Text>
      <FlatList
        data={myListActivity}
        renderItem={({ item }) => <Activity activity={item} />}
        keyExtractor={(a) => a.key}
        ItemSeparatorComponent={() => <View style={tw`p-2`}></View>}
      />
    </SafeAreaView>
  );
};

export default MyListActivity;
