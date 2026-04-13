import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useAppTheme } from '@/hooks/ThemeContext';

// PREMIUM NEURO-BRUTALISM CONSTANTS
const BG = '#F4F1E1';
const BLACK = '#0A0A0A';
const PAPER_WHITE = '#FFFFFF';
const HYPER_RED = '#FF3B30';
const CYBER_YELLOW = '#FFD60A';
const SKY_BLUE = '#30B0FF';
const NEON_GREEN = '#39FF14';

export default function CoursesScreen() {
  const { appBgColor } = useAppTheme();
  return (
    <View style={[styles.mainContainer, { backgroundColor: appBgColor }]}>
      <SafeAreaView edges={['top']} />
      
      {/* MASSIVE BACKGROUND NAME WATERMARK */}
      <View style={styles.bgNameWrap} pointerEvents="none">
         <Text style={styles.bgNameText} adjustsFontSizeToFit={true} minimumFontScale={0.2} numberOfLines={1}>COURSES</Text>
      </View>

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
              
              {/* Fake Paperclip */}
              <View style={styles.paperClipOuter}>
                 <View style={styles.paperClipInner} />
              </View>

              <View style={styles.tapeLeft} />
              
              <Text style={styles.heroSub}>[ SECURITY LEVEL: MAX ]</Text>
              <Text style={styles.heroTitle}>ENCRYPTED{'\n'}OPERATIONS</Text>
              
              <View style={styles.statusBox}>
                 <Text style={styles.statusText}>STATUS: DISPATCHED</Text>
              </View>

              <Text style={styles.heroDesc}>
                 Execute linguistic decryptions across mapped territories. Zero failure tolerated.
              </Text>
           </View>
        </View>

        {/* HORIZONTAL DOSSIERS */}
        {/* HORIZONTAL DOSSIERS */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.dossierScroll}>
           {/* FILE 1 */}
           <TouchableOpacity activeOpacity={0.9} style={styles.dossierWrap} onPress={() => router.push('/course/1' as any)}>
              <View style={[styles.dossierShadow, { backgroundColor: SKY_BLUE }]} />
              <View style={styles.dossierFolder}>
                 <View style={styles.dossierTab}><Text style={styles.tabText}>MISSION 01</Text></View>
                 <View style={styles.dossierBody}>
                    <View style={styles.fileTape} />
                    <Ionicons name="folder-open" size={48} color={BLACK} />
                    <Text style={styles.dossierCode}>TML-01 // ACTIVE</Text>
                    <Text style={styles.dossierName}>CORE{'\n'}PHONETICS</Text>
                 </View>
              </View>
           </TouchableOpacity>

           {/* FILE 2 */}
           <TouchableOpacity activeOpacity={0.9} style={styles.dossierWrap}>
              <View style={[styles.dossierShadow, { backgroundColor: HYPER_RED }]} />
              <View style={styles.dossierFolder}>
                 <View style={styles.dossierTab}><Text style={styles.tabText}>MISSION 02</Text></View>
                 <View style={[styles.dossierBody, { backgroundColor: BLACK }]}>
                    <Ionicons name="lock-closed" size={48} color={HYPER_RED} />
                    <Text style={[styles.dossierCode, {color: '#888'}]}>TML-02 // LOCKED</Text>
                    <Text style={[styles.dossierName, {color: PAPER_WHITE}]}>GRAMMAR{'\n'}OVERRIDE</Text>
                 </View>
              </View>
           </TouchableOpacity>
        </ScrollView>

        {/* LISTING ARCHIVES - DARK TERMINAL READOUT */}
        <View style={styles.archiveSection}>
           <Text style={styles.archiveHeader}>COMPLETED INTEL [ TERMINAL LOG ]</Text>
           
           <View style={styles.terminalBox}>
              <View style={styles.terminalRow}>
                 <View style={styles.terminalIcon}><Ionicons name="git-commit" size={24} color={NEON_GREEN} /></View>
                 <View style={styles.terminalTextWrap}>
                    <Text style={styles.terminalTitle}>Basic Greetings Bypass</Text>
                    <Text style={styles.terminalDate}>LOG: -48:00 HOURS</Text>
                 </View>
                 <Text style={styles.terminalScore}>100%</Text>
              </View>

              <View style={styles.terminalRow}>
                 <View style={styles.terminalIcon}><Ionicons name="git-commit" size={24} color={NEON_GREEN} /></View>
                 <View style={styles.terminalTextWrap}>
                    <Text style={styles.terminalTitle}>Numbers Array Hack</Text>
                    <Text style={styles.terminalDate}>LOG: -96:00 HOURS</Text>
                 </View>
                 <Text style={styles.terminalScore}>98%</Text>
              </View>
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
  mainContainer: { flex: 1, backgroundColor: BG, position: 'relative' },
  scrollContent: { paddingTop: 20 },

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
  
  topHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, marginBottom: 32 },
  headerTitle: { fontSize: 24, fontWeight: '900', color: BLACK, letterSpacing: 2 },
  radarBox: { width: 40, height: 40, borderRadius: 20, borderWidth: 3, borderColor: BLACK, backgroundColor: NEON_GREEN, justifyContent: 'center', alignItems: 'center', position: 'relative' },
  radarInner: { width: 10, height: 10, borderRadius: 5, backgroundColor: BLACK },
  radarSpin: { position: 'absolute', top: '50%', left: '50%', width: 20, height: 2, backgroundColor: BLACK, transform: [{translateX: -10}, {translateY: -1}] },

  heroSyllabusBox: { marginHorizontal: 24, position: 'relative', marginBottom: 40, marginTop: 10 },
  heroShadow: { position: 'absolute', top: 12, left: 12, right: -12, bottom: -12, backgroundColor: BLACK },
  heroMain: { backgroundColor: CYBER_YELLOW, padding: 24, paddingVertical: 32, borderWidth: 4, borderColor: BLACK, overflow: 'visible', position: 'relative' },
  tapeLeft: { position: 'absolute', left: -20, top: 40, width: 80, height: 30, backgroundColor: 'rgba(255,255,255,0.7)', transform: [{rotate: '-15deg'}], borderWidth: 1, borderColor: BLACK, zIndex: 10 },
  paperClipOuter: { position: 'absolute', top: -30, right: 30, width: 24, height: 80, borderWidth: 5, borderColor: '#888', borderRadius: 12, borderBottomWidth: 0, zIndex: 20 },
  paperClipInner: { position: 'absolute', top: 10, right: 0, width: 14, height: 50, borderWidth: 5, borderColor: '#888', borderRadius: 7, borderTopWidth: 0 },
  
  heroSub: { fontSize: 12, fontWeight: '900', color: HYPER_RED, letterSpacing: 2, marginBottom: 8, fontFamily: 'monospace' },
  heroTitle: { fontSize: 44, fontWeight: '900', color: BLACK, lineHeight: 44, marginBottom: 16, letterSpacing: -2 },
  statusBox: { alignSelf: 'flex-start', backgroundColor: BLACK, paddingHorizontal: 12, paddingVertical: 6, marginBottom: 16, transform: [{rotate: '2deg'}] },
  statusText: { color: PAPER_WHITE, fontSize: 12, fontWeight: '900', letterSpacing: 1 },
  heroDesc: { fontSize: 16, fontWeight: '800', color: BLACK, lineHeight: 24 },

  dossierScroll: { paddingHorizontal: 24, paddingRight: 40, gap: 24, paddingBottom: 30 },
  dossierWrap: { position: 'relative', width: 240, height: 280 },
  dossierShadow: { position: 'absolute', top: 8, left: 8, right: -8, bottom: -8, borderWidth: 4, borderColor: BLACK },
  dossierFolder: { flex: 1, backgroundColor: 'transparent' },
  dossierTab: { alignSelf: 'flex-start', paddingHorizontal: 16, paddingVertical: 8, backgroundColor: BLACK, borderTopLeftRadius: 10, borderTopRightRadius: 10 },
  tabText: { color: PAPER_WHITE, fontSize: 12, fontWeight: '900', letterSpacing: 1 },
  dossierBody: { flex: 1, backgroundColor: PAPER_WHITE, borderWidth: 4, borderColor: BLACK, padding: 24, justifyContent: 'center', position: 'relative' },
  fileTape: { position: 'absolute', top: 10, right: 10, width: 40, height: 16, backgroundColor: HYPER_RED, transform: [{rotate: '10deg'}] },
  dossierCode: { fontSize: 13, fontWeight: '900', color: HYPER_RED, marginTop: 24, marginBottom: 4, letterSpacing: 1 },
  dossierName: { fontSize: 32, fontWeight: '900', color: BLACK, lineHeight: 32, letterSpacing: -1 },

  archiveSection: { marginHorizontal: 24, marginTop: 40 },
  archiveHeader: { fontSize: 14, fontWeight: '900', color: BLACK, letterSpacing: 1, marginBottom: 16 },
  terminalBox: { backgroundColor: BLACK, borderWidth: 4, borderColor: BLACK, padding: 20 },
  terminalRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: BLACK, borderBottomWidth: 2, borderColor: '#333', paddingVertical: 16 },
  terminalIcon: { width: 40, height: 40, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' },
  terminalTextWrap: { flex: 1, paddingHorizontal: 16 },
  terminalTitle: { fontSize: 16, fontWeight: '900', color: PAPER_WHITE },
  terminalDate: { fontSize: 10, fontWeight: '900', color: NEON_GREEN, marginTop: 4, fontFamily: 'monospace' },
  terminalScore: { fontSize: 20, fontWeight: '900', color: NEON_GREEN },

  bountyWrap: { marginHorizontal: 24, marginTop: 40 },
  bountyCard: { backgroundColor: CYBER_YELLOW, borderWidth: 3, borderColor: BLACK, padding: 24, shadowColor: BLACK, shadowOffset: {width: 6, height: 6}, shadowOpacity: 1, shadowRadius: 0, position: 'relative' },
  bountyDecoTap: { position: 'absolute', top: -12, right: 20, backgroundColor: HYPER_RED, borderWidth: 2, borderColor: BLACK, paddingHorizontal: 12, paddingVertical: 4, transform: [{rotate: '6deg'}] },
  bountyDecoText: { fontSize: 10, fontWeight: '900', color: PAPER_WHITE, letterSpacing: 2 },
  bountyTitle: { fontSize: 24, fontWeight: '900', color: BLACK, marginBottom: 12 },
  bountyDesc: { fontSize: 14, fontWeight: '800', color: BLACK, lineHeight: 22, paddingBottom: 24, borderBottomWidth: 3, borderColor: BLACK, marginBottom: 20 },
  bountyBtn: { backgroundColor: BLACK, paddingVertical: 16, alignItems: 'center' },
  bountyBtnText: { fontSize: 16, fontWeight: '900', color: NEON_GREEN, letterSpacing: 2 },
});
