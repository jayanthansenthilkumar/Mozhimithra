import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

// PREMIUM NEURO-BRUTALISM CONSTANTS
const BG = '#F4F1E1';
const BLACK = '#0A0A0A';
const PAPER_WHITE = '#FFFFFF';
const HYPER_RED = '#FF3B30';
const CYBER_YELLOW = '#FFD60A';
const SKY_BLUE = '#30B0FF';
const NEON_GREEN = '#39FF14';

export default function CoursesScreen() {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView edges={['top']} />
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* HEADER */}
        <View style={styles.topHeader}>
           <Text style={styles.headerTitle}>DIRECTIVES //</Text>
           <View style={styles.radarBox}>
             <View style={styles.radarInner} />
             <View style={styles.radarSpin} />
           </View>
        </View>

        {/* HERO SYLLABUS CARD */}
        <View style={styles.heroSyllabusBox}>
           <View style={styles.heroShadow} />
           <View style={styles.heroMain}>
              <View style={styles.tapeLeft} />
              <Text style={styles.heroSub}>CLASSIFIED LOG</Text>
              <Text style={styles.heroTitle}>CURRENT OPERATIONS</Text>
              <Text style={styles.heroDesc}>
                 Execute linguistic decryptions across mapped territories.
              </Text>
           </View>
        </View>

        {/* HORIZONTAL DOSSIERS */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.dossierScroll}>
           {/* FILE 1 */}
           <TouchableOpacity activeOpacity={0.9} style={styles.dossierWrap} onPress={() => router.push('/course/1' as any)}>
              <View style={[styles.dossierShadow, { backgroundColor: SKY_BLUE }]} />
              <View style={styles.dossierFolder}>
                 <View style={styles.dossierTab}><Text style={styles.tabText}>TOP SEC</Text></View>
                 <View style={styles.dossierBody}>
                    <Ionicons name="folder-open" size={48} color={BLACK} />
                    <Text style={styles.dossierCode}>TML-01</Text>
                    <Text style={styles.dossierName}>CORE PHONETICS</Text>
                 </View>
              </View>
           </TouchableOpacity>

           {/* FILE 2 */}
           <TouchableOpacity activeOpacity={0.9} style={styles.dossierWrap}>
              <View style={[styles.dossierShadow, { backgroundColor: HYPER_RED }]} />
              <View style={styles.dossierFolder}>
                 <View style={styles.dossierTab}><Text style={styles.tabText}>LOCKED</Text></View>
                 <View style={[styles.dossierBody, { backgroundColor: '#E0E0E0' }]}>
                    <Ionicons name="lock-closed" size={48} color={BLACK} />
                    <Text style={styles.dossierCode}>TML-02</Text>
                    <Text style={styles.dossierName}>GRAMMAR OVERRIDE</Text>
                 </View>
              </View>
           </TouchableOpacity>
        </ScrollView>

        {/* LISTING ARCHIVES */}
        <View style={styles.archiveSection}>
           <Text style={styles.archiveHeader}>COMPLETED INTEL</Text>
           
           <View style={styles.archiveRow}>
              <View style={styles.archiveIcon}><Ionicons name="checkmark" size={24} color={PAPER_WHITE} /></View>
              <View style={styles.archiveTextWrap}>
                 <Text style={styles.archiveTitle}>Basic Greetings</Text>
                 <Text style={styles.archiveDate}>2 DAYS AGO</Text>
              </View>
              <Text style={styles.archiveScore}>100%</Text>
           </View>

           <View style={styles.archiveRow}>
              <View style={styles.archiveIcon}><Ionicons name="checkmark" size={24} color={PAPER_WHITE} /></View>
              <View style={styles.archiveTextWrap}>
                 <Text style={styles.archiveTitle}>Numbers 1-10</Text>
                 <Text style={styles.archiveDate}>4 DAYS AGO</Text>
              </View>
              <Text style={styles.archiveScore}>98%</Text>
           </View>
        </View>

        {/* DAILY BOUNTY COMPONENT */}
        <View style={styles.bountyWrap}>
           <View style={styles.bountyCard}>
              <View style={styles.bountyDecoTap}>
                 <Text style={styles.bountyDecoText}>URGENT</Text>
              </View>
              <Text style={styles.bountyTitle}>DAILY BOUNTY</Text>
              <Text style={styles.bountyDesc}>Complete 3 speaking modules back-to-back with zero translation assistance to earn 500 XP.</Text>
              <TouchableOpacity activeOpacity={0.9} style={styles.bountyBtn}>
                 <Text style={styles.bountyBtnText}>ACCEPT MISSION</Text>
              </TouchableOpacity>
           </View>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: BG },
  scrollContent: { paddingTop: 20 },
  
  topHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, marginBottom: 32 },
  headerTitle: { fontSize: 24, fontWeight: '900', color: BLACK, letterSpacing: 2 },
  radarBox: { width: 40, height: 40, borderRadius: 20, borderWidth: 3, borderColor: BLACK, backgroundColor: NEON_GREEN, justifyContent: 'center', alignItems: 'center', position: 'relative' },
  radarInner: { width: 10, height: 10, borderRadius: 5, backgroundColor: BLACK },
  radarSpin: { position: 'absolute', top: '50%', left: '50%', width: 20, height: 2, backgroundColor: BLACK, transform: [{translateX: -10}, {translateY: -1}] },

  heroSyllabusBox: { marginHorizontal: 24, position: 'relative', marginBottom: 40 },
  heroShadow: { position: 'absolute', top: 8, left: 8, right: -8, bottom: -8, backgroundColor: BLACK },
  heroMain: { backgroundColor: CYBER_YELLOW, padding: 24, borderWidth: 3, borderColor: BLACK, overflow: 'hidden' },
  tapeLeft: { position: 'absolute', left: -20, top: -10, width: 60, height: 140, backgroundColor: 'rgba(255,255,255,0.4)', transform: [{rotate: '15deg'}] },
  heroSub: { fontSize: 12, fontWeight: '900', color: '#555', letterSpacing: 2, marginBottom: 8 },
  heroTitle: { fontSize: 40, fontWeight: '900', color: BLACK, lineHeight: 40, marginBottom: 16 },
  heroDesc: { fontSize: 16, fontWeight: '800', color: BLACK, lineHeight: 22 },

  dossierScroll: { paddingHorizontal: 24, paddingRight: 40, gap: 24, paddingBottom: 20 },
  dossierWrap: { position: 'relative', width: 220, height: 260 },
  dossierShadow: { position: 'absolute', top: 8, left: 8, right: -8, bottom: -8, borderWidth: 3, borderColor: BLACK },
  dossierFolder: { flex: 1, backgroundColor: 'transparent' },
  dossierTab: { alignSelf: 'flex-start', paddingHorizontal: 16, paddingVertical: 8, backgroundColor: BLACK, borderTopLeftRadius: 10, borderTopRightRadius: 10 },
  tabText: { color: PAPER_WHITE, fontSize: 12, fontWeight: '900', letterSpacing: 1 },
  dossierBody: { flex: 1, backgroundColor: PAPER_WHITE, borderWidth: 3, borderColor: BLACK, padding: 20, justifyContent: 'center' },
  dossierCode: { fontSize: 14, fontWeight: '900', color: HYPER_RED, marginTop: 24, marginBottom: 4 },
  dossierName: { fontSize: 24, fontWeight: '900', color: BLACK },

  archiveSection: { marginHorizontal: 24, marginTop: 40 },
  archiveHeader: { fontSize: 16, fontWeight: '900', color: BLACK, letterSpacing: 2, marginBottom: 16 },
  archiveRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: PAPER_WHITE, borderWidth: 3, borderColor: BLACK, padding: 16, marginBottom: 12, shadowColor: BLACK, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 0 },
  archiveIcon: { width: 40, height: 40, backgroundColor: BLACK, justifyContent: 'center', alignItems: 'center' },
  archiveTextWrap: { flex: 1, paddingHorizontal: 16 },
  archiveTitle: { fontSize: 16, fontWeight: '900', color: BLACK },
  archiveDate: { fontSize: 10, fontWeight: '900', color: '#666', marginTop: 4 },
  archiveScore: { fontSize: 20, fontWeight: '900', color: HYPER_RED },

  bountyWrap: { marginHorizontal: 24, marginTop: 40 },
  bountyCard: { backgroundColor: CYBER_YELLOW, borderWidth: 3, borderColor: BLACK, padding: 24, shadowColor: BLACK, shadowOffset: {width: 6, height: 6}, shadowOpacity: 1, shadowRadius: 0, position: 'relative' },
  bountyDecoTap: { position: 'absolute', top: -12, right: 20, backgroundColor: HYPER_RED, borderWidth: 2, borderColor: BLACK, paddingHorizontal: 12, paddingVertical: 4, transform: [{rotate: '6deg'}] },
  bountyDecoText: { fontSize: 10, fontWeight: '900', color: PAPER_WHITE, letterSpacing: 2 },
  bountyTitle: { fontSize: 24, fontWeight: '900', color: BLACK, marginBottom: 12 },
  bountyDesc: { fontSize: 14, fontWeight: '800', color: BLACK, lineHeight: 22, paddingBottom: 24, borderBottomWidth: 3, borderColor: BLACK, marginBottom: 20 },
  bountyBtn: { backgroundColor: BLACK, paddingVertical: 16, alignItems: 'center' },
  bountyBtnText: { fontSize: 16, fontWeight: '900', color: NEON_GREEN, letterSpacing: 2 },
});
