import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, SafeAreaView, StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import { Expense } from '../../types';

import Colors from '../../constants/Colors';
import ExpenseService from '../../services/expenseService';
import ExpenseListItem from '../../components/ExpenseListItem';

const Expenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const filterUniqueExpenses = (value: Expense, index: number, self: Expense[]) => {
    return (
      self.findIndex((obj) => obj.id === value.id) === index
    );
  };

  const loadExpenses = (page: number, refresh: boolean) => {
    refresh ? setRefreshing(true) : setLoading(true);

    ExpenseService.list({
      page,
      per_page: 10,
    })
      .then((res) => {
        refresh ? (
          setExpenses(res.data.data)
        ) : (
          setExpenses(
            [...expenses, ...res.data.data].filter(filterUniqueExpenses)
          )
        );
        setCurrentPage(page);
        setTotalPages(res.data.total_pages);
      })
      .finally(() => {
        refresh ? setRefreshing(false) : setLoading(false);
      });
  };

  const refreshData = () => {
    loadExpenses(1, true);
  };

  const fetchMore = () => {
    if (currentPage < totalPages) {
      loadExpenses(currentPage + 1, false);
    }
  };

  useEffect(() => {
    loadExpenses(1, false);
  }, []);

  const renderFooter = () => (
    <View>
      {
        loading && (
          <ActivityIndicator
            color={Colors.light.main}
            size="large"
            style={{
              height: 100,
              padding: 4,
            }}
          />
        )
      }
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={{}}
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.2}
        onEndReached={fetchMore}
        refreshControl={
          <RefreshControl
            tintColor={Colors.light.main}
            onRefresh={refreshData}
            refreshing={refreshing}
          />
        }
        renderItem={({ item }) => <ExpenseListItem expense={item} />}
      />
    </SafeAreaView>
  );
};

export default Expenses;
