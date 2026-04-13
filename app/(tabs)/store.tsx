import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useAppTheme } from '@/hooks/ThemeContext';

const BG = '#F4F1E1';
const BLACK = '#0A0A0A';
const PAPER_WHITE = '#FFFFFF';
const HYPER_RED = '#FF3B30';
const CYBER_YELLOW = '#FFD60A';
const SKY_BLUE = '#30B0FF';
const NEON_GREEN = '#39FF14';

const STORE_ITEMS = [
  {
    id: '1',
    title: 'STREAK FREEZE',
    desc: 'AVOID LOSING STREAK FOR 1 DAY',
    cost: 500,
    color: SKY_BLUE,
    icon: 'snow'
  },
  {
    id: '2',
    title: 'XP MULTIPLIER',
    desc: 'DBL XP FOR 24H SECTOR ACCESS',
    cost: 1200,
    color: CYBER_YELLOW,
    icon: 'flash'
  },
  {
    id: '3',
    title: 'NIGHT VISION',
    desc: 'UNLOCK EXCLUSIVE DARK MODE TIER',
    cost: 5000,
    color: BLACK,
    icon: 'moon'
  },
  {
    id: '4',
    title: 'HEART REFILL',
    desc: 'BACK TO 100% OPERATIONAL CAPACITY',
    cost: 200,
    color: HYPER_RED,
    icon: 'heart'
  }
];

