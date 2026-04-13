import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useAppTheme } from '@/hooks/ThemeContext';

const BG = '#F4F1E1';
const BLACK = '#0A0A0A';
const PAPER_WHITE = '#FFFFFF';
const HYPER_RED = '#FF3B30';
const CYBER_YELLOW = '#FFD60A';
const SKY_BLUE = '#30B0FF';
const NEON_GREEN = '#39FF14';

const LEADERBOARD_DATA = [
  { id: '1', name: 'MIKE KANE', rank: '1', xp: 950, img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80', color: CYBER_YELLOW },
  { id: '2', name: 'SEPIDEH YAZDI', rank: '2', xp: 840, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80', color: SKY_BLUE },
  { id: '3', name: 'SAM X', rank: '3', xp: 740, img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80', color: NEON_GREEN },
  { id: '4', name: 'BEN', rank: '4', xp: 620, img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80', color: PAPER_WHITE },
  { id: '5', name: 'BRENDA BENET', rank: '5', xp: 510, img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80', color: PAPER_WHITE },
];

export default function LeaderboardScreen() {
  const { appBgColor } = useAppTheme();
  return (
    <View style={[styles.mainContainer, { backgroundColor: appBgColor }]}>
      <SafeAreaView edges={['top']} />
      
      {/* MASSIVE BACKGROUND NAME WATERMARK */}
      <View style={styles.bgNameWrap} pointerEvents="none">
         <Text style={styles.bgNameText} adjustsFontSizeToFit={true} minimumFontScale={0.2} numberOfLines={1}>RANKING</Text>
      </View>

      {/* MASSIVE BRUTALIST HEADER */}
      <View style={styles.header}>
         <View style={styles.headerTitleBox}>
            <Text style={styles.titleShadow}>LEADERBOARD</Text>
            <Text style={styles.headerTitle}>LEADERBOARD</Text>
         </View>
         <Text style={styles.headerSub}>TOP 10% // GLOBAL</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
         
         {/* USER STAT HERO */}
         <View style={styles.userHeroWrap}>
            <View style={styles.heroShadow} />
            <View style={[styles.userHero, { backgroundColor: HYPER_RED }]}>
               <Text style={styles.userHeroLabel}>YOUR CURRENT RANK</Text>
               <View style={styles.heroValRow}>
                  <Text style={styles.heroRankNum}>#24</Text>
                  <View style={styles.heroXpBox}>
                     <Text style={styles.heroXpText}>2,450 XP</Text>
                  </View>
               </View>
            </View>
         </View>

         {/* PURE BRUTALIST LIST */}
         <View style={styles.listContainer}>
            {LEADERBOARD_DATA.map((user, i) => (
               <View key={user.id} style={styles.cardWrap}>
                  <View style={styles.cardShadow} />
                  <View style={[styles.card, { backgroundColor: user.color }]}>
                     
                     <View style={styles.rankBadge}>
                        <Text style={styles.rankBadgeText}>#{user.rank}</Text>
                     </View>

                     <Image source={{ uri: user.img }} style={styles.avatarImg} />
                     
                     <View style={styles.cardBody}>
                        <Text style={styles.nameText} numberOfLines={1}>{user.name}</Text>
                        <Text style={styles.xpText}>{user.xp} XP / 30 DAYS</Text>
                     </View>
                     
                     <TouchableOpacity style={styles.challengeBtn} activeOpacity={0.8}>
                        <Ionicons name="flame" size={24} color={PAPER_WHITE} />
                     </TouchableOpacity>

                  </View>
               </View>
            ))}
         </View>

         <View style={{ height: 100 }} />
      </ScrollView>

      {/* FIXED BRUTAL ADD FRIEND BTN */}
      <TouchableOpacity activeOpacity={0.9} style={styles.addBtnContainer}>
         <View style={styles.addBtnShadow} />
         <View style={styles.addBtnBody}>
            <Text style={styles.addBtnText}>ADD RIVAL</Text>
            <Ionicons name="add" size={24} color={BLACK} style={{marginLeft: 8}} />
         </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: BG, position: 'relative' },

  bgNameWrap: { position: 'absolute', top: 0, bottom: 0, left: -40, width: 220, justifyContent: 'center', alignItems: 'center', zIndex: 0 },
  bgNameText: { 
    fontSize: 240, 
    fontWeight: '900', 
    color: '#D8D4C0', 
    textShadowColor: '#BDB9A6', 
    textShadowOffset: { width: 12, height: 12 }, 
    textShadowRadius: 0, 
    transform: [{rotate: '-90deg'}], 
    width: 900, 
    textAlign: 'center', 
    letterSpacing: -2 
  },
  
  header: { padding: 24, paddingTop: 40, paddingBottom: 40, borderBottomWidth: 4, borderColor: BLACK, backgroundColor: PAPER_WHITE, marginBottom: 32 },
  headerTitleBox: { position: 'relative', marginBottom: 8 },
  titleShadow: { position: 'absolute', top: 4, left: 4, fontSize: 44, fontWeight: '900', color: CYBER_YELLOW, letterSpacing: -2 },
  headerTitle: { fontSize: 44, fontWeight: '900', color: BLACK, letterSpacing: -2, zIndex: 2 },
  headerSub: { fontSize: 14, fontWeight: '900', color: BLACK, letterSpacing: 4 },

  scrollContent: { paddingHorizontal: 24 },

  userHeroWrap: { position: 'relative', marginBottom: 48 },
  heroShadow: { position: 'absolute', top: 8, left: 8, right: -8, bottom: -8, backgroundColor: BLACK },
  userHero: { borderWidth: 4, borderColor: BLACK, padding: 24 },
  userHeroLabel: { fontSize: 16, fontWeight: '900', color: BLACK, letterSpacing: 2, marginBottom: 8 },
  heroValRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  heroRankNum: { fontSize: 64, fontWeight: '900', color: BLACK, letterSpacing: -4 },
  heroXpBox: { backgroundColor: BLACK, paddingHorizontal: 16, paddingVertical: 8, transform: [{rotate: '4deg'}] },
  heroXpText: { fontSize: 20, fontWeight: '900', color: PAPER_WHITE },

  listContainer: { gap: 32 },
  cardWrap: { position: 'relative', height: 100 },
  cardShadow: { position: 'absolute', top: 6, left: 6, right: -6, bottom: -6, backgroundColor: BLACK },
  card: { flex: 1, flexDirection: 'row', alignItems: 'center', borderWidth: 3, borderColor: BLACK, padding: 16 },
  
  rankBadge: { position: 'absolute', top: -14, left: 16, backgroundColor: BLACK, paddingHorizontal: 12, paddingVertical: 4, borderWidth: 2, borderColor: PAPER_WHITE, transform: [{rotate: '-4deg'}], zIndex: 10 },
  rankBadgeText: { fontSize: 20, fontWeight: '900', color: PAPER_WHITE },

  avatarImg: { width: 60, height: 60, borderWidth: 3, borderColor: BLACK, backgroundColor: PAPER_WHITE, marginRight: 16 },
  cardBody: { flex: 1 },
  nameText: { fontSize: 22, fontWeight: '900', color: BLACK, marginBottom: 4 },
  xpText: { fontSize: 12, fontWeight: '900', color: BLACK, letterSpacing: 1 },

  challengeBtn: { width: 48, height: 48, backgroundColor: BLACK, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: BLACK },

  addBtnContainer: { position: 'absolute', bottom: Platform.OS === 'ios' ? 100 : 80, alignSelf: 'center', height: 64, width: 200 },
  addBtnShadow: { position: 'absolute', top: 6, left: 6, right: -6, bottom: -6, backgroundColor: BLACK },
  addBtnBody: { flex: 1, backgroundColor: CYBER_YELLOW, borderWidth: 3, borderColor: BLACK, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  addBtnText: { fontSize: 18, fontWeight: '900', color: BLACK, letterSpacing: 2 },
});
