import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const BG = '#FFF1E5';
const BLACK = '#0A0A0A';
const ACCENT_YELLOW = '#FFE066';
const ACCENT_BLUE = '#A2D2FF';
const ACCENT_PINK = '#FFAFCC';

export default function ProfileScreen() {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView edges={['top']} />
      
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Profile</Text>
          <View style={styles.titleUnderline} />
        </View>

        <View style={styles.profileSection}>
          <View style={styles.profileCard}>
             <View style={[styles.crosshairV, { left: 10 }]} />
             <View style={[styles.crosshairV, { right: 10 }]} />
             <View style={[styles.crosshairH, { top: 10 }]} />
             <View style={[styles.crosshairH, { bottom: 10 }]} />

            <View style={styles.imageBox}>
               <Image 
                 source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80' }}
                 style={styles.heroImage}
               />
            </View>

            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Priya R.</Text>
              <Text style={styles.profileBio}>Multi-disciplinary language leaner with expertise across vocabulary and grammar.</Text>
              
              <TouchableOpacity style={styles.neoBtn}>
                <Text style={styles.neoBtnText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.statsGrid}>
          <Text style={styles.gridHeroText}>My Stats</Text>
          
          <View style={styles.gridContainer}>
            <View style={[styles.gridCrossH, { top: 0, left: -10, right: -10 }]} />
            <View style={[styles.gridCrossH, { bottom: 0, left: -10, right: -10 }]} />
            
            <View style={styles.gridRow}>
              <View style={[styles.gridCol, { flex: 1, borderRightWidth: 2, borderColor: BLACK, padding: 20 }]}>
                <View style={[styles.iconCircle, { backgroundColor: ACCENT_YELLOW }]}>
                  <Ionicons name="flame" size={16} color={BLACK} />
                </View>
                <Text style={styles.gridTitle}>21 Days</Text>
                <Text style={styles.gridDesc}>Current Streak</Text>
              </View>
              <View style={[styles.gridCol, { flex: 1, padding: 20 }]}>
                <View style={[styles.iconCircle, { backgroundColor: ACCENT_PINK }]}>
                  <Ionicons name="trophy" size={16} color={BLACK} />
                </View>
                <Text style={styles.gridTitle}>Top 5%</Text>
                <Text style={styles.gridDesc}>Leaderboard Rank</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: BG },
  scrollContainer: { paddingHorizontal: 24, paddingTop: 40 },
  header: { alignItems: 'center', marginBottom: 40 },
  pageTitle: { fontSize: 36, fontWeight: '900', color: BLACK },
  titleUnderline: { height: 4, width: 140, backgroundColor: BLACK, marginTop: 4, transform: [{ rotate: '1deg' }] },

  profileSection: { marginBottom: 60, paddingHorizontal: 20 },
  profileCard: { position: 'relative' },
  crosshairV: { position: 'absolute', top: -10, bottom: -10, width: 2, backgroundColor: BLACK, zIndex: 1 },
  crosshairH: { position: 'absolute', left: -10, right: -10, height: 2, backgroundColor: BLACK, zIndex: 1 },
  
  imageBox: {
    width: '100%', aspectRatio: 1, borderWidth: 2, borderColor: BLACK,
    backgroundColor: '#FFF', padding: 10, position: 'relative', zIndex: 2
  },
  heroImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  
  profileInfo: {
    backgroundColor: '#FFF', borderWidth: 2, borderColor: BLACK, 
    borderTopWidth: 0, padding: 24, zIndex: 2
  },
  profileName: { fontSize: 28, fontWeight: '900', color: BLACK, marginBottom: 8 },
  profileBio: { fontSize: 14, fontWeight: '500', color: '#444', lineHeight: 22, marginBottom: 20 },
  
  neoBtn: {
    backgroundColor: ACCENT_BLUE, alignSelf: 'flex-start', paddingHorizontal: 24, paddingVertical: 12,
    borderWidth: 2, borderColor: BLACK, shadowColor: BLACK, shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1, shadowRadius: 0, elevation: 8
  },
  neoBtnText: { fontWeight: '800', fontSize: 14, color: BLACK },

  /* GRID */
  statsGrid: { paddingHorizontal: 12 },
  gridHeroText: { fontSize: 24, fontWeight: '800', color: BLACK, marginBottom: 20 },
  gridContainer: { position: 'relative' },
  gridCrossH: { position: 'absolute', height: 2, backgroundColor: BLACK, zIndex: 2 },
  gridRow: { flexDirection: 'row' },
  gridCol: { justifyContent: 'center' },
  iconCircle: {
    width: 36, height: 36, borderRadius: 18, borderWidth: 2, 
    borderColor: BLACK, justifyContent: 'center', alignItems: 'center', marginBottom: 16
  },
  gridTitle: { fontSize: 22, fontWeight: '900', color: BLACK, marginBottom: 4 },
  gridDesc: { fontSize: 12, fontWeight: '600', color: '#555' },
});
