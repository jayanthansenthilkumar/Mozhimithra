import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const BG = '#FFF1E5';
const BLACK = '#000000';
const ACCENT_YELLOW = '#FFDE00';
const RADIUS = 16;

const FRIENDS = [
  { id: '1', name: 'Mike Kane', message: 'Hey!', stars: 10, img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80' },
  { id: '2', name: 'Sepideh Yazdi', message: 'Start something that...', stars: 20, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80' },
  { id: '3', name: 'Sam X', message: "I'm ready!", stars: 40, img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80' },
  { id: '4', name: 'Ben', message: 'Ready for a win!', stars: 75, img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80' },
  { id: '5', name: 'Brenda Benet', message: "Let's do this!", stars: 95, img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80' },
];

export default function LeaderboardScreen() {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView edges={['top']} />
      
      {/* HEADER SECTION */}
      <View style={styles.headerRow}>
        <View style={styles.headerProfile}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80' }} style={styles.avatar} />
          <View>
            <Text style={styles.headerName}>Sam Smith</Text>
            <Text style={styles.headerSub}>Always a winner!</Text>
          </View>
        </View>
        <View style={styles.headerActions}>
          <View style={styles.starsPill}>
            <Ionicons name="star" size={12} color={BLACK} />
            <Text style={styles.starsText}>15 Stars</Text>
          </View>
          <TouchableOpacity style={styles.editBtn}>
            <Ionicons name="pencil" size={14} color={BLACK} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
         <View style={styles.listCard}>

            {/* SEARCH ROW */}
            <View style={styles.searchRow}>
               <View style={styles.searchInputBox}>
                  <Ionicons name="search" size={20} color={BLACK} style={{marginRight: 8}} />
                  <TextInput placeholder="Search..." placeholderTextColor="#666" style={styles.searchInput} />
               </View>
               <TouchableOpacity style={styles.searchAddBtn}>
                  <Ionicons name="add" size={24} color={BLACK} />
               </TouchableOpacity>
            </View>

            {/* LIST HEADER (No time to waste) - Mocking the first item in the shot slightly differently */}
            <View style={styles.listItem}>
               <Image source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80' }} style={styles.listAvatar} />
               <View style={styles.listInfo}>
                  <Text style={styles.listName}>No time to waste!</Text>
                  <View style={styles.listStars}>
                     <Ionicons name="star" size={12} color={ACCENT_YELLOW} />
                     <Text style={styles.listStarsText}>35 Stars</Text>
                  </View>
               </View>
               <Ionicons name="ellipsis-vertical" size={20} color={BLACK} />
            </View>

            {/* SCROLLING FRIENDS LIST */}
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
               {FRIENDS.map((friend, i) => (
                  <View key={friend.id} style={[styles.listItem, i === FRIENDS.length -1 && { borderBottomWidth: 0 }]}>
                     <Image source={{ uri: friend.img }} style={styles.listAvatar} />
                     <View style={styles.listInfo}>
                        <Text style={styles.listName}>{friend.name}</Text>
                        <Text style={styles.listMsg}>{friend.message}</Text>
                        <View style={styles.listStars}>
                           <Ionicons name="star" size={12} color={ACCENT_YELLOW} />
                           <Text style={styles.listStarsText}>{friend.stars} Stars</Text>
                        </View>
                     </View>
                     <Ionicons name="ellipsis-vertical" size={20} color={BLACK} />
                  </View>
               ))}
               <View style={{ height: 60 }} />
            </ScrollView>
            
            {/* Mock Scrollbar Pill right side */}
            <View style={styles.scrollPill} />

         </View>
      </View>

      {/* FLOATING ACTION BUTTON */}
      <TouchableOpacity style={styles.fabBtn} activeOpacity={0.9}>
         <Ionicons name="add" size={32} color={BLACK} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: BG },
  
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 10, paddingBottom: 20 },
  headerProfile: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 44, height: 44, borderRadius: 22, borderWidth: 2, borderColor: BLACK, marginRight: 12 },
  headerName: { fontSize: 16, fontWeight: '800', color: BLACK },
  headerSub: { fontSize: 13, fontWeight: '500', color: '#666' },
  headerActions: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  starsPill: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#63DEFF', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16, borderWidth: 2, borderColor: BLACK },
  starsText: { fontSize: 12, fontWeight: '800', color: BLACK, marginLeft: 4 },
  editBtn: { width: 32, height: 32, borderRadius: 16, backgroundColor: ACCENT_YELLOW, borderWidth: 2, borderColor: BLACK, justifyContent: 'center', alignItems: 'center' },

  container: { flex: 1, paddingHorizontal: 20, paddingBottom: Platform.OS === 'ios' ? 120 : 100 },
  
  listCard: {
    flex: 1, backgroundColor: '#FFF', borderWidth: 2, borderColor: BLACK, borderRadius: RADIUS,
    shadowColor: BLACK, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 0,
    overflow: 'hidden', position: 'relative'
  },
  
  searchRow: { flexDirection: 'row', padding: 20, borderBottomWidth: 2, borderColor: BLACK, alignItems: 'center', gap: 12 },
  searchInputBox: { flex: 1, flexDirection: 'row', alignItems: 'center', borderWidth: 2, borderColor: BLACK, borderRadius: 24, paddingHorizontal: 16, height: 48 },
  searchInput: { flex: 1, fontSize: 16, fontWeight: '600', color: BLACK },
  searchAddBtn: { width: 48, height: 48, borderRadius: 24, backgroundColor: ACCENT_YELLOW, borderWidth: 2, borderColor: BLACK, justifyContent: 'center', alignItems: 'center' },

  listItem: { flexDirection: 'row', alignItems: 'center', padding: 20, borderBottomWidth: 2, borderColor: BLACK },
  listAvatar: { width: 56, height: 56, borderRadius: 28, borderWidth: 2, borderColor: BLACK, marginRight: 16 },
  listInfo: { flex: 1 },
  listName: { fontSize: 18, fontWeight: '800', color: BLACK, marginBottom: 2 },
  listMsg: { fontSize: 14, fontWeight: '600', color: '#666', marginBottom: 4 },
  listStars: { flexDirection: 'row', alignItems: 'center' },
  listStarsText: { fontSize: 12, fontWeight: '800', color: BLACK, marginLeft: 4 },

  scrollPill: { position: 'absolute', right: 8, top: '40%', width: 8, height: 100, backgroundColor: BLACK, borderRadius: 4, zIndex: 10 },

  fabBtn: {
    position: 'absolute', bottom: Platform.OS === 'ios' ? 120 : 90, right: 24,
    width: 64, height: 64, borderRadius: 32, backgroundColor: ACCENT_YELLOW, borderWidth: 2, borderColor: BLACK,
    justifyContent: 'center', alignItems: 'center', zIndex: 20,
    shadowColor: BLACK, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 0
  }
});
