import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

const LEADERBOARD = [
  { id: '1', name: 'Alex Johnson', handle: '@alex_j', xp: 14500, streak: 120, isUser: false },
  { id: '2', name: 'Maria Garcia', handle: '@marialearns', xp: 13200, streak: 89, isUser: false },
  { id: '3', name: 'Sarah Jenkins', handle: '@sarah_learns', xp: 12000, streak: 14, isUser: true },
  { id: '4', name: 'David Kim', handle: '@kim_d', xp: 11800, streak: 45, isUser: false },
  { id: '5', name: 'Emma Wilson', handle: '@emma_w', xp: 10500, streak: 67, isUser: false },
  { id: '6', name: 'Tom Hardy', handle: '@tomtom', xp: 9000, streak: 5, isUser: false },
  { id: '7', name: 'Nina Simone', handle: '@nina_s', xp: 8500, streak: 12, isUser: false },
];

export default function LeaderboardScreen() {
  return (
    <View style={styles.mainContainer}>

      <View style={[styles.glowOrb, { top: -50, right: 0, backgroundColor: '#FFD700', opacity: 0.1 }]} />
      <View style={[styles.glowOrb, { bottom: -100, left: -100, backgroundColor: '#8A2BE2', opacity: 0.15 }]} />

      <SafeAreaView edges={['top']} />

      <View style={styles.header}>
        <Text style={styles.title}>League Rank</Text>
        <BlurView intensity={30} tint="light" style={styles.leagueBadge}>
          <Ionicons name="shield-checkmark" size={16} color="#FF7F50" />
          <Text style={styles.leagueText}>Bronze</Text>
        </BlurView>
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        <TouchableOpacity style={styles.promotionCardWrapper}>
          <LinearGradient
            colors={['rgba(138,43,226,0.8)', 'rgba(177,156,217,0.4)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.promotionCard}
          >
            <View style={styles.promoContent}>
              <Text style={styles.promoTitle}>Promotion Zone</Text>
              <Text style={styles.promoDesc}>Top 5 users advance to the Silver League next week.</Text>
            </View>
            <Ionicons name="trending-up" size={48} color="rgba(255,255,255,0.4)" />
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.listContainer}>
          {LEADERBOARD.map((user, index) => {
            const isTop3 = index < 3;
            const rankColor = index === 0 ? '#FFD700' : index === 1 ? '#C0C0C0' : index === 2 ? '#CD7F32' : 'rgba(255,255,255,0.7)';

            return (
              <View 
                key={user.id} 
                style={[
                  styles.userRow, 
                  user.isUser && { backgroundColor: 'rgba(138,43,226,0.15)', borderColor: '#8A2BE2' }
                ]}
              >
                <Text style={[styles.rankNumber, { color: rankColor }]}>{index + 1}</Text>
                
                <View style={styles.avatarContainer}>
                  <View style={styles.avatarPlaceholder}>
                     <Ionicons name="person" size={20} color="rgba(255,255,255,0.5)" />
                  </View>
                  {isTop3 && (
                    <View style={[styles.crownBadge, { backgroundColor: rankColor }]}>
                      <Ionicons name="star" size={10} color="#000" />
                    </View>
                  )}
                </View>
                
                <View style={styles.userInfo}>
                  <Text style={styles.userName}>{user.name}</Text>
                  <View style={styles.userMetaRow}>
                    <Text style={styles.userHandle}>{user.handle}</Text>
                    <View style={styles.streakBadge}>
                      <Ionicons name="flame" size={12} color="#FF7F50" />
                      <Text style={styles.streakText}>{user.streak}</Text>
                    </View>
                  </View>
                </View>
                
                <Text style={styles.xpText}>{user.xp.toLocaleString()} XP</Text>
              </View>
            );
          })}
        </View>
        
        <View style={styles.infoFooter}>
          <Ionicons name="time-outline" size={16} color="rgba(255,255,255,0.5)" />
          <Text style={styles.infoText}>League ends in 3 days, 14 hours</Text>
        </View>
        
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#FFF',
    letterSpacing: -0.5,
  },
  leagueBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
    overflow: 'hidden',
  },
  leagueText: {
    color: '#FF7F50',
    fontWeight: '800',
    fontSize: 14,
  },
  container: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  promotionCardWrapper: {
    marginBottom: 32,
    shadowColor: '#8A2BE2',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  promotionCard: {
    flexDirection: 'row',
    padding: 24,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  promoContent: {
    flex: 1,
    marginRight: 16,
  },
  promoTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
  },
  promoDesc: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    lineHeight: 22,
  },
  listContainer: {
    gap: 12,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  rankNumber: {
    fontSize: 20,
    fontWeight: '800',
    width: 32,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  avatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  crownBadge: {
    position: 'absolute',
    top: -6,
    right: -6,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#05030A',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 4,
  },
  userMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  userHandle: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 13,
    fontWeight: '500',
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  streakText: {
    color: '#FF7F50',
    fontSize: 13,
    fontWeight: '700',
  },
  xpText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  infoFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 32,
  },
  infoText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 14,
    fontWeight: '600',
  },
});