export default function StoreScreen() {
  const { appBgColor } = useAppTheme();
  return (
    <View style={[styles.mainContainer, { backgroundColor: appBgColor }]}>
      <SafeAreaView edges={['top']} />
      
      {/* MASSIVE BACKGROUND NAME WATERMARK */}
      <View style={styles.bgNameWrap} pointerEvents="none">
         <Text style={styles.bgNameText} adjustsFontSizeToFit={true} minimumFontScale={0.2} numberOfLines={1}>BLACK MARKET</Text>
      </View>

      {/* HEADER SECTION */}
      <View style={styles.header}>
         <View style={styles.headerTitleBox}>
            <Text style={styles.titleShadow}>SUPPLIES</Text>
            <Text style={styles.headerTitle}>SUPPLIES</Text>
         </View>
         <Text style={styles.headerSub}>BLACK MARKET // SECTOR 7</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
         
         {/* BALANCE HERO */}
         <View style={styles.balanceWrap}>
            <View style={styles.balanceShadow} />
            <View style={styles.balanceCard}>
               <Text style={styles.balanceLabel}>OPERATIVE BALANCE</Text>
               <View style={styles.balanceRow}>
                  <Text style={styles.balanceValue}>14,500</Text>
                  <View style={styles.coinPill}>
                     <Ionicons name="cash" size={20} color={BLACK} />
                     <Text style={styles.coinPillText}>CREDITS</Text>
                  </View>
               </View>
            </View>
         </View>

         {/* STORE LIST */}
         <View style={styles.listContainer}>
            {STORE_ITEMS.map((item) => (
               <View key={item.id} style={styles.itemWrap}>
                  <View style={styles.itemShadow} />
                  <View style={[styles.itemCard, item.color === BLACK && { backgroundColor: BLACK }]}>
                     
                     {/* Icon Box */}
                     <View style={[styles.iconBox, { backgroundColor: item.color }]}>
                        <Ionicons name={item.icon as any} size={36} color={item.color === BLACK || item.color === HYPER_RED ? PAPER_WHITE : BLACK} />
                     </View>
                     
                     {/* Info */}
                     <View style={styles.itemBody}>
                        <Text style={[styles.itemTitle, item.color === BLACK && { color: PAPER_WHITE }]}>{item.title}</Text>
                        <Text style={[styles.itemDesc, item.color === BLACK && { color: '#888' }]}>{item.desc}</Text>
                     </View>

                     {/* Buy Button */}
                     <TouchableOpacity activeOpacity={0.9} style={styles.buyBtn}>
                        <Text style={styles.buyBtnText}>{item.cost}</Text>
                        <Ionicons name="cart" size={16} color={BLACK} style={{ marginLeft: 4 }} />
                     </TouchableOpacity>

                  </View>
               </View>
            ))}
         </View>

         {/* PROMO POSTER BLOCK */}
         <View style={styles.promoWrap}>
           <View style={styles.promoShadow} />
           <View style={styles.promoBox}>
              <View style={styles.promoTape} />
              <Text style={styles.promoHeader}>ELITE SUPPLY DROP INBOUD!</Text>
              <Text style={styles.promoSub}>RESTOCKING IN 24:00:00</Text>
           </View>
         </View>

         <View style={{ height: 100 }} />
      </ScrollView>

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
  titleShadow: { position: 'absolute', top: 4, left: 4, fontSize: 44, fontWeight: '900', color: NEON_GREEN, letterSpacing: -2 },
  headerTitle: { fontSize: 44, fontWeight: '900', color: BLACK, letterSpacing: -2, zIndex: 2 },
  headerSub: { fontSize: 14, fontWeight: '900', color: BLACK, letterSpacing: 4 },

  scrollContent: { paddingHorizontal: 24 },

  balanceWrap: { position: 'relative', marginBottom: 48 },
  balanceShadow: { position: 'absolute', top: 8, left: 8, right: -8, bottom: -8, backgroundColor: BLACK },
  balanceCard: { backgroundColor: CYBER_YELLOW, borderWidth: 4, borderColor: BLACK, padding: 24 },
  balanceLabel: { fontSize: 14, fontWeight: '900', color: BLACK, letterSpacing: 2, marginBottom: 8 },
  balanceRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  balanceValue: { fontSize: 48, fontWeight: '900', color: BLACK, letterSpacing: -2 },
  coinPill: { flexDirection: 'row', backgroundColor: PAPER_WHITE, borderWidth: 3, borderColor: BLACK, paddingHorizontal: 12, paddingVertical: 6, alignItems: 'center', transform: [{rotate: '-4deg'}] },
  coinPillText: { fontSize: 14, fontWeight: '900', color: BLACK, marginLeft: 6, letterSpacing: 1 },

  listContainer: { gap: 24 },
  
  itemWrap: { position: 'relative' },
  itemShadow: { position: 'absolute', top: 6, left: 6, right: -6, bottom: -6, backgroundColor: BLACK },
  itemCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: PAPER_WHITE, borderWidth: 3, borderColor: BLACK, padding: 16 },
  
  iconBox: { width: 64, height: 64, borderWidth: 3, borderColor: BLACK, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  
  itemBody: { flex: 1, paddingRight: 8 },
  itemTitle: { fontSize: 20, fontWeight: '900', color: BLACK, marginBottom: 4, letterSpacing: -0.5 },
  itemDesc: { fontSize: 10, fontWeight: '900', color: '#666', letterSpacing: 1, lineHeight: 14 },

  buyBtn: { backgroundColor: NEON_GREEN, borderWidth: 3, borderColor: BLACK, paddingHorizontal: 12, paddingVertical: 8, flexDirection: 'row', alignItems: 'center', transform: [{rotate: '2deg'}] },
  buyBtnText: { fontSize: 16, fontWeight: '900', color: BLACK },

  promoWrap: { position: 'relative', marginTop: 48 },
  promoShadow: { position: 'absolute', top: 8, left: 8, right: -8, bottom: -8, backgroundColor: HYPER_RED },
  promoBox: { backgroundColor: BLACK, padding: 32, borderWidth: 4, borderColor: BLACK, alignItems: 'center' },
  promoTape: { position: 'absolute', top: -12, width: 80, height: 24, backgroundColor: CYBER_YELLOW, transform: [{rotate: '-5deg'}], borderWidth: 2, borderColor: BLACK },
  promoHeader: { fontSize: 24, fontWeight: '900', color: PAPER_WHITE, textAlign: 'center', marginBottom: 12, letterSpacing: 1 },
  promoSub: { fontSize: 14, fontWeight: '900', color: HYPER_RED, letterSpacing: 3 },
});
