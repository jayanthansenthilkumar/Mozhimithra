import { Tabs } from 'expo-router';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { useAppTheme } from '@/hooks/ThemeContext';

const BLACK = '#000000';

export default function TabLayout() {
  const { appBgColor, accentColor } = useAppTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: BLACK,
        tabBarInactiveTintColor: '#666',
        tabBarLabelStyle: {
          fontFamily: 'SpaceMono',
          fontWeight: '900',
          fontSize: 12,
          marginTop: 4,
        },
        tabBarStyle: {
          backgroundColor: appBgColor,
          borderTopWidth: 2,
          borderBottomWidth: 2,
          borderColor: BLACK,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          elevation: 0,
          marginBottom: Platform.OS === 'ios' ? 28 : 16,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Challenges',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={[styles.activeBlob, { backgroundColor: accentColor }]} />}
              <Ionicons name="home" size={24} color={color} style={{ zIndex: 2 }} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          title: 'Courses',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={[styles.activeBlob, { backgroundColor: accentColor }]} />}
              <Ionicons name="book" size={24} color={color} style={{ zIndex: 2 }} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="mithra"
        options={{
          title: 'Mithra',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={[styles.activeBlob, { backgroundColor: accentColor }]} />}
              <Ionicons name="planet" size={24} color={color} style={{ zIndex: 2 }} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: 'Friends',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={[styles.activeBlob, { backgroundColor: accentColor }]} />}
              <Ionicons name="people" size={24} color={color} style={{ zIndex: 2 }} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Stats',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={[styles.activeBlob, { backgroundColor: accentColor }]} />}
              <Ionicons name="bar-chart" size={24} color={color} style={{ zIndex: 2 }} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="store"
        options={{
          title: 'Store',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={[styles.activeBlob, { backgroundColor: accentColor }]} />}
              <Ionicons name="cart" size={24} color={color} style={{ zIndex: 2 }} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="vocab"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 30,
  },
  activeBlob: {
    position: 'absolute',
    width: 48,
    height: 32,
    borderRadius: 16,
    zIndex: 1,
    transform: [{ rotate: '-4deg' }]
  }
});
