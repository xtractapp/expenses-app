import React from 'react';
import { useRouter } from 'expo-router';

import { Text } from 'react-native';

import { type Expense } from '../types/types';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  expense: Expense;
}

const ExpenseListItem = ({ expense }: Props) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`expense/${expense.id}`);
      }}
    >
      <Text>ExpenseListItem</Text>
    </TouchableOpacity>
  );
};

export default ExpenseListItem;
