import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

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
        
        {/* ID BOARDING PASS FRONT */}
        <View style={styles.idCardWrap}>
           <View style={styles.idCardShadow} />
           <View style={styles.idCardFront}>
              
              {/* Top Banner */}
              <View style={styles.idTopBanner}>
                 <Text style={styles.idTopText}>OPERATIVE SEC-01</Text>
                 <Ionicons name="barcode" size={32} color={PAPER_WHITE} />
              </View>

              {/* Photo & Identity Section */}
              <View style={styles.identityRow}>
                 <View style={styles.photoContainer}>
                    <View style={styles.photoTape1} />
                    <View style={styles.photoTape2} />
                    <Image 
                      source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80' }}
                      style={styles.heroImage}
                    />
                 </View>
                 <View style={styles.infoCol}>
                    <Text style={styles.label}>LEGAL NAME</Text>
                    <Text style={styles.valName}>PRIYA R.</Text>
                    
                    <Text style={[styles.label, { marginTop: 16 }]}>CLASS</Text>
                    <View style={styles.classBadge}>
                       <Text style={styles.classBadgeText}>LINGUIST</Text>
                    </View>
                 </View>
              </View>

              {/* Stats Strip */}
              <View style={styles.statsStrip}>
                 <View style={styles.statBox}>
                    <Text style={styles.statVal}>21</Text>
                    <Text style={styles.statLabel}>DAYS</Text>
                 </View>
                 <View style={styles.statDivider} />
                 <View style={styles.statBox}>
                    <Text style={styles.statVal}>5%</Text>
                    <Text style={styles.statLabel}>RANK</Text>
                 </View>
                 <View style={styles.statDivider} />
                 <View style={styles.statBox}>
                    <Text style={[styles.statVal, { color: HYPER_RED }]}>9.5</Text>
                    <Text style={styles.statLabel}>SCORE</Text>
                 </View>
              </View>

           </View>
        </View>

        {/* QR CODE CONNECTION BLOCK */}
        <View style={styles.qrBlockWrap}>
           <Text style={styles.qrHeader}>SYNC CONNECTION</Text>
           <View style={styles.qrInner}>
              <View style={styles.qrLeft}>
                 <Text style={styles.qrCodeText}>SCAN FOR DIRECT PEER SYNC OVERRIDE.</Text>
                 <View style={styles.qrDecoBox}><View style={styles.qrDecoInner}/></View>
              </View>
              <View style={styles.qrVisualWrap}>
                 {/* USING QrServer API for dynamically generated mock code */}
                 <Image source={{uri: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PRIYA_R_SEC01_MITHRA'}} style={styles.qrVisual} />
              </View>
           </View>
        </View>

        {/* QUICK MENU */}
        <View style={styles.actionGrid}>
           <TouchableOpacity activeOpacity={0.9} style={[styles.actionBtn, { backgroundColor: CYBER_YELLOW }]}>
              <Ionicons name="settings" size={24} color={BLACK} />
              <Text style={styles.actionBtnText}>CONFIGURATIONS</Text>
           </TouchableOpacity>

           <TouchableOpacity activeOpacity={0.9} style={[styles.actionBtn, { backgroundColor: SKY_BLUE }]}>
              <Ionicons name="time" size={24} color={BLACK} />
              <Text style={styles.actionBtnText}>ACCESS LOGS</Text>
           </TouchableOpacity>

           <TouchableOpacity activeOpacity={0.9} style={[styles.actionBtn, { backgroundColor: PAPER_WHITE }]}>
              <Ionicons name="log-out" size={24} color={BLACK} />
              <Text style={styles.actionBtnText}>SYSTEM HALT</Text>
           </TouchableOpacity>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: BG },
  scrollContainer: { paddingHorizontal: 24, paddingTop: 20 },
  
  idCardWrap: { position: 'relative', marginBottom: 40 },
  idCardShadow: { position: 'absolute', top: 10, left: 10, right: -10, bottom: -10, backgroundColor: BLACK },
  idCardFront: { backgroundColor: PAPER_WHITE, borderWidth: 3, borderColor: BLACK },
  
  idTopBanner: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: BLACK, padding: 16 },
  idTopText: { color: PAPER_WHITE, fontSize: 16, fontWeight: '900', letterSpacing: 4 },
  
  identityRow: { flexDirection: 'row', padding: 24, borderBottomWidth: 3, borderColor: BLACK },
  photoContainer: { position: 'relative', width: 120, height: 140, borderWidth: 3, borderColor: BLACK, backgroundColor: '#CCC', marginRight: 24 },
  photoTape1: { position: 'absolute', top: -10, left: -10, width: 40, height: 16, backgroundColor: 'rgba(255,59,48,0.5)', transform: [{rotate: '-15deg'}], zIndex: 10, borderWidth: 1, borderColor: BLACK },
  photoTape2: { position: 'absolute', bottom: -10, right: -10, width: 40, height: 16, backgroundColor: 'rgba(255,255,255,0.7)', transform: [{rotate: '10deg'}], zIndex: 10, borderWidth: 1, borderColor: BLACK },
  heroImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  
  infoCol: { flex: 1, justifyContent: 'center' },
  label: { fontSize: 10, fontWeight: '900', color: HYPER_RED, letterSpacing: 2, marginBottom: 4 },
  valName: { fontSize: 28, fontWeight: '900', color: BLACK, lineHeight: 32 },
  classBadge: { backgroundColor: NEON_GREEN, alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 4, borderWidth: 2, borderColor: BLACK },
  classBadgeText: { fontSize: 12, fontWeight: '900', color: BLACK, letterSpacing: 1 },

  statsStrip: { flexDirection: 'row', backgroundColor: PAPER_WHITE },
  statBox: { flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' },
  statDivider: { width: 3, backgroundColor: BLACK },
  statVal: { fontSize: 32, fontWeight: '900', color: BLACK, marginBottom: 4 },
  statLabel: { fontSize: 10, fontWeight: '900', color: '#666', letterSpacing: 2 },

  actionGrid: { gap: 16 },
  actionBtn: { flexDirection: 'row', alignItems: 'center', padding: 20, borderWidth: 3, borderColor: BLACK, shadowColor: BLACK, shadowOffset: {width: 4, height: 4}, shadowOpacity: 1, shadowRadius: 0 },
  actionBtnText: { fontSize: 16, fontWeight: '900', color: BLACK, letterSpacing: 1, marginLeft: 16 },

  qrBlockWrap: { marginBottom: 40 },
  qrHeader: { fontSize: 16, fontWeight: '900', color: HYPER_RED, letterSpacing: 2, marginBottom: 16 },
  qrInner: { flexDirection: 'row', backgroundColor: PAPER_WHITE, borderWidth: 3, borderColor: BLACK, padding: 16, shadowColor: BLACK, shadowOffset: {width: 4, height: 4}, shadowOpacity: 1, shadowRadius: 0 },
  qrLeft: { flex: 1, paddingRight: 16, justifyContent: 'space-between' },
  qrCodeText: { fontSize: 14, fontWeight: '900', color: BLACK, lineHeight: 20 },
  qrDecoBox: { width: 40, height: 40, borderWidth: 3, borderColor: BLACK, justifyContent: 'center', alignItems: 'center' },
  qrDecoInner: { width: 16, height: 16, backgroundColor: BLACK },
  qrVisualWrap: { width: 100, height: 100, borderWidth: 3, borderColor: BLACK, backgroundColor: PAPER_WHITE, padding: 4 },
  qrVisual: { width: '100%', height: '100%', resizeMode: 'contain' },
});
