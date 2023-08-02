import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import { type Expense } from '../../types/types';

import ExpenseService from '../../services/expenseService';
import ExpenseListItem from '../../components/ExpenseListItem';

const Expenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [, setLoading] = useState(false);

  const loadExpenses = (page: number) => {
    setLoading(true);
    ExpenseService.list({
      page,
      per_page: 10,
    })
      .then((res) => {
        setExpenses([...expenses, ...res.data.data]);
        setTotalPages(res.data.total_pages);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    loadExpenses(currentPage);
  }, [currentPage]);

  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={{}}
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={0.2}
        onEndReached={fetchMore}
        renderItem={({ item }) => <ExpenseListItem expense={item} />}
      />
    </SafeAreaView>
  );
};

export default Expenses;
