import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { StatusBar } from 'expo-status-bar';

import { AppThemeProvider } from '@/hooks/ThemeContext';

SplashScreen.preventAutoHideAsync();

import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <AppThemeProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom', 'right', 'left']}>
          <Stack screenOptions={{ headerShown: false, animation: 'fade' }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="course/[id]" options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="lesson/[id]" options={{ headerShown: false, animation: 'slide_from_bottom' }} />
            <Stack.Screen name="settings" options={{ headerShown: false, animation: 'slide_from_right' }} />
          </Stack>
        </SafeAreaView>
        <StatusBar style="auto" />
      </ThemeProvider>
    </AppThemeProvider>
  );
}
