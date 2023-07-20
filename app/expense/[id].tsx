import { useGlobalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const Expense = () => {
  const { id } = useGlobalSearchParams();

  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default Expense;
