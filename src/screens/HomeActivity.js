import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, View, ActivityIndicator, Text } from 'react-native';
import Activity from '../components/Activity';
import MyHeader from '../components/MyHeader';
import tw from 'twrnc';
import axios from 'axios';

const HomeActivity = () => {
  const [activity, setActivity] = useState([]);
  const [listActivity, setListActivity] = useState([]);

  async function readActivity() {
    const response = await axios.get('https://www.boredapi.com/api/activity?');

    setActivity(response.data);
  }

  // FAZER VERIFICAÇÇÃO PARA NÃO ADICIONAR ATIVIDADE JÁ EXISTENTE
  function addToList() {
    if (listActivity.includes(activity)) {
      return true;
    } else {
      setListActivity([...listActivity, { ...activity }]);
    }
  }

  useEffect(() => {
    readActivity();
  }, []);
  return (
    <SafeAreaView>
      {!activity.length && (
        <ActivityIndicator size={25} color={tw`text-blue-900`.color} />
      )}
      <MyHeader refresh={readActivity} myListActivity={listActivity} />

      <View style={tw`pt-15`}>
        <Activity activity={activity} addToList={addToList} />
      </View>
    </SafeAreaView>
  );
};

export default HomeActivity;
