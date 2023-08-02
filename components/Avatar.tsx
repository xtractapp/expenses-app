import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '../constants/Colors';
import { ExpenseCategory } from '../types/types';

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

const cateogryToAvatar = (name: ExpenseCategory): React.ComponentProps<typeof FontAwesome>['name'] => {
  if (name === 'accomodation') {
    return 'bed';
  }
  if (name === 'meals') {
    return 'cutlery';
  }
  if (name === 'fuel') {
    return 'tint';
  }
  if (name === 'transport') {
    return 'train';
  }
  if (name === 'flight') {
    return 'plane';
  }
  return 'credit-card';
};

const Avatar = (props: Props) => {
  return (
    <View style={styles.container}>
      <FontAwesome
        name={cateogryToAvatar(props.name)}
        size={25}
        style={styles.icon}
      />
    </View>
  );
};

export default Avatar;
