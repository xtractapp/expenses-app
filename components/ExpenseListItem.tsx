import React from 'react'

import {
  View,
  Text,
} from 'react-native';

import { Expense } from '../types/types';

type Props = {
  expense: Expense;
};

const ExpenseListItem = ({ expense }: Props) => {
  return (
    <View>
      <Text>ExpenseListItem</Text>
    </View>
  );
};

export default ExpenseListItem;
