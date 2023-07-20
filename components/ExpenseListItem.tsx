import React from 'react'

import {
  View,
  Text,
} from 'react-native';

import { Expense } from '../types/types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';

type Props = {
  expense: Expense;
};

const ExpenseListItem = ({ expense }: Props) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push(`expense/${expense.id}`)}
    >
      <Text>ExpenseListItem</Text>
    </TouchableOpacity>
  );
};

export default ExpenseListItem;
