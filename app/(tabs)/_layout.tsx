import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#05030A',
          borderTopWidth: 0,
          borderTopColor: 'transparent',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: Platform.OS === 'ios' ? 88 : 68,
          paddingBottom: Platform.OS === 'ios' ? 28 : 12,
          paddingTop: 12,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 4,
          fontWeight: '600',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && { backgroundColor: '#8A2BE240' }]}>
              <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={focused ? '#FFF' : '#FFFFFF60'} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          title: 'Courses',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && { backgroundColor: '#8A2BE240' }]}>
              <Ionicons name={focused ? 'school' : 'school-outline'} size={24} color={focused ? '#FFF' : '#FFFFFF60'} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="mithra"
        options={{
          title: 'Mithra',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && { backgroundColor: '#8A2BE240' }]}>
              <Ionicons name={focused ? 'sparkles' : 'sparkles-outline'} size={24} color={focused ? '#4ECDC4' : '#FFFFFF60'} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: 'Rank',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && { backgroundColor: '#8A2BE240' }]}>
              <Ionicons name={focused ? 'trophy' : 'trophy-outline'} size={24} color={focused ? '#FFF' : '#FFFFFF60'} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && { backgroundColor: '#8A2BE240' }]}>
              <Ionicons name={focused ? 'person' : 'person-outline'} size={24} color={focused ? '#FFF' : '#FFFFFF60'} />
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
    padding: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -4,
  },
});
