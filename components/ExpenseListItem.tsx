import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

import { Text } from 'react-native';

import { Expense } from '../types';
import { View } from './Themed';
import Colors from '../constants/Colors';
import Avatar from './Avatar';
import { FontAwesome } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  leftContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '20%',
  },
  bold: {
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: Colors.light.background,
    display: 'flex',
    flexDirection: 'row',
    height: 100,
    padding: 4,
  },
  dualTextContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  middleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '50%',
  },
  rightContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '30%',
  },
});

interface Props {
  expense: Expense;
}

type PossibleStatus = 'pending' | 'submitted' | 'reimbursed' | 'unassigned' | 'approved' | 'rejected' | 'approval_pending';

const statusIcon = (status: PossibleStatus) => {
  switch (status) {
    case 'pending':
      return <FontAwesome name="plane" style={{ marginRight: 5 }}/>
    case 'submitted':
      return <FontAwesome name="plane" style={{ marginRight: 5 }}/>
    case 'reimbursed':
      return <FontAwesome name="plane" style={{ marginRight: 5 }}/>
    case 'unassigned':
      return <FontAwesome name="plane" style={{ marginRight: 5 }}/>
    case 'approved':
      return <FontAwesome name="plane" style={{ marginRight: 5 }}/>
    case 'rejected':
      return <FontAwesome name="plane" style={{ marginRight: 5 }}/>
    case 'approval_pending':
      return <FontAwesome name="plane" style={{ marginRight: 5 }}/>
  };
};

const ExpenseListItem = ({ expense }: Props) => {
  const router = useRouter();
  const { t } = useTranslation();

  const status: PossibleStatus = expense.status === 'submitted' ? expense.approval_status : expense.status;

  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`expense/${expense.id}`);
      }}
      style={styles.container}
    >
      <View style={styles.leftContainer}><Avatar name={expense.category}/></View>

      <View style={styles.middleContainer}>
        <Text style={styles.bold}>{expense.provider_business_name}</Text>
        <Text style={styles.bold}>{expense.category}</Text>
        <View style={styles.dualTextContainer}>
          <Text style={{ marginRight: 5 }}>{expense.date}</Text>
          {statusIcon(status)}
          <Text>{t(`expenses.status.${status}`)}</Text>
        </View>
      </View>

      <View style={styles.rightContainer}>
        <Text>{`${expense.total_amount} ${expense.currency}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ExpenseListItem;
