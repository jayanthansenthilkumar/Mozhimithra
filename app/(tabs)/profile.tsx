import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

export default function ProfileScreen() {
  return (
    <View style={styles.mainContainer}>
      
      {/* GLOWS */}
      <View style={[styles.glowOrb, { top: -50, left: -100, backgroundColor: '#8A2BE2', opacity: 0.2 }]} />
      <View style={[styles.glowOrb, { top: 300, right: -150, backgroundColor: '#FF6B6B', opacity: 0.15 }]} />

      <SafeAreaView edges={['top']} />
      
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Account</Text>
          <TouchableOpacity 
            style={styles.settingsBtn}
            onPress={() => router.push('/settings')}
          >
            <Ionicons name="settings-outline" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' }} 
              style={styles.avatar} 
            />
            <LinearGradient
              colors={['#FFD700', '#FDB931']}
              style={styles.proBadge}
            >
              <Text style={styles.proText}>PRO</Text>
            </LinearGradient>
          </View>
          <Text style={styles.name}>Sarah Jenkins</Text>
          <Text style={styles.handle}>@sarah_learns</Text>
          <Text style={styles.bio}>Fluent in Hindi. Learning Tamil. Explaining UI design along the way. ✨</Text>
        </View>

        <View style={styles.statsContainer}>
          <BlurView intensity={20} tint="dark" style={styles.statBox}>
            <Text style={[styles.statValue, { color: '#8A2BE2' }]}>4</Text>
            <Text style={styles.statLabel}>Lang</Text>
          </BlurView>
          <BlurView intensity={20} tint="dark" style={styles.statBox}>
            <Text style={[styles.statValue, { color: '#4ECDC4' }]}>12k</Text>
            <Text style={styles.statLabel}>XP Total</Text>
          </BlurView>
          <BlurView intensity={20} tint="dark" style={styles.statBox}>
            <Text style={[styles.statValue, { color: '#FF7F50' }]}>Gold</Text>
            <Text style={styles.statLabel}>League</Text>
          </BlurView>
        </View>

        <BlurView intensity={20} tint="dark" style={styles.sectionGlass}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Friends</Text>
            <TouchableOpacity><Text style={styles.actionText}>Add Friends</Text></TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.friendsScroll}>
            {[
              {id: 1, name: 'Alex L.', uri: 'https://i.pravatar.cc/150?img=11'}, 
              {id: 2, name: 'Maria G.', uri: 'https://i.pravatar.cc/150?img=5'}, 
              {id: 3, name: 'David K.', uri: 'https://i.pravatar.cc/150?img=34'}, 
              {id: 4, name: 'Emma T.', uri: 'https://i.pravatar.cc/150?img=32'}
            ].map(friend => (
              <View key={friend.id} style={styles.friendAvatar}>
                <Image source={{uri: friend.uri}} style={styles.friendImage} />
                <Text style={styles.friendName}>{friend.name}</Text>
              </View>
            ))}
          </ScrollView>
        </BlurView>

        <View style={{ height: 24 }} />

        <BlurView intensity={20} tint="dark" style={styles.sectionGlass}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Badges</Text>
            <TouchableOpacity><Text style={styles.actionText}>See All</Text></TouchableOpacity>
          </View>
          
          <View style={styles.achievementRow}>
            <View style={styles.achievementItem}>
              <View style={[styles.achievementIcon, { backgroundColor: '#FFD70020', borderColor: '#FFD700' }]}>
                <Ionicons name="trophy" size={28} color="#FFD700" />
              </View>
              <Text style={styles.achievementText}>Champion</Text>
            </View>
            <View style={styles.achievementItem}>
              <View style={[styles.achievementIcon, { backgroundColor: '#FF7F5020', borderColor: '#FF7F50' }]}>
                <Ionicons name="flame" size={28} color="#FF7F50" />
              </View>
              <Text style={styles.achievementText}>30 Days</Text>
            </View>
            <View style={styles.achievementItem}>
              <View style={[styles.achievementIcon, { backgroundColor: '#4ECDC420', borderColor: '#4ECDC4' }]}>
                <Ionicons name="star" size={28} color="#4ECDC4" />
              </View>
              <Text style={styles.achievementText}>Perfect</Text>
            </View>
            <View style={styles.achievementItem}>
              <View style={[styles.achievementIcon, { backgroundColor: 'rgba(255,255,255,0.05)' }]}>
                <Ionicons name="lock-closed" size={24} color="rgba(255,255,255,0.2)" />
              </View>
              <Text style={[styles.achievementText, { color: 'rgba(255,255,255,0.3)' }]}>Locked</Text>
            </View>
          </View>
        </BlurView>

        <View style={{ height: 100 }} />
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
  container: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 12,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: '800',
    color: '#FFF',
    letterSpacing: -0.5,
  },
  settingsBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 20,
    shadowColor: '#8A2BE2',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  proBadge: {
    position: 'absolute',
    bottom: -8,
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#05030A',
  },
  proText: {
    color: '#05030A',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,
  },
  name: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 4,
  },
  handle: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 16,
  },
  bio: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 16,
    lineHeight: 22,
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 40,
    gap: 16,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    overflow: 'hidden',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 4,
  },
  statLabel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  sectionGlass: {
    borderRadius: 32,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    overflow: 'hidden',
  },
  sectionHeaderRow: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '800',
  },
  actionText: {
    color: '#8A2BE2',
    fontWeight: '800',
    fontSize: 13,
    letterSpacing: 0.5,
  },
  friendsScroll: {
    gap: 20,
  },
  friendAvatar: {
    alignItems: 'center',
    width: 64,
  },
  friendImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.2)'
  },
  friendName: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
    fontWeight: '600',
  },
  achievementRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  achievementItem: {
    alignItems: 'center',
  },
  achievementIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
  },
  achievementText: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 12,
    fontWeight: '700',
  },
});
