import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const BG = '#F4F1E1';
const BLACK = '#0A0A0A';
const PAPER_WHITE = '#FFFFFF';
const HYPER_RED = '#FF3B30';
const CYBER_YELLOW = '#FFD60A';
const NEON_GREEN = '#39FF14';
const SKY_BLUE = '#30B0FF';

const FRIENDS = [
  { id: '1', name: 'Mike Kane', rank: '01', stars: 950, img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80' },
  { id: '2', name: 'Sepideh Yazdi', rank: '02', stars: 840, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80' },
  { id: '3', name: 'Sam X', rank: '03', stars: 740, img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80' },
  { id: '4', name: 'Ben', rank: '04', stars: 620, img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80' },
  { id: '5', name: 'Brenda Benet', rank: '05', stars: 510, img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80' },
];

export default function LeaderboardScreen() {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView edges={['top']} />
      
      {/* GLOBAL COMMAND HEADER */}
      <View style={styles.headerRow}>
         <View style={styles.headerLeft}>
            <Text style={styles.headerLabel}>GLOBAL NETWORK</Text>
            <Text style={styles.headerTitle}>RANKINGS</Text>
         </View>
         <View style={styles.headerRight}>
            <Ionicons name="globe-outline" size={40} color={BLACK} />
         </View>
      </View>

      <View style={styles.container}>
         <View style={styles.listCard}>
            
            {/* SEARCH TAPE SECTION */}
            <View style={styles.searchTapeWrap}>
               <View style={styles.searchTape} />
               <View style={styles.searchRow}>
                  <Ionicons name="search" size={24} color={BLACK} style={{marginRight: 12}} />
                  <TextInput placeholder="LOCATE OPERATIVE..." placeholderTextColor="#888" style={styles.searchInput} />
               </View>
            </View>

            {/* SCROLLING ROSTER */}
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
               {FRIENDS.map((friend, i) => (
                  <View key={friend.id} style={styles.listItem}>
                     <View style={styles.rankBox}>
                        <Text style={styles.rankText}>{friend.rank}</Text>
                     </View>
                     <Image source={{ uri: friend.img }} style={styles.listAvatar} />
                     <View style={styles.listInfo}>
                        <Text style={styles.listName}>{friend.name.toUpperCase()}</Text>
                        <Text style={styles.listMsg}>XP // {friend.stars}</Text>
                     </View>
                     <TouchableOpacity style={styles.actionBtn}>
                        <Ionicons name="flash" size={16} color={PAPER_WHITE} />
                     </TouchableOpacity>
                  </View>
               ))}
               <View style={{ height: 60 }} />
            </ScrollView>

         </View>
      </View>

      {/* FLOATING ACTION BRUTAL BTN */}
      <TouchableOpacity style={styles.fabWrap} activeOpacity={0.9}>
         <View style={styles.fabShadow} />
         <View style={styles.fabBtn}>
            <Ionicons name="add" size={32} color={BLACK} />
         </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: BG },
  
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 24, paddingBottom: 32 },
  headerLeft: { flex: 1 },
  headerLabel: { fontSize: 12, fontWeight: '900', color: HYPER_RED, letterSpacing: 2, marginBottom: 4 },
  headerTitle: { fontSize: 40, fontWeight: '900', color: BLACK, letterSpacing: -1 },
  headerRight: { width: 60, height: 60, backgroundColor: CYBER_YELLOW, borderRadius: 30, borderWidth: 3, borderColor: BLACK, justifyContent: 'center', alignItems: 'center' },

  container: { flex: 1, paddingHorizontal: 20, paddingBottom: Platform.OS === 'ios' ? 120 : 100 },
  
  listCard: {
    flex: 1, backgroundColor: PAPER_WHITE, borderWidth: 3, borderColor: BLACK, position: 'relative',
    shadowColor: BLACK, shadowOffset: { width: 6, height: 6 }, shadowOpacity: 1, shadowRadius: 0
  },
  
  searchTapeWrap: { position: 'relative', borderBottomWidth: 3, borderColor: BLACK },
  searchTape: { position: 'absolute', top: -10, left: -20, width: 80, height: 30, backgroundColor: 'rgba(255,59,48,0.5)', transform: [{rotate: '-5deg'}], zIndex: 10, borderWidth: 1, borderColor: BLACK },
  searchRow: { flexDirection: 'row', padding: 24, backgroundColor: NEON_GREEN, alignItems: 'center' },
  searchInput: { flex: 1, fontSize: 16, fontWeight: '900', color: BLACK, fontFamily: 'monospace' },

  listItem: { flexDirection: 'row', alignItems: 'center', padding: 20, borderBottomWidth: 3, borderColor: BLACK, backgroundColor: PAPER_WHITE, position: 'relative' },
  rankBox: { position: 'absolute', left: 10, top: -10, backgroundColor: BLACK, paddingHorizontal: 8, paddingVertical: 4, transform: [{rotate: '-4deg'}], zIndex: 5 },
  rankText: { color: CYBER_YELLOW, fontSize: 12, fontWeight: '900', fontFamily: 'monospace' },
  listAvatar: { width: 64, height: 64, borderWidth: 3, borderColor: BLACK, marginRight: 16, backgroundColor: '#CCC' },
  listInfo: { flex: 1 },
  listName: { fontSize: 20, fontWeight: '900', color: BLACK, marginBottom: 4 },
  listMsg: { fontSize: 14, fontWeight: '900', color: HYPER_RED, letterSpacing: 1 },
  actionBtn: { width: 40, height: 40, backgroundColor: BLACK, justifyContent: 'center', alignItems: 'center', transform: [{rotate: '5deg'}] },

  fabWrap: { position: 'absolute', bottom: Platform.OS === 'ios' ? 120 : 90, right: 24, width: 70, height: 70 },
  fabShadow: { position: 'absolute', top: 6, left: 6, right: -6, bottom: -6, backgroundColor: BLACK },
  fabBtn: { flex: 1, backgroundColor: SKY_BLUE, borderWidth: 3, borderColor: BLACK, justifyContent: 'center', alignItems: 'center' },
});
