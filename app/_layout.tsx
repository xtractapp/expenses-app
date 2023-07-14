import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import * as SecureStore from 'expo-secure-store';
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import i18n from '../i18n';
import Login from './login';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

import Constants from '../constants/General';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [loaded, error] = useFonts({
    Roboto: require('../assets/fonts/Roboto-Regular.ttf'),
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  const checkAuthentication = async () => {
    const token = await SecureStore.getItemAsync(Constants.apiToken);
    setIsAuthenticated(!!token);
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && !isAuthenticated && <Login setIsAuthenticated={setIsAuthenticated} />}
      {loaded && isAuthenticated && <RootLayoutNav />}
    </I18nextProvider>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/* <Stack.Screen name="modal" options={{ presentation: 'modal' }} /> */}
        </Stack>
      </ThemeProvider>
    </>
  );
}
