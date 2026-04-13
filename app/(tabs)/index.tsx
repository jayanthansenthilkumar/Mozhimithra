import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

// PREMIUM NEURO-BRUTALISM CONSTANTS
const BG = '#F4F1E1'; // Architectural Off-White
const BLACK = '#0A0A0A'; // Pitch Black
const PAPER_WHITE = '#FFFFFF';
const HYPER_RED = '#FF3B30';
const CYBER_YELLOW = '#FFD60A';
const SKY_BLUE = '#30B0FF';

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView edges={['top']} />
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* RAW BRUTALIST BRANDING & HEADER */}
        <View style={styles.topHeader}>
          <View style={styles.brandBadge}>
            <Text style={styles.brandLogo}>M[ozhi]</Text>
          </View>
          <View style={styles.avatarWrapper}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80' }} 
              style={styles.avatarImg} 
            />
            {/* Hard shadow under avatar */}
            <View style={styles.avatarShadow} />
          </View>
        </View>

        {/* MASSIVE TYPOGRAPHIC GREETING */}
        <View style={styles.greetingBox}>
          <Text style={styles.massiveText}>NAMASTE,</Text>
          <View style={styles.nameRow}>
            <Text style={styles.massiveText}>PRIYA.</Text>
            <View style={styles.yellowAsterisk}>
               <Ionicons name="sparkles" size={32} color={BLACK} />
            </View>
          </View>
        </View>

        {/* THE "BOARDING PASS" TICKET COMPONENT */}
        <View style={styles.ticketWrapper}>
          <View style={styles.ticketShadow} />
          
          <View style={styles.ticketMain}>
            
            {/* Ticket Header */}
            <View style={styles.ticketTopRow}>
              <View>
                <Text style={styles.ticketLabel}>CURRENT COURSE</Text>
                <Text style={styles.ticketRoute}>BGN</Text>
              </View>
              <Ionicons name="arrow-forward" size={36} color={BLACK} />
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.ticketLabel}>DESTINATION</Text>
                <Text style={styles.ticketRoute}>FLD</Text>
              </View>
            </View>

            {/* Perforated Fold Line */}
            <View style={styles.perforationRow}>
              <View style={styles.holeCutoutLeft} />
              <View style={styles.dashLine} />
              <View style={styles.holeCutoutRight} />
            </View>

            {/* Ticket Body */}
            <View style={styles.ticketBody}>
               <View style={styles.metaGrid}>
                 <View style={styles.metaCell}>
                    <Text style={styles.cellLabel}>MODULE NO.</Text>
                    <Text style={styles.cellValue}>04</Text>
                 </View>
                 <View style={[styles.metaCell, styles.cellBorderLeft]}>
                    <Text style={styles.cellLabel}>SECTOR</Text>
                    <Text style={styles.cellValue}>Speaking</Text>
                 </View>
               </View>

               <Text style={styles.challengeSubject}>"Food & Dining Interactions"</Text>

               <TouchableOpacity activeOpacity={0.9} style={styles.brutalBtn} onPress={() => router.push('/course/1' as any)}>
                  <View style={styles.btnShadow} />
                  <View style={styles.btnFront}>
                     <Text style={styles.btnText}>INITIATE LESSON</Text>
                  </View>
               </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* DIAGONAL OVERLAPPING STAT CARDS */}
        <View style={styles.chaosGrid}>
          
          <View style={[styles.chaosCard, styles.chaosYellow]}>
             <View style={styles.chaosPin}>
                <Ionicons name="flame" size={24} color={BLACK} />
             </View>
             <Text style={styles.chaosTitle}>21</Text>
             <Text style={styles.chaosSub}>DAY STREAK</Text>
          </View>

          <View style={[styles.chaosCard, styles.chaosBlue]}>
             <View style={styles.chaosPin}>
                <Ionicons name="ribbon" size={24} color={BLACK} />
             </View>
             <Text style={styles.chaosTitle}>TOP</Text>
             <Text style={styles.chaosSub}>5% RANKING</Text>
          </View>

        </View>

        {/* BRUTALIST MARQUEE / FOOTER BLOCK */}
        <View style={styles.footerTape}>
           <Text style={styles.tapeText} numberOfLines={1}>
              NO EXCUSES // LEARN TODAY // NO EXCUSES // LEARN TODAY //
           </Text>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: BG },
  scrollContent: { paddingTop: 20 },
  
  // HEADER
  topHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, marginBottom: 24 },
  brandBadge: { paddingHorizontal: 12, paddingVertical: 6, backgroundColor: BLACK, transform: [{ rotate: '-2deg' }] },
  brandLogo: { color: PAPER_WHITE, fontSize: 18, fontWeight: '900', letterSpacing: 2 },
  
  avatarWrapper: { position: 'relative' },
  avatarImg: { width: 48, height: 48, borderRadius: 0, borderWidth: 3, borderColor: BLACK, zIndex: 2, backgroundColor: PAPER_WHITE },
  avatarShadow: { position: 'absolute', top: 4, left: 4, width: 48, height: 48, backgroundColor: HYPER_RED, zIndex: 1 },

  // GREETING
  greetingBox: { paddingHorizontal: 24, marginBottom: 40 },
  massiveText: { fontSize: 56, fontWeight: '900', color: BLACK, lineHeight: 60, letterSpacing: -2 },
  nameRow: { flexDirection: 'row', alignItems: 'center' },
  yellowAsterisk: { marginLeft: 16, width: 60, height: 60, borderRadius: 30, backgroundColor: CYBER_YELLOW, borderWidth: 3, borderColor: BLACK, justifyContent: 'center', alignItems: 'center', transform: [{ rotate: '15deg' }] },

  // BOARDING PASS TICKET
  ticketWrapper: { position: 'relative', marginHorizontal: 20, marginBottom: 40 },
  ticketShadow: { position: 'absolute', top: 8, left: 8, right: -8, bottom: -8, backgroundColor: BLACK, borderRadius: 0 },
  ticketMain: { backgroundColor: PAPER_WHITE, borderWidth: 3, borderColor: BLACK, borderRadius: 0 },
  
  ticketTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 24, backgroundColor: CYBER_YELLOW },
  ticketLabel: { fontSize: 11, fontWeight: '900', color: BLACK, letterSpacing: 1.5, marginBottom: 4 },
  ticketRoute: { fontSize: 40, fontWeight: '900', color: BLACK, letterSpacing: -1 },
  
  perforationRow: { height: 32, flexDirection: 'row', alignItems: 'center', backgroundColor: PAPER_WHITE, position: 'relative' },
  holeCutoutLeft: { position: 'absolute', left: -16, width: 32, height: 32, borderRadius: 16, backgroundColor: BG, borderWidth: 3, borderColor: BLACK },
  holeCutoutRight: { position: 'absolute', right: -16, width: 32, height: 32, borderRadius: 16, backgroundColor: BG, borderWidth: 3, borderColor: BLACK },
  dashLine: { flex: 1, marginHorizontal: 24, height: 0, borderBottomWidth: 3, borderBottomColor: BLACK, borderStyle: 'dashed' },

  ticketBody: { padding: 24, backgroundColor: PAPER_WHITE },
  metaGrid: { flexDirection: 'row', marginBottom: 24, borderTopWidth: 3, borderBottomWidth: 3, borderColor: BLACK },
  metaCell: { flex: 1, paddingVertical: 16 },
  cellBorderLeft: { borderLeftWidth: 3, borderColor: BLACK, paddingLeft: 16 },
  cellLabel: { fontSize: 12, fontWeight: '900', color: '#666', marginBottom: 4 },
  cellValue: { fontSize: 20, fontWeight: '900', color: BLACK },
  
  challengeSubject: { fontSize: 24, fontWeight: '900', color: BLACK, marginBottom: 32, lineHeight: 32 },

  // BRUTAL BUTTON
  brutalBtn: { position: 'relative', height: 64, alignSelf: 'stretch' },
  btnShadow: { position: 'absolute', top: 6, left: 6, right: -6, bottom: -6, backgroundColor: BLACK },
  btnFront: { flex: 1, backgroundColor: HYPER_RED, borderWidth: 3, borderColor: BLACK, justifyContent: 'center', alignItems: 'center' },
  btnText: { color: PAPER_WHITE, fontSize: 18, fontWeight: '900', letterSpacing: 2 },

  // CHAOS GRID
  chaosGrid: { flexDirection: 'row', paddingHorizontal: 24, height: 200, position: 'relative', marginBottom: 40 },
  chaosCard: { position: 'absolute', width: '55%', height: 160, padding: 20, borderWidth: 3, borderColor: BLACK, justifyContent: 'center' },
  chaosYellow: { backgroundColor: CYBER_YELLOW, left: 24, top: 0, transform: [{ rotate: '-6deg' }], zIndex: 2 },
  chaosBlue: { backgroundColor: SKY_BLUE, right: 24, top: 20, transform: [{ rotate: '4deg' }], zIndex: 1 },
  chaosPin: { position: 'absolute', top: 10, right: 10, width: 44, height: 44, borderRadius: 22, backgroundColor: PAPER_WHITE, borderWidth: 3, borderColor: BLACK, justifyContent: 'center', alignItems: 'center' },
  chaosTitle: { fontSize: 48, fontWeight: '900', color: BLACK, letterSpacing: -2 },
  chaosSub: { fontSize: 14, fontWeight: '900', color: BLACK, letterSpacing: 1 },

  // FOOTER TAPE
  footerTape: { paddingVertical: 16, backgroundColor: BLACK, transform: [{ rotate: '2deg' }], marginHorizontal: -20 },
  tapeText: { color: CYBER_YELLOW, fontSize: 24, fontWeight: '900', letterSpacing: 4, textAlign: 'center' },
});
