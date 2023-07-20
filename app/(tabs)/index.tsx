import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import { Expense } from '../../types/types';

import ExpenseService from '../../services/expenseService';
import ExpenseListItem from '../../components/ExpenseListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Expenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(false);

  const loadExpenses = () => {
    setLoading(true);
    ExpenseService.list({
      page: 1,
      per_page: 20,
    })
      .then((res) => {
        setExpenses(res.data.data);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  return (
    <View style={styles.container}>
      {expenses.map((expense) => (
        <ExpenseListItem
          expense={expense}
          key={expense.id}
        />
      ))}
    </View>
  );
}

export default Expenses;
