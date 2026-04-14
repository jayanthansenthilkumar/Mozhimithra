import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { router } from 'expo-router';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [haptics, setHaptics] = useState(true);

  return (
    <View style={styles.mainContainer}>

      {/* GLOWS */}
      <View style={[styles.glowOrb, { top: -100, right: -100, backgroundColor: '#8A2BE2', opacity: 0.15 }]} />
      
      

      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 44 }} /> {/* Spacer */}
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        <Text style={styles.sectionTitle}>Preferences</Text>
        
        <View style={styles.settingGroupWrapper}>
          <BlurView intensity={20} tint="dark" style={styles.settingGroup}>
            <View style={styles.settingRow}>
              <View style={styles.settingIconText}>
                <View style={[styles.iconBox, { backgroundColor: '#8A2BE220' }]}>
                  <Ionicons name="notifications" size={20} color="#8A2BE2" />
                </View>
                <Text style={styles.settingText}>Daily Reminders</Text>
              </View>
              <Switch 
                value={notifications} 
                onValueChange={setNotifications} 
                trackColor={{ false: 'rgba(255,255,255,0.1)', true: '#8A2BE2' }}
              />
            </View>
            
            <View style={styles.divider} />
            
            <View style={styles.settingRow}>
              <View style={styles.settingIconText}>
                <View style={[styles.iconBox, { backgroundColor: '#FF7F5020' }]}>
                  <Ionicons name="volume-high" size={20} color="#FF7F50" />
                </View>
                <Text style={styles.settingText}>Sound Effects</Text>
              </View>
              <Switch 
                value={soundEffects} 
                onValueChange={setSoundEffects} 
                trackColor={{ false: 'rgba(255,255,255,0.1)', true: '#FF7F50' }}
              />
            </View>

            <View style={styles.divider} />
            
            <View style={styles.settingRow}>
              <View style={styles.settingIconText}>
                <View style={[styles.iconBox, { backgroundColor: '#4ECDC420' }]}>
                  <Ionicons name="hardware-chip" size={20} color="#4ECDC4" />
                </View>
                <Text style={styles.settingText}>Haptic Feedback</Text>
              </View>
              <Switch 
                value={haptics} 
                onValueChange={setHaptics} 
                trackColor={{ false: 'rgba(255,255,255,0.1)', true: '#4ECDC4' }}
              />
            </View>
          </BlurView>
        </View>

        <Text style={styles.sectionTitle}>Account</Text>
        
        <View style={styles.settingGroupWrapper}>
          <BlurView intensity={20} tint="dark" style={styles.settingGroup}>
            <TouchableOpacity style={styles.settingRow}>
              <View style={styles.settingIconText}>
                <View style={[styles.iconBox, { backgroundColor: 'rgba(255,255,255,0.05)' }]}>
                  <Ionicons name="person" size={20} color="rgba(255,255,255,0.7)" />
                </View>
                <Text style={styles.settingText}>Edit Profile</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="rgba(255,255,255,0.3)" />
            </TouchableOpacity>
            
            <View style={styles.divider} />
            
            <TouchableOpacity style={styles.settingRow}>
              <View style={styles.settingIconText}>
                <View style={[styles.iconBox, { backgroundColor: 'rgba(255,255,255,0.05)' }]}>
                  <Ionicons name="shield-checkmark" size={20} color="rgba(255,255,255,0.7)" />
                </View>
                <Text style={styles.settingText}>Privacy Settings</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="rgba(255,255,255,0.3)" />
            </TouchableOpacity>
          </BlurView>
        </View>

        <View style={styles.logoutWrapper}>
          <TouchableOpacity style={styles.logoutBtn}>
            <Ionicons name="log-out-outline" size={24} color="#FF6B6B" />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#05030A',
  },
  glowOrb: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    marginBottom: 24,
  },
  backBtn: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFF',
  },
  container: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  sectionTitle: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 16,
    marginTop: 32,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  settingGroupWrapper: {
    borderRadius: 32,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  settingGroup: {
    padding: 8,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  settingIconText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.05)',
    marginLeft: 76, 
  },
  logoutWrapper: {
    marginTop: 56,
  },
  logoutBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,107,107,0.3)',
    backgroundColor: 'rgba(255,107,107,0.05)',
    gap: 12,
  },
  logoutText: {
    color: '#FF6B6B',
    fontSize: 18,
    fontWeight: '800',
  },
});
