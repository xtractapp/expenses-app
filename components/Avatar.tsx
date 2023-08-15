import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import Colors from '../constants/Colors';
import { ExpenseCategory } from '../types';
import { categoryIcon } from './Icons';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.light.main,
    borderRadius: 50,
    display: 'flex',
    height: 50,
    justifyContent: 'center',
    width: 50,
  },
  icon: {
    color: Colors.light.background,
    marginBottom: -3,
  },
});

type Props = {
  name: ExpenseCategory;
};

const Avatar = (props: Props) => {
  return (
    <View style={styles.container}>
      {
        categoryIcon(
          props.name,
          {
            color: Colors.light.background,
            marginBottom: -3,
          },
          25,
        )
      }
    </View>
  );
};

export default Avatar;
