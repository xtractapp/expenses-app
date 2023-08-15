import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import {
  ExpenseCategory,
  PossibleStatus,
} from '../types';

type IconStyles = {
  color?: string;
  marginBottom?: number;
  marginRight?: number;
};

export const statusIcon = (status: PossibleStatus | undefined, styles: IconStyles, size = 25) => {
  switch (status) {
    case 'pending':
      return <FontAwesome name="hourglass" size={size} style={styles}/>
    case 'submitted':
      return <FontAwesome name="check-circle" size={size} style={styles}/>
    case 'reimbursed':
      return <FontAwesome name="usd" size={size} style={styles}/>
    case 'unassigned':
      return <FontAwesome name="check-circle" size={size} style={styles}/>
    case 'approved':
      return <FontAwesome name="thumbs-up" size={size} style={styles}/>
    case 'rejected':
      return <FontAwesome name="thumbs-down" size={size} style={styles}/>
    case 'approval_pending':
      return <FontAwesome name="check-circle" size={size} style={styles}/>
  };
};

export const categoryIcon = (status: ExpenseCategory | undefined, styles: IconStyles, size = 25) => {
  switch (status) {
    case 'accomodation':
      return <FontAwesome name="bed" size={size} style={styles}/>
    case 'meals':
      return <FontAwesome name="cutlery" size={size} style={styles}/>
    case 'fuel':
      return <FontAwesome name="tint" size={size} style={styles}/>
    case 'transport':
      return <FontAwesome name="train" size={size} style={styles}/>
    case 'flight':
      return <FontAwesome name="plane" size={size} style={styles}/>
    };

    return <FontAwesome name="credit-card" size={size} style={styles}/>
};
