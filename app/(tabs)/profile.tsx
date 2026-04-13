import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const BG = '#F4F1E1';
const BLACK = '#0A0A0A';
const PAPER_WHITE = '#FFFFFF';
const HYPER_RED = '#FF3B30';
const CYBER_YELLOW = '#FFD60A';
const SKY_BLUE = '#30B0FF';
const NEON_GREEN = '#39FF14';

export default function ProfileScreen() {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView edges={['top']} />
      
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* HUGE PAGE TITLE */}
        <View style={styles.pageHeader}>
           <Text style={styles.pageTitleShadow}>DOSSIER</Text>
           <Text style={styles.pageTitle}>DOSSIER</Text>
           <View style={styles.confidentialStamp}>
              <Text style={styles.confidentialText}>TOP SECRET</Text>
           </View>
        </View>

        {/* CREATIVE BRUTALIST ID CARD */}
        <View style={styles.idWrap}>
           <View style={styles.idShadow} />
           <View style={styles.idCard}>
              
              {/* Massive Sideways Serial */}
              <View style={styles.sidewaysWrap}>
                 <Text style={styles.sidewaysText}>SEC-01 // NO. 883921</Text>
              </View>

              {/* Photo & Tape Chaos */}
              <View style={styles.photoSection}>
                 <View style={styles.photoShadow} />
                 <View style={styles.bigTape} />
                 <Image 
                   source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80' }}
                   style={styles.heroImage}
                 />
                 <View style={styles.smallTape} />
              </View>

              <View style={styles.idDetails}>
                 <Text style={styles.idLabel}>LEGAL ALIAS</Text>
                 <Text style={styles.idName}>PRIYA R.</Text>
                 
                 <View style={styles.badgeRow}>
                    <View style={styles.classBadge}>
                       <Text style={styles.classBadgeText}>LINGUIST</Text>
                    </View>
                    <View style={styles.levelBadge}>
                       <Text style={styles.levelBadgeText}>LVL 42</Text>
                    </View>
                 </View>
              </View>

           </View>
        </View>

        {/* OFFSET STATS CLUSTER */}
        <View style={styles.statsCluster}>
           <View style={[styles.statBox, styles.statBox1]}>
              <Text style={styles.statVal}>21</Text>
              <Text style={styles.statLabel}>STREAK</Text>
           </View>
           <View style={[styles.statBox, styles.statBox2]}>
              <Text style={styles.statVal}>TOP 5%</Text>
              <Text style={styles.statLabel}>GLOBAL</Text>
           </View>
           <View style={[styles.statBox, styles.statBox3]}>
              <Text style={styles.statVal}>9.5</Text>
              <Text style={styles.statLabel}>K/D RATIO</Text>
           </View>
        </View>

        {/* EXTREME QR CONNECTION BLOCK */}
        <View style={styles.qrWrap}>
           {/* Hazard stripes behind */}
           <View style={styles.hazardBg}>
              {[...Array(10)].map((_, i) => (
                 <View key={i} style={styles.hazardStripe} />
              ))}
           </View>
           
           <View style={styles.qrCard}>
             <View style={styles.qrHeaderRow}>
                <Text style={styles.qrHeader}>NODE SYNC</Text>
                <Ionicons name="radio" size={24} color={HYPER_RED} />
             </View>
             
             <View style={styles.qrContent}>
                <View style={styles.qrTextSpace}>
                   <Text style={styles.qrDesc}>PRESENT TO VERIFY OPERATIVE IDENTITY CONFIRMATION.</Text>
                </View>
                <View style={styles.qrBox}>
                   <View style={styles.qrCornerTopLeft} />
                   <View style={styles.qrCornerBottomRight} />
                   <Image source={{uri: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PRIYA_R_SEC01_MITHRA'}} style={styles.qrVisual} />
                </View>
             </View>
           </View>
        </View>

        {/* ASYMMETRICAL QUICK MENU */}
        <View style={styles.menuGrid}>
           <TouchableOpacity activeOpacity={0.9} style={styles.btnOffset1}>
              <View style={styles.btnShadow} />
              <View style={[styles.btnFront, { backgroundColor: CYBER_YELLOW }]}>
                 <Text style={styles.btnText}>SYS.CONFIG</Text>
                 <Ionicons name="settings" size={24} color={BLACK} />
              </View>
           </TouchableOpacity>

           <TouchableOpacity activeOpacity={0.9} style={styles.btnOffset2}>
              <View style={styles.btnShadow} />
              <View style={[styles.btnFront, { backgroundColor: SKY_BLUE }]}>
                 <Text style={styles.btnText}>EXTRACT LOGS</Text>
                 <Ionicons name="download" size={24} color={BLACK} />
              </View>
           </TouchableOpacity>

           <TouchableOpacity activeOpacity={0.9} style={styles.btnOffset3}>
              <View style={[styles.btnShadow, { backgroundColor: HYPER_RED }]} />
              <View style={[styles.btnFront, { backgroundColor: BLACK, borderColor: BLACK }]}>
                 <Text style={[styles.btnText, { color: PAPER_WHITE }]}>ABORT / LOGOUT</Text>
                 <Ionicons name="warning" size={24} color={HYPER_RED} />
              </View>
           </TouchableOpacity>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: BG },
  scrollContainer: { paddingHorizontal: 20, paddingTop: 20 },
  
  pageHeader: { position: 'relative', height: 80, marginBottom: 20 },
  pageTitleShadow: { position: 'absolute', top: 6, left: 6, fontSize: 56, fontWeight: '900', color: NEON_GREEN, letterSpacing: -2 },
  pageTitle: { fontSize: 56, fontWeight: '900', color: BLACK, letterSpacing: -2, zIndex: 2 },
  confidentialStamp: { position: 'absolute', right: 10, top: 20, borderWidth: 3, borderColor: HYPER_RED, paddingHorizontal: 8, paddingVertical: 4, transform: [{rotate: '15deg'}], zIndex: 10 },
  confidentialText: { color: HYPER_RED, fontWeight: '900', fontSize: 16, letterSpacing: 2 },

  idWrap: { position: 'relative', marginBottom: 60, marginTop: 20 },
  idShadow: { position: 'absolute', top: 12, left: 12, right: -12, bottom: -12, backgroundColor: BLACK },
  idCard: { backgroundColor: PAPER_WHITE, borderWidth: 4, borderColor: BLACK, padding: 24, paddingLeft: 48, minHeight: 180 },
  
  sidewaysWrap: { position: 'absolute', left: -50, top: 100, transform: [{rotate: '-90deg'}], width: 200, alignItems: 'center' },
  sidewaysText: { fontSize: 14, fontWeight: '900', color: '#CCC', letterSpacing: 4, fontFamily: 'monospace' },
  
  photoSection: { position: 'absolute', top: -30, right: 20, width: 110, height: 130, zIndex: 10 },
  photoShadow: { position: 'absolute', top: 6, left: 6, right: -6, bottom: -6, backgroundColor: CYBER_YELLOW, borderWidth: 3, borderColor: BLACK },
  heroImage: { width: '100%', height: '100%', borderWidth: 3, borderColor: BLACK, resizeMode: 'cover' },
  bigTape: { position: 'absolute', top: -10, left: -20, width: 80, height: 24, backgroundColor: HYPER_RED, transform: [{rotate: '-10deg'}], borderWidth: 2, borderColor: BLACK, zIndex: 15 },
  smallTape: { position: 'absolute', bottom: -5, right: -15, width: 50, height: 16, backgroundColor: BLACK, transform: [{rotate: '15deg'}], zIndex: 15 },

  idDetails: { marginTop: 40, paddingRight: 80 },
  idLabel: { fontSize: 12, fontWeight: '900', color: BLACK, letterSpacing: 2, marginBottom: 4 },
  idName: { fontSize: 40, fontWeight: '900', color: BLACK, letterSpacing: -1, lineHeight: 40, marginBottom: 16 },
  
  badgeRow: { flexDirection: 'row', gap: 12 },
  classBadge: { backgroundColor: BLACK, paddingHorizontal: 12, paddingVertical: 6 },
  classBadgeText: { color: PAPER_WHITE, fontSize: 14, fontWeight: '900', letterSpacing: 1 },
  levelBadge: { backgroundColor: SKY_BLUE, paddingHorizontal: 12, paddingVertical: 6, borderWidth: 2, borderColor: BLACK },
  levelBadgeText: { color: BLACK, fontSize: 14, fontWeight: '900', letterSpacing: 1 },

  statsCluster: { flexDirection: 'row', justifyContent: 'center', marginBottom: 60, height: 120, position: 'relative' },
  statBox: { position: 'absolute', padding: 16, borderWidth: 3, borderColor: BLACK, shadowColor: BLACK, shadowOffset: {width: 4, height: 4}, shadowOpacity: 1, shadowRadius: 0, alignItems: 'center', justifyContent: 'center', width: 110, height: 90 },
  statVal: { fontSize: 24, fontWeight: '900', color: BLACK, marginBottom: 4 },
  statLabel: { fontSize: 10, fontWeight: '900', color: BLACK, letterSpacing: 1 },
  
  statBox1: { backgroundColor: NEON_GREEN, left: 10, top: 10, transform: [{rotate: '-8deg'}], zIndex: 3 },
  statBox2: { backgroundColor: HYPER_RED, left: 110, top: 30, transform: [{rotate: '4deg'}], zIndex: 2 },
  statBox3: { backgroundColor: PAPER_WHITE, right: 10, top: -10, transform: [{rotate: '12deg'}], zIndex: 1 },

  qrWrap: { position: 'relative', marginBottom: 48, backgroundColor: BLACK, padding: 16, overflow: 'hidden' },
  hazardBg: { position: 'absolute', top: -50, bottom: -50, left: -50, right: -50, flexDirection: 'row', opacity: 0.2 },
  hazardStripe: { width: 40, height: 400, backgroundColor: CYBER_YELLOW, transform: [{rotate: '45deg'}], marginRight: 20 },
  
  qrCard: { backgroundColor: PAPER_WHITE, borderWidth: 4, borderColor: BLACK, padding: 20 },
  qrHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 3, borderColor: BLACK, paddingBottom: 12, marginBottom: 16 },
  qrHeader: { fontSize: 24, fontWeight: '900', letterSpacing: 2, color: BLACK },
  qrContent: { flexDirection: 'row', alignItems: 'center' },
  qrTextSpace: { flex: 1, paddingRight: 16 },
  qrDesc: { fontSize: 14, fontWeight: '900', lineHeight: 22, color: BLACK },
  
  qrBox: { position: 'relative', width: 110, height: 110, padding: 4, backgroundColor: PAPER_WHITE, borderWidth: 3, borderColor: BLACK },
  qrCornerTopLeft: { position: 'absolute', top: -8, left: -8, width: 16, height: 16, backgroundColor: HYPER_RED, borderWidth: 2, borderColor: BLACK, zIndex: 10 },
  qrCornerBottomRight: { position: 'absolute', bottom: -8, right: -8, width: 16, height: 16, backgroundColor: CYBER_YELLOW, borderWidth: 2, borderColor: BLACK, zIndex: 10 },
  qrVisual: { width: '100%', height: '100%', resizeMode: 'cover' },

  menuGrid: { gap: 24, paddingHorizontal: 10 },
  btnShadow: { position: 'absolute', top: 6, left: 6, right: -6, bottom: -6, backgroundColor: BLACK },
  btnFront: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, borderWidth: 4, borderColor: BLACK },
  btnText: { fontSize: 18, fontWeight: '900', letterSpacing: 1 },
  
  btnOffset1: { transform: [{rotate: '-1deg'}] },
  btnOffset2: { transform: [{rotate: '1.5deg'}], width: '95%', alignSelf: 'flex-end' },
  btnOffset3: { transform: [{rotate: '-2deg'}], width: '90%', alignSelf: 'center', marginTop: 10 },
});
