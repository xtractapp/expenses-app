import React from 'react';
import { Pressable, useColorScheme } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { Tabs } from 'expo-router';
import { useTranslation } from 'react-i18next';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Constants from '../../constants/General';
import Colors from '../../constants/Colors';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const TabLayout = () => {
  const colorScheme = useColorScheme();
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="dollar" color={color} />,
          tabBarLabel: t('tabs.expenses'),
          headerRight: () => (
            <Pressable
              onPress={() => {
                SecureStore.deleteItemAsync(Constants.apiToken);
              }}
            >
              {({ pressed }) => (
                <FontAwesome
                  name="user"
                  size={25}
                  color={Colors[colorScheme ?? 'light'].text}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="summary"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="bar-chart" color={color} />
          ),
          tabBarLabel: t('tabs.summary'),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
