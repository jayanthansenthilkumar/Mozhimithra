import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform, Animated, Easing } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useAppTheme } from '@/hooks/ThemeContext';
// PREMIUM NEURO-BRUTALISM CONSTANTS
const BG = '#F4F1E1'; // Architectural Off-White
const BLACK = '#0A0A0A'; // Pitch Black
const PAPER_WHITE = '#FFFFFF';
const ICE_GRAY = '#E2E8F0'; // Clean Premium Gray
const CYBER_YELLOW = '#FFD60A';
const SKY_BLUE = '#30B0FF';
const NEON_GREEN = '#39FF14';

export default function HomeScreen() {
   const tapeAnim = useRef(new Animated.Value(0)).current;
   const { accentColor, appBgColor, setTheme } = useAppTheme();

   useEffect(() => {
      Animated.loop(
         Animated.timing(tapeAnim, {
            toValue: -1500,
            duration: 18000,
            easing: Easing.linear,
            useNativeDriver: true,
         })
      ).start();
   }, []);

   return (
      <View style={[styles.mainContainer, { backgroundColor: appBgColor }]}>
         <SafeAreaView edges={['top']} />

         {/* MASSIVE BACKGROUND NAME WATERMARK */}
         <View style={styles.bgNameWrap} pointerEvents="none">
            <Text style={styles.bgNameText} adjustsFontSizeToFit={true} minimumFontScale={0.2} numberOfLines={1}>DASHBOARD</Text>
         </View>

         <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

            {/* RAW BRUTALIST BRANDING & HEADER */}
            <View style={styles.topHeader}>
               <View style={styles.brandBadge}>
                  <Text style={styles.brandLogo}>Mozhi[Mithra]</Text>
               </View>
               <View style={styles.avatarWrapper}>
                  <Image
                     source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80' }}
                     style={styles.avatarImg}
                  />
                  {/* Hard shadow under avatar */}
                  <View style={styles.avatarShadow} />

                  {/* INJECTED ARROW GRAPHIC INDICATING FOLDER */}
                  <Image
                     source={{ uri: 'https://cdn-icons-png.flaticon.com/512/861/861012.png' }}
                     style={styles.heroGraphicArrow}
                     tintColor={BLACK}
                  />
               </View>
            </View>



            {/* CLEAN SWISS-BRUTALIST PREMIUM HERO */}
            <View style={{ marginHorizontal: 24, marginTop: 30, marginBottom: 50 }}>
               
               {/* Minimalist Structured Tags */}
               <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
                  <View style={{ backgroundColor: BLACK, paddingHorizontal: 12, paddingVertical: 6 }}>
                     <Text style={{ color: PAPER_WHITE, fontSize: 10, fontWeight: '900', letterSpacing: 3, fontFamily: 'monospace' }}>LINGUIST // L1 NATIVE</Text>
                  </View>
                  <View style={{ backgroundColor: ICE_GRAY, borderWidth: 2, borderColor: BLACK, paddingHorizontal: 12, paddingVertical: 4, marginLeft: 8 }}>
                     <Text style={{ color: BLACK, fontSize: 10, fontWeight: '900', letterSpacing: 2 }}>TAMIL MODULE</Text>
                  </View>
               </View>

               {/* Primary Hero Card */}
               <View style={{ backgroundColor: PAPER_WHITE, borderWidth: 4, borderColor: BLACK, shadowColor: BLACK, shadowOffset: { width: 12, height: 12 }, shadowOpacity: 1, shadowRadius: 0, position: 'relative', overflow: 'hidden' }}>
                  
                  {/* Subtle Tech Grid Background */}
                  <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1 }} pointerEvents="none">
                     <View style={{ width: '100%', height: '100%', borderColor: BLACK, borderWidth: 2, borderStyle: 'dashed' }} />
                  </View>

                  {/* Top Architecture Stripe */}
                  <View style={{ flexDirection: 'row', borderBottomWidth: 4, borderColor: BLACK }}>
                      <View style={{ flex: 1, backgroundColor: ICE_GRAY, borderRightWidth: 4, borderColor: BLACK, padding: 12 }}>
                          <Text style={{ fontSize: 9, fontWeight: '900', color: '#888', letterSpacing: 4 }}>BILINGUAL COGNITION ACTIVE</Text>
                      </View>
                      <View style={{ padding: 12, backgroundColor: BLACK, flexDirection: 'row', alignItems: 'center' }}>
                         <View style={{ width: 8, height: 8, backgroundColor: NEON_GREEN, borderRadius: 4, marginRight: 8 }} />
                         <Text style={{ fontSize: 9, fontWeight: '900', color: NEON_GREEN, letterSpacing: 2 }}>FLUENT</Text>
                      </View>
                  </View>

                  {/* Header Strip inside Card */}
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', borderBottomWidth: 4, borderColor: BLACK, padding: 24, paddingBottom: 32, position: 'relative', overflow: 'hidden' }}>
                     
                     {/* Premium Background Accent Line */}
                     <View style={{ position: 'absolute', top: 0, left: 24, bottom: 0, width: 2, backgroundColor: '#E2E8F0', opacity: 0.5 }} pointerEvents="none" />

                     <View style={{ zIndex: 2, marginLeft: 12 }}>
                        <Text style={{ fontSize: 11, fontWeight: '900', color: '#888', letterSpacing: 4, marginBottom: 8 }}>PRIMARY NATIVE DIALECT</Text>
                        <Text style={{ fontSize: 56, fontWeight: '900', color: BLACK, letterSpacing: -3, lineHeight: 58 }}>VANAKKAM,</Text>
                        
                        {/* Pure Lavender Name Block */}
                        <View style={{ position: 'relative', marginTop: -4 }}>
                           <Text style={{ position: 'absolute', top: 3, left: 3, fontSize: 62, fontWeight: '900', color: BLACK, letterSpacing: -3, lineHeight: 64 }}>JUNNIYA.</Text>
                           <Text style={{ fontSize: 62, fontWeight: '900', color: accentColor, letterSpacing: -3, lineHeight: 64 }}>JUNNIYA.</Text>
                        </View>
                     </View>

                     {/* Premium 3D Coin Badge */}
                     <View style={{ position: 'absolute', right: 24, top: 24, zIndex: 1 }}>
                        <View style={{ position: 'absolute', top: 5, left: 5, width: 68, height: 68, borderRadius: 34, backgroundColor: BLACK }} />
                        <View style={{ width: 68, height: 68, backgroundColor: PAPER_WHITE, borderWidth: 4, borderColor: BLACK, justifyContent: 'center', alignItems: 'center', borderRadius: 34 }}>
                           <View style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: 34, borderWidth: 2, borderColor: accentColor, opacity: 0.5 }} />
                           <MaterialCommunityIcons name="translate" size={32} color={BLACK} />
                        </View>
                     </View>
                  </View>

                  {/* Data & Metrics Strip - 3 Column Tabular Premium Layout */}
                  <View style={{ flexDirection: 'row', backgroundColor: PAPER_WHITE, borderBottomWidth: 4, borderColor: BLACK }}>
                     <View style={{ flex: 1.5, padding: 20, borderRightWidth: 4, borderColor: BLACK, backgroundColor: ICE_GRAY }}>
                        <Text style={{ fontSize: 10, fontWeight: '900', color: '#666', letterSpacing: 1.5, marginBottom: 6 }}>STANDINGS</Text>
                        <Text style={{ fontSize: 26, fontWeight: '900', color: BLACK, letterSpacing: -1.5 }}>TOP 4.2%</Text>
                     </View>
                     <View style={{ flex: 1, padding: 20, borderRightWidth: 4, borderColor: BLACK, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 10, fontWeight: '900', color: '#666', letterSpacing: 1.5, marginBottom: 6 }}>LEXICON</Text>
                        <Text style={{ fontSize: 26, fontWeight: '900', color: BLACK, letterSpacing: -1.5 }}>14.2K</Text>
                     </View>
                     
                     {/* Mini Visualizer / Waveform */}
                     <View style={{ flex: 1, padding: 12, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'flex-end', gap: 4 }}>
                        {[40, 70, 30, 90, 60].map((h, i) => (
                           <View key={i} style={{ width: 8, height: `${h}%`, backgroundColor: BLACK }} />
                        ))}
                     </View>
                  </View>

                  {/* Action Footer */}
                  <View style={{ padding: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', backgroundColor: PAPER_WHITE }}>
                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons name="barcode-scan" size={54} color={BLACK} />
                        <View style={{ marginLeft: 16 }}>
                           <Text style={{ fontSize: 10, fontWeight: '900', color: '#888', letterSpacing: 2 }}>PHONETIC SIGNATURE</Text>
                           <Text style={{ fontSize: 16, fontWeight: '900', color: BLACK, letterSpacing: 4, fontFamily: 'monospace' }}>TN-TML/99</Text>
                        </View>
                     </View>
                     
                     <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: BLACK, paddingHorizontal: 24, paddingVertical: 16, shadowColor: CYBER_YELLOW, shadowOffset: { width: 6, height: 6 }, shadowOpacity: 1, shadowRadius: 0 }}>
                        <Text style={{ color: PAPER_WHITE, fontSize: 14, fontWeight: '900', letterSpacing: 2, marginRight: 12 }}>STUDY</Text>
                        <MaterialCommunityIcons name="chevron-double-right" size={24} color={CYBER_YELLOW} />
                     </TouchableOpacity>
                  </View>
               </View>
            </View>

            {/* ULTRA-PREMIUM BRUTALIST TICKET DESIGN - V4 */}
            <View style={styles.newTicketWrap}>

               {/* Side Label Tab */}
               <View style={styles.ticketSideTab}>
                  <Text style={styles.sideTabText}>SYS_ID: LING-99 // BILINGUAL</Text>
               </View>

               {/* INSANE STAIR-STEP 3D SHADOW */}
               <View style={[styles.newTicketShadow, { backgroundColor: ICE_GRAY, top: 24, left: 24 }]} />
               <View style={[styles.newTicketShadow, { backgroundColor: SKY_BLUE, top: 16, left: 16 }]} />
               <View style={[styles.newTicketShadow, { backgroundColor: BLACK, top: 8, left: 8 }]} />

               <View style={styles.newTicketBody}>

                  {/* TORN PERFORATION TOP */}
                  <View style={styles.ticketTearRow}>
                     {[...Array(24)].map((_, i) => <View key={i} style={styles.tearDot} />)}
                  </View>

                  {/* HAZARD TAPE TOP RIGHT */}
                  <View style={styles.ticketHazard}>
                     {[...Array(6)].map((_, i) => <View key={i} style={styles.ticketHazardStripe} />)}
                  </View>

                  {/* MASSIVE FAKE STAMP OVERLAY */}
                  <View style={[styles.authStamp, { transform: [{ rotate: '-10deg' }] }]}>
                     <Text style={styles.authStampText}>CERTIFIED</Text>
                  </View>

                  {/* SECONDARY FAKE STAMP OVERLAY */}
                  <View style={styles.secondaryStamp}>
                     <Ionicons name="language" size={60} color={BLACK} style={{ opacity: 0.1 }} />
                  </View>

                  {/* TICKET HEADER ZONE WITH INTERNAL WATERMARK & GRID */}
                  <View style={styles.ticketHeaderZone}>
                     {/* Background Grid Pattern */}
                     <View style={styles.bgGridWrap}>
                        {[...Array(60)].map((_, i) => <View key={i} style={styles.gridDot} />)}
                     </View>

                     <Text style={styles.ticketInternalWatermark}>L1</Text>

                     <View style={styles.moduleBadgeWrap}>
                        <View style={styles.moduleBadge}>
                           <Text style={styles.moduleBadgeText}>[ MOD // TML ]</Text>
                        </View>
                        <View style={styles.liveIndicator}>
                           <View style={styles.liveIndicatorDot} />
                           <Text style={styles.liveIndicatorText}>LIVE</Text>
                        </View>
                     </View>

                     <Text style={styles.ticketMainTitle}>NATIVE{'\n'}FLUENCY{'\n'}DRILLS</Text>

                     <View style={styles.ticketHeaderBottomDeco}>
                        <View style={styles.ticketDecoLine} />
                        <Text style={styles.ticketSubTitle}>PHONETICS & DIALECT INSTRUCTION - ZERO FAIL RATE</Text>
                     </View>
                  </View>

                  {/* ANGLED CABLE */}
                  <View style={styles.ticketAngledCable}>
                     <View style={styles.cableStripeLight} />
                     <View style={styles.cableStripeLight} />
                     <View style={styles.cableStripeLight} />
                  </View>

                  {/* GRID ZONE */}
                  <View style={styles.ticketGridZone}>
                     <View style={[styles.tBox, { backgroundColor: CYBER_YELLOW, transform: [{ rotate: '-3deg' }], zIndex: 2 }]}>
                        <View style={styles.tBoxPin} />
                        <View style={styles.tBoxPinBottom} />
                        <Ionicons name="timer" size={28} color={BLACK} style={{ marginBottom: 8 }} />
                        <Text style={styles.tBoxVal}>24.5 M</Text>
                        <View style={styles.tBoxLblWrap}><Text style={styles.tBoxLbl}>EST. DURATION</Text></View>
                     </View>
                     <View style={[styles.tBox, { backgroundColor: BLACK, transform: [{ rotate: '2deg' }], marginLeft: -8, marginTop: 16 }]}>
                        <View style={[styles.tBoxPin, { backgroundColor: ICE_GRAY }]} />
                        <Ionicons name="star" size={28} color={NEON_GREEN} style={{ marginBottom: 8 }} />
                        <Text style={[styles.tBoxVal, { color: NEON_GREEN }]}>+80 XP</Text>
                        <View style={[styles.tBoxLblWrap, { backgroundColor: '#333' }]}><Text style={[styles.tBoxLbl, { color: PAPER_WHITE }]}>NET YIELD</Text></View>
                     </View>
                  </View>

                  {/* BARCODE STICKER ZONE */}
                  <View style={styles.ticketFooterZone}>
                     <View style={styles.physicalBarcodeSticker}>
                        <MaterialCommunityIcons name="barcode" size={60} color={BLACK} />
                        <View style={styles.barcodeSubWrap}>
                           <Text style={styles.barcodeSubText}>4029</Text>
                           <View style={styles.barcodeSubSep} />
                           <Text style={styles.barcodeSubText}>XX-90A</Text>
                        </View>
                     </View>

                     {/* FLOATING ACTION BUTTON CAUSING CHAOS */}
                     <TouchableOpacity activeOpacity={0.9} style={styles.commenceBtnWrap} onPress={() => router.push('/course/1' as any)}>
                        <View style={styles.commenceBtnShadowLayer2} />
                        <View style={styles.commenceBtnShadow} />
                        <View style={styles.commenceBtn}>
                           <Text style={styles.commenceBtnText}>ENGAGE</Text>
                           <Ionicons name="flash" size={24} color={BLACK} />
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

            {/* GRAPHIC POLAROID STACK */}
            <View style={styles.polaroidContainer}>
               <View style={styles.polaroidBack}>
                  <Image source={{ uri: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=300&q=80' }} style={styles.poloImage} />
               </View>
               <View style={styles.polaroidFront}>
                  <View style={styles.poloTape} />
                  <Image source={{ uri: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=300&q=80' }} style={styles.poloImage} />
                  <View style={styles.poloCapBox}>
                     <Text style={styles.poloCapText}>TAMIL NADU</Text>
                     <Text style={styles.poloSubText}>EXPLORE // 01</Text>
                  </View>
               </View>
            </View>

            {/* THE WARNING BANNER */}
            <View style={styles.warningBanner}>
               <View style={styles.warningStripeLeft} />
               <Ionicons name="warning" size={28} color={BLACK} style={{ marginRight: 12 }} />
               <Text style={styles.warningText}>PRONOUNCIATION DECAY: -15% FLUENCY OVER 3 DAYS.</Text>
            </View>

            {/* INDIAN LANGUAGES HORIZONTAL LIST */}
            <View style={styles.langGridContainer}>
               <Text style={styles.langGridHeader}>AVAILABLE LINGUISTICS //</Text>
               <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.langScroll}>

                  {/* TAMIL */}
                  <TouchableOpacity activeOpacity={0.9} style={styles.langCardWrap}>
                     <View style={styles.langCardShadow} />
                     <View style={[styles.langCard, { backgroundColor: NEON_GREEN }]}>
                        <Text style={[styles.langScript, { color: BLACK }]}>தமிழ்</Text>
                        <View style={styles.langBottom}>
                           <Text style={styles.langTitle}>TAMIL</Text>
                           <Ionicons name="arrow-forward" size={16} color={BLACK} />
                        </View>
                     </View>
                  </TouchableOpacity>

                  {/* HINDI */}
                  <TouchableOpacity activeOpacity={0.9} style={styles.langCardWrap}>
                     <View style={styles.langCardShadow} />
                     <View style={[styles.langCard, { backgroundColor: PAPER_WHITE }]}>
                        <Text style={styles.langScript}>हिंदी</Text>
                        <View style={styles.langBottom}>
                           <Text style={styles.langTitle}>HINDI</Text>
                           <Ionicons name="arrow-forward" size={16} color={BLACK} />
                        </View>
                     </View>
                  </TouchableOpacity>

                  {/* KANNADA */}
                  <TouchableOpacity activeOpacity={0.9} style={styles.langCardWrap}>
                     <View style={styles.langCardShadow} />
                     <View style={[styles.langCard, { backgroundColor: CYBER_YELLOW }]}>
                        <Text style={styles.langScript}>ಕನ್ನಡ</Text>
                        <View style={styles.langBottom}>
                           <Text style={styles.langTitle}>KANNADA</Text>
                           <Ionicons name="arrow-forward" size={16} color={BLACK} />
                        </View>
                     </View>
                  </TouchableOpacity>

                  {/* TELUGU */}
                  <TouchableOpacity activeOpacity={0.9} style={styles.langCardWrap}>
                     <View style={styles.langCardShadow} />
                     <View style={[styles.langCard, { backgroundColor: SKY_BLUE }]}>
                        <Text style={styles.langScript}>తెలుగు</Text>
                        <View style={styles.langBottom}>
                           <Text style={styles.langTitle}>TELUGU</Text>
                           <Ionicons name="arrow-forward" size={16} color={BLACK} />
                        </View>
                     </View>
                  </TouchableOpacity>

                  {/* MALAYALAM */}
                  <TouchableOpacity activeOpacity={0.9} style={styles.langCardWrap}>
                     <View style={styles.langCardShadow} />
                     <View style={[styles.langCard, { backgroundColor: ICE_GRAY }]}>
                        <Text style={[styles.langScript, { color: PAPER_WHITE }]}>മലയാളം</Text>
                        <View style={[styles.langBottom, { borderColor: PAPER_WHITE }]}>
                           <Text style={[styles.langTitle, { color: PAPER_WHITE }]}>MALAYALAM</Text>
                           <Ionicons name="arrow-forward" size={16} color={PAPER_WHITE} />
                        </View>
                     </View>
                  </TouchableOpacity>

               </ScrollView>
            </View>

            {/* QUICK ACTIONS SCROLL */}
            <View style={styles.qaSection}>
               <Text style={styles.qaHeader}>QUICK ACCESS //</Text>
               <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.qaScroll}>

                  <TouchableOpacity activeOpacity={0.8} style={styles.qaPillWrap}>
                     <View style={styles.qaPillShadow} />
                     <View style={[styles.qaPill, { backgroundColor: CYBER_YELLOW }]}>
                        <Ionicons name="headset" size={24} color={BLACK} />
                        <Text style={styles.qaPillText}>LISTEN</Text>
                     </View>
                  </TouchableOpacity>

                  <TouchableOpacity activeOpacity={0.8} style={styles.qaPillWrap}>
                     <View style={styles.qaPillShadow} />
                     <View style={[styles.qaPill, { backgroundColor: SKY_BLUE }]}>
                        <Ionicons name="mic" size={24} color={BLACK} />
                        <Text style={styles.qaPillText}>PRONOUNCE</Text>
                     </View>
                  </TouchableOpacity>

                  <TouchableOpacity activeOpacity={0.8} style={styles.qaPillWrap} onPress={() => router.push('/mithra' as any)}>
                     <View style={styles.qaPillShadow} />
                     <View style={[styles.qaPill, { backgroundColor: ICE_GRAY }]}>
                        <Ionicons name="planet" size={24} color={PAPER_WHITE} />
                        <Text style={[styles.qaPillText, { color: PAPER_WHITE }]}>MITHRA AI</Text>
                     </View>
                  </TouchableOpacity>

                  <TouchableOpacity activeOpacity={0.8} style={styles.qaPillWrap}>
                     <View style={styles.qaPillShadow} />
                     <View style={[styles.qaPill, { backgroundColor: PAPER_WHITE }]}>
                        <Ionicons name="book" size={24} color={BLACK} />
                        <Text style={styles.qaPillText}>STORIES</Text>
                     </View>
                  </TouchableOpacity>

               </ScrollView>
            </View>

            {/* XP / FLUENCY BATTERY */}
            <View style={styles.batteryContainer}>
               <Text style={styles.batteryHeader}>CORE FLUENCY CHARGE</Text>
               <View style={styles.batteryBody}>
                  <View style={styles.batteryTerminal} />
                  <View style={styles.batteryOuter}>
                     <View style={[styles.batteryInner, { width: '74%', backgroundColor: NEON_GREEN }]} />
                  </View>
                  <Text style={styles.batteryLevelTxt}>74%</Text>
               </View>
            </View>

            {/* WORD OF THE DAY // TORN DICTIONARY BLOCK */}
            <View style={styles.dictionaryBlock}>
               <View style={styles.dictTape} />
               <Text style={styles.dictHeader}>[ ENTRY // 001 ]</Text>
               <Text style={styles.dictWord}>தமிழ்</Text>
               <Text style={styles.dictPronounce}>/t̪ɐmɪɻ/</Text>
               <Text style={styles.dictDef}>
                  1. The oldest surviving classical language in the world.{'\n'}
                  2. Sweetness, nectar.
               </Text>
               <TouchableOpacity style={styles.audioBrutalBtn} activeOpacity={0.9}>
                  <Ionicons name="volume-high" size={28} color={PAPER_WHITE} />
               </TouchableOpacity>
            </View>

            {/* AUDIO WAVEFORM / LISTENING EXERCISE */}
            <View style={styles.audioWaveBox}>
               <Text style={styles.audioHeader}>RAW AUDIO LOG // 002</Text>
               <View style={styles.audioFlexRow}>
                  <TouchableOpacity activeOpacity={0.9} style={styles.audioPlayBtn}>
                     <Ionicons name="play" size={32} color={PAPER_WHITE} />
                  </TouchableOpacity>
                  <View style={styles.waveformContainer}>
                     {[40, 60, 30, 80, 100, 50, 70, 90, 40, 20, 60, 80, 30, 50, 40, 100].map((h, i) => (
                        <View key={i} style={[styles.waveBar, { height: `${h}%` }]} />
                     ))}
                     <View style={styles.waveScrubber} />
                  </View>
               </View>
            </View>

            {/* ACHIEVEMENTS // BARCODE GRID */}
            <View style={styles.achievementsBox}>
               <Text style={styles.achHeader}>RECENT MILESTONES</Text>

               <View style={styles.achGrid}>
                  <View style={styles.achRow}>
                     <View style={styles.achIconWrap}><Ionicons name="star" size={20} color={BLACK} /></View>
                     <View style={styles.achContent}>
                        <Text style={styles.achTitle}>Perfect Pronounciation</Text>
                        <Text style={styles.achCode}>MIL-01-A</Text>
                     </View>
                     <Text style={styles.achScore}>+50 XP</Text>
                  </View>

                  <View style={[styles.achRow, { borderBottomWidth: 0 }]}>
                     <View style={[styles.achIconWrap, { backgroundColor: CYBER_YELLOW }]}><Ionicons name="flash" size={20} color={BLACK} /></View>
                     <View style={styles.achContent}>
                        <Text style={styles.achTitle}>Speed Learner II</Text>
                        <Text style={styles.achCode}>MIL-08-B</Text>
                     </View>
                     <Text style={styles.achScore}>+120 XP</Text>
                  </View>
               </View>

               <View style={styles.barcodeBox}>
                  <View style={[styles.barcodeLine, { width: 4 }]} />
                  <View style={[styles.barcodeLine, { width: 2 }]} />
                  <View style={[styles.barcodeLine, { width: 8 }]} />
                  <View style={[styles.barcodeLine, { width: 2 }]} />
                  <View style={[styles.barcodeLine, { width: 6 }]} />
                  <View style={[styles.barcodeLine, { width: 3 }]} />
                  <View style={[styles.barcodeLine, { width: 1 }]} />
                  <View style={[styles.barcodeLine, { width: 5 }]} />
                  <View style={[styles.barcodeLine, { width: 8 }]} />
                  <View style={[styles.barcodeLine, { width: 2 }]} />
                  <View style={[styles.barcodeLine, { width: 6 }]} />
               </View>
            </View>

            {/* COMMUNITY DEBATE // FLOPPY DISK */}
            <View style={styles.floppyWrap}>
               <View style={styles.floppyShadow} />
               <View style={styles.floppyDisk}>
                  <View style={styles.floppyLabel}>
                     <Text style={styles.floppyLabelHeader}>COMMUNITY // HOT TOPIC</Text>
                     <Text style={styles.floppyLabelText}>"Is the 'Zh' sound really that hard to pronounce?"</Text>
                  </View>
                  <View style={styles.floppyMetal}>
                     <View style={styles.floppyMetalSlide} />
                  </View>
                  <TouchableOpacity activeOpacity={0.8} style={styles.floppyBtn}>
                     <Text style={styles.floppyBtnText}>JOIN DEBATE</Text>
                  </TouchableOpacity>
               </View>
            </View>

            {/* DAILY MISSION PROTOCOL GRID */}
            <View style={styles.protoContainer}>
               <Text style={styles.protoHeader}>PROTOCOL // ALPHA SEC-09</Text>
               <View style={styles.protoBox}>

                  <View style={styles.protoRow}>
                     <View style={[styles.protoCheckSquare, { backgroundColor: CYBER_YELLOW }]}><View style={styles.protoCheckInner} /></View>
                     <Text style={styles.protoText}>INITIATE PHONETICS TEST</Text>
                  </View>

                  <View style={styles.protoRow}>
                     <View style={styles.protoCheckSquare} />
                     <Text style={styles.protoText}>DECODE SCRIPT MODULE</Text>
                  </View>

                  <View style={[styles.protoRow, { borderBottomWidth: 0 }]}>
                     <View style={[styles.protoCheckSquare, { backgroundColor: '#CCC' }]}><Ionicons name="close" size={18} color={BLACK} style={{ marginLeft: -2, marginTop: -2 }} /></View>
                     <Text style={[styles.protoText, { color: '#888', textDecorationLine: 'line-through' }]}>ENGAGE MITHRA AI OVERRIDE</Text>
                  </View>

               </View>
            </View>

            {/* BRUTALIST MARQUEE / FOOTER BLOCK */}
            <View style={styles.footerTape}>
               <Animated.Text style={[styles.tapeText, { transform: [{ translateX: tapeAnim }] }]} numberOfLines={1}>
                  NO EXCUSES // LEARN TODAY // NO EXCUSES // LEARN TODAY // NO EXCUSES // LEARN TODAY // NO EXCUSES // LEARN TODAY // NO EXCUSES // LEARN TODAY // NO EXCUSES //
               </Animated.Text>
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
      transform: [{ rotate: '-90deg' }],
      width: 900,
      textAlign: 'center',
      letterSpacing: -2
   },

   // HEADER
   topHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, marginBottom: 24 },
   brandBadge: { paddingHorizontal: 12, paddingVertical: 6, backgroundColor: BLACK, transform: [{ rotate: '-2deg' }] },
   brandLogo: { color: PAPER_WHITE, fontSize: 18, fontWeight: '900', letterSpacing: 2 },

   avatarWrapper: { position: 'relative', zIndex: 10 },
   avatarImg: { width: 48, height: 48, borderRadius: 0, borderWidth: 3, borderColor: BLACK, zIndex: 2, backgroundColor: PAPER_WHITE },
   avatarShadow: { position: 'absolute', top: 4, left: 4, width: 48, height: 48, backgroundColor: ICE_GRAY, zIndex: 1 },
   heroGraphicArrow: { position: 'absolute', top: 40, right: 30, width: 90, height: 90, transform: [{ rotate: '110deg' }], zIndex: -1, opacity: 0.8 },

   // ULTIMATE UNIQUE HERO FOLDER
   heroFolder: { position: 'relative', marginHorizontal: 24, marginBottom: 40, marginTop: 10 },
   tapeMock: { position: 'absolute', top: -10, left: '30%', width: 80, height: 24, backgroundColor: 'rgba(255,255,255,0.7)', borderWidth: 1, borderColor: BLACK, transform: [{ rotate: '-5deg' }], zIndex: 10 },
   folderTab: { alignSelf: 'flex-start', paddingHorizontal: 16, paddingVertical: 8, backgroundColor: BLACK, borderTopLeftRadius: 12, borderTopRightRadius: 12 },
   folderTabText: { color: PAPER_WHITE, fontSize: 12, fontWeight: '900', letterSpacing: 2 },
   folderBody: { position: 'relative', width: '100%' },
   folderShadow: { position: 'absolute', top: 8, left: 8, right: -8, bottom: -8, backgroundColor: SKY_BLUE },
   folderFront: { backgroundColor: PAPER_WHITE, borderWidth: 3, borderColor: BLACK, padding: 24, position: 'relative' },
   massiveText: { fontSize: 52, fontWeight: '900', color: BLACK, lineHeight: 56, letterSpacing: -2 },
   scribbleUnderline: { height: 6, width: 140, backgroundColor: CYBER_YELLOW, marginTop: 8, transform: [{ rotate: '-2deg' }] },
   floatingStarDeco: { position: 'absolute', right: 20, bottom: 20, transform: [{ rotate: '15deg' }] },

   // QUICK ACTIONS
   qaSection: { marginBottom: 40 },
   qaHeader: { paddingHorizontal: 24, fontSize: 16, fontWeight: '900', color: BLACK, letterSpacing: 2, marginBottom: 16 },
   qaScroll: { paddingHorizontal: 24, gap: 16 },
   qaPillWrap: { position: 'relative', height: 64 },
   qaPillShadow: { position: 'absolute', top: 4, left: 4, right: -4, bottom: -4, backgroundColor: BLACK, borderRadius: 32 },
   qaPill: { flexDirection: 'row', alignItems: 'center', height: '100%', paddingHorizontal: 20, borderWidth: 3, borderColor: BLACK, borderRadius: 32, gap: 8 },
   qaPillText: { fontSize: 16, fontWeight: '900', color: BLACK },

   // PREMIUM TICKET DESIGN
   newTicketWrap: { position: 'relative', marginHorizontal: 20, marginBottom: 80, marginTop: 40, transform: [{ rotate: '-1deg' }] },
   ticketSideTab: { position: 'absolute', left: -50, top: 120, backgroundColor: BLACK, paddingHorizontal: 16, paddingVertical: 6, transform: [{ rotate: '-90deg' }], zIndex: -1, borderWidth: 2, borderColor: PAPER_WHITE },
   sideTabText: { color: PAPER_WHITE, fontSize: 10, fontWeight: '900', letterSpacing: 4, fontFamily: 'monospace' },

   newTicketShadow: { position: 'absolute', right: -16, bottom: -16, left: 16, top: 16, backgroundColor: BLACK, borderWidth: 4, borderColor: BLACK },
   newTicketBody: { backgroundColor: PAPER_WHITE, borderWidth: 5, borderColor: BLACK, overflow: 'visible', position: 'relative' },

   ticketTearRow: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: BG, borderBottomWidth: 5, borderColor: BLACK, paddingBottom: 6, paddingTop: 6, marginHorizontal: -5, marginTop: -5 },
   tearDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: BLACK, marginLeft: 6 },

   ticketHazard: { position: 'absolute', top: 14, right: -44, width: 140, height: 35, backgroundColor: CYBER_YELLOW, transform: [{ rotate: '45deg' }], flexDirection: 'row', zIndex: 10, borderWidth: 4, borderColor: BLACK },
   ticketHazardStripe: { width: 12, height: 45, backgroundColor: BLACK, transform: [{ rotate: '20deg' }], marginLeft: 15, marginTop: -5 },

   authStamp: { position: 'absolute', top: 60, right: 0, width: 210, height: 70, borderWidth: 6, borderColor: ICE_GRAY, justifyContent: 'center', alignItems: 'center', zIndex: 5, opacity: 0.9, backgroundColor: 'rgba(255,255,255,0.4)' },
   authStampText: { color: ICE_GRAY, fontSize: 24, fontWeight: '900', letterSpacing: 8, width: '100%', textAlign: 'center' },
   secondaryStamp: { position: 'absolute', top: 180, right: 30, zIndex: 1 },

   ticketHeaderZone: { padding: 30, paddingBottom: 24, backgroundColor: '#F8F6F0', position: 'relative', overflow: 'hidden' },
   bgGridWrap: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, flexDirection: 'row', flexWrap: 'wrap', opacity: 0.05, zIndex: 0 },
   gridDot: { width: 4, height: 4, backgroundColor: BLACK, margin: 8 },

   ticketInternalWatermark: { position: 'absolute', right: -30, bottom: -50, fontSize: 180, fontWeight: '900', color: '#EBE8DF', zIndex: 0, letterSpacing: -15, lineHeight: 180 },

   moduleBadgeWrap: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, zIndex: 2 },
   moduleBadge: { backgroundColor: BLACK, paddingHorizontal: 12, paddingVertical: 6, borderWidth: 2, borderColor: BLACK, transform: [{ rotate: '-2deg' }] },
   moduleBadgeText: { fontSize: 14, fontWeight: '900', color: PAPER_WHITE, letterSpacing: 3, fontFamily: 'monospace' },
   liveIndicator: { flexDirection: 'row', alignItems: 'center', backgroundColor: PAPER_WHITE, borderWidth: 2, borderColor: BLACK, paddingHorizontal: 8, paddingVertical: 4 },
   liveIndicatorDot: { width: 8, height: 8, backgroundColor: ICE_GRAY, borderRadius: 4, marginRight: 6 },
   liveIndicatorText: { fontSize: 10, fontWeight: '900', color: BLACK, letterSpacing: 2 },

   ticketMainTitle: { fontSize: 54, fontWeight: '900', color: BLACK, letterSpacing: -3, lineHeight: 50, zIndex: 2 },
   ticketHeaderBottomDeco: { marginTop: 20, zIndex: 2, borderLeftWidth: 4, borderColor: ICE_GRAY, paddingLeft: 12 },
   ticketDecoLine: { height: 4, width: '100%', backgroundColor: BLACK, marginBottom: 8 },
   ticketSubTitle: { fontSize: 9, fontWeight: '900', color: BLACK, letterSpacing: 2, fontFamily: 'monospace', lineHeight: 14, opacity: 0.6 },

   ticketAngledCable: { flexDirection: 'row', alignItems: 'center', gap: 20, height: 20, backgroundColor: BLACK, transform: [{ rotate: '1.5deg' }], marginHorizontal: -12, marginVertical: 12, borderTopWidth: 3, borderBottomWidth: 3, borderColor: PAPER_WHITE, paddingHorizontal: 10 },
   cableStripeLight: { width: 40, height: 4, backgroundColor: PAPER_WHITE, opacity: 0.3, transform: [{ rotate: '-30deg' }] },

   ticketGridZone: { flexDirection: 'row', padding: 30, paddingBottom: 40, gap: 16, paddingTop: 20, backgroundColor: '#F8F6F0' },
   tBox: { flex: 1, padding: 20, borderWidth: 5, borderColor: BLACK, alignItems: 'center', justifyContent: 'center', shadowColor: BLACK, shadowOffset: { width: 8, height: 8 }, shadowOpacity: 1, shadowRadius: 0, position: 'relative' },
   tBoxPin: { position: 'absolute', top: 6, right: 6, width: 8, height: 8, backgroundColor: PAPER_WHITE, borderRadius: 4, borderWidth: 2, borderColor: BLACK },
   tBoxPinBottom: { position: 'absolute', bottom: 6, left: 6, width: 8, height: 8, backgroundColor: PAPER_WHITE, borderRadius: 4, borderWidth: 2, borderColor: BLACK },
   tBoxVal: { fontSize: 26, fontWeight: '900', color: BLACK, marginBottom: 8, letterSpacing: -1 },
   tBoxLblWrap: { backgroundColor: PAPER_WHITE, paddingHorizontal: 8, paddingVertical: 4, borderWidth: 2, borderColor: BLACK },
   tBoxLbl: { fontSize: 9, fontWeight: '900', color: BLACK, letterSpacing: 2 },

   ticketFooterZone: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#E4DFCA', borderTopWidth: 5, borderColor: BLACK, padding: 20, paddingRight: 40, height: 130 },
   physicalBarcodeSticker: { backgroundColor: PAPER_WHITE, padding: 12, borderWidth: 2, borderColor: '#CCC', transform: [{ rotate: '-2deg' }], shadowColor: BLACK, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 0.15, shadowRadius: 0 },
   barcodeSubWrap: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 4 },
   barcodeSubText: { fontSize: 11, fontWeight: '900', color: BLACK, fontFamily: 'monospace', letterSpacing: 2 },
   barcodeSubSep: { width: 4, height: 4, backgroundColor: ICE_GRAY, marginHorizontal: 6 },

   commenceBtnWrap: { position: 'absolute', right: -30, bottom: -30, width: 160, height: 80, zIndex: 20, transform: [{ rotate: '-6deg' }] },
   commenceBtnShadowLayer2: { position: 'absolute', top: 12, left: 12, right: -12, bottom: -12, backgroundColor: ICE_GRAY, borderWidth: 4, borderColor: BLACK },
   commenceBtnShadow: { position: 'absolute', top: 6, left: 6, right: -6, bottom: -6, backgroundColor: NEON_GREEN, borderWidth: 4, borderColor: BLACK },
   commenceBtn: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: CYBER_YELLOW, borderWidth: 5, borderColor: BLACK },
   commenceBtnText: { color: BLACK, fontSize: 20, fontWeight: '900', letterSpacing: 3, marginRight: 12 },

   // GRAPHIC POLAROID
   polaroidContainer: { marginHorizontal: 24, height: 300, position: 'relative', marginBottom: 40 },
   polaroidBack: { position: 'absolute', right: 10, top: 20, width: 220, height: 240, backgroundColor: PAPER_WHITE, borderWidth: 3, borderColor: BLACK, padding: 12, transform: [{ rotate: '12deg' }], zIndex: 1 },
   polaroidFront: { position: 'absolute', left: 10, top: 0, width: 220, height: 260, backgroundColor: PAPER_WHITE, borderWidth: 3, borderColor: BLACK, padding: 12, transform: [{ rotate: '-4deg' }], zIndex: 2, shadowColor: BLACK, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 0 },
   poloImage: { width: '100%', height: 160, borderWidth: 3, borderColor: BLACK, backgroundColor: '#CCC' },
   poloTape: { position: 'absolute', top: -12, left: '40%', width: 60, height: 24, backgroundColor: 'rgba(225,198,255,0.5)', borderWidth: 1, borderColor: BLACK, transform: [{ rotate: '-10deg' }], zIndex: 10 },
   poloCapBox: { paddingVertical: 12, alignItems: 'center' },
   poloCapText: { fontSize: 18, fontWeight: '900', color: BLACK, letterSpacing: 1 },
   poloSubText: { fontSize: 10, fontWeight: '900', color: ICE_GRAY, letterSpacing: 1 },

   // BRUTAL BUTTON
   brutalBtn: { position: 'relative', height: 64, alignSelf: 'stretch' },
   btnShadow: { position: 'absolute', top: 6, left: 6, right: -6, bottom: -6, backgroundColor: BLACK },
   btnFront: { flex: 1, backgroundColor: ICE_GRAY, borderWidth: 3, borderColor: BLACK, justifyContent: 'center', alignItems: 'center' },
   btnText: { color: PAPER_WHITE, fontSize: 18, fontWeight: '900', letterSpacing: 2 },

   // CHAOS GRID
   chaosGrid: { flexDirection: 'row', paddingHorizontal: 24, height: 200, position: 'relative', marginBottom: 40 },
   chaosCard: { position: 'absolute', width: '55%', height: 160, padding: 20, borderWidth: 3, borderColor: BLACK, justifyContent: 'center' },
   chaosYellow: { backgroundColor: CYBER_YELLOW, left: 24, top: 0, transform: [{ rotate: '-6deg' }], zIndex: 2 },
   chaosBlue: { backgroundColor: SKY_BLUE, right: 24, top: 20, transform: [{ rotate: '4deg' }], zIndex: 1 },
   chaosPin: { position: 'absolute', top: 10, right: 10, width: 44, height: 44, borderRadius: 22, backgroundColor: PAPER_WHITE, borderWidth: 3, borderColor: BLACK, justifyContent: 'center', alignItems: 'center' },
   chaosTitle: { fontSize: 48, fontWeight: '900', color: BLACK, letterSpacing: -2 },
   chaosSub: { fontSize: 14, fontWeight: '900', color: BLACK, letterSpacing: 1 },

   // DICTIONARY
   dictionaryBlock: { marginHorizontal: 24, padding: 24, backgroundColor: PAPER_WHITE, borderWidth: 3, borderColor: BLACK, marginBottom: 40, position: 'relative' },
   dictTape: { position: 'absolute', top: -12, right: 30, width: 60, height: 24, backgroundColor: 'rgba(225,198,255,0.5)', borderWidth: 1, borderColor: BLACK, transform: [{ rotate: '8deg' }], zIndex: 10 },
   dictHeader: { fontSize: 10, fontWeight: '900', color: '#666', letterSpacing: 2, marginBottom: 16 },
   dictWord: { fontSize: 48, fontWeight: '900', color: BLACK, marginBottom: 4 },
   dictPronounce: { fontSize: 18, fontWeight: '700', color: ICE_GRAY, marginBottom: 20, fontFamily: 'serif' },
   dictDef: { fontSize: 16, fontWeight: '800', color: BLACK, lineHeight: 24, marginBottom: 32 },
   audioBrutalBtn: { position: 'absolute', bottom: -20, right: -10, width: 60, height: 60, backgroundColor: BLACK, borderWidth: 3, borderColor: CYBER_YELLOW, justifyContent: 'center', alignItems: 'center', transform: [{ rotate: '-5deg' }], shadowColor: BLACK, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 0 },

   // ACHIEVEMENTS BARCODE
   achievementsBox: { marginHorizontal: 24, marginBottom: 50 },
   achHeader: { fontSize: 24, fontWeight: '900', color: BLACK, letterSpacing: -1, marginBottom: 16 },
   achGrid: { backgroundColor: PAPER_WHITE, borderWidth: 3, borderColor: BLACK, borderBottomWidth: 0 },
   achRow: { flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 3, borderColor: BLACK },
   achIconWrap: { width: 40, height: 40, backgroundColor: SKY_BLUE, borderWidth: 3, borderColor: BLACK, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
   achContent: { flex: 1 },
   achTitle: { fontSize: 16, fontWeight: '900', color: BLACK },
   achCode: { fontSize: 10, fontWeight: '800', color: '#666', letterSpacing: 1 },
   achScore: { fontSize: 16, fontWeight: '900', color: ICE_GRAY },
   barcodeBox: { flexDirection: 'row', height: 40, backgroundColor: PAPER_WHITE, borderWidth: 3, borderColor: BLACK, padding: 4, justifyContent: 'space-between' },
   barcodeLine: { height: '100%', backgroundColor: BLACK },

   // FOOTER TAPE
   footerTape: { paddingVertical: 16, backgroundColor: BLACK, transform: [{ rotate: '2deg' }], marginHorizontal: -20, marginTop: 40 },
   tapeText: { color: CYBER_YELLOW, fontSize: 24, fontWeight: '900', letterSpacing: 4, width: 3000 },

   // WARNING BANNER
   warningBanner: { flexDirection: 'row', alignItems: 'center', backgroundColor: CYBER_YELLOW, padding: 16, marginHorizontal: 24, marginBottom: 40, borderWidth: 3, borderColor: BLACK, shadowColor: BLACK, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 0 },
   warningStripeLeft: { position: 'absolute', left: 0, top: 0, bottom: 0, width: 8, backgroundColor: BLACK },
   warningText: { flex: 1, fontSize: 13, fontWeight: '900', color: BLACK, letterSpacing: 1, lineHeight: 18 },

   // XP BATTERY
   batteryContainer: { marginHorizontal: 24, marginBottom: 50 },
   batteryHeader: { fontSize: 16, fontWeight: '900', color: BLACK, letterSpacing: 2, marginBottom: 16 },
   batteryBody: { flexDirection: 'row', alignItems: 'center', position: 'relative' },
   batteryTerminal: { width: 12, height: 24, backgroundColor: BLACK, borderTopLeftRadius: 4, borderBottomLeftRadius: 4, right: -4, zIndex: 2 },
   batteryOuter: { flex: 1, height: 48, backgroundColor: PAPER_WHITE, borderWidth: 3, borderColor: BLACK, padding: 4, zIndex: 3 },
   batteryInner: { height: '100%', borderRightWidth: 3, borderColor: BLACK },
   batteryLevelTxt: { fontSize: 24, fontWeight: '900', color: BLACK, marginLeft: 16 },

   // FLOPPY DISK
   floppyWrap: { position: 'relative', marginHorizontal: 24, marginBottom: 20 },
   floppyShadow: { position: 'absolute', top: 8, left: 8, right: -8, bottom: -8, backgroundColor: BLACK },
   floppyDisk: { backgroundColor: SKY_BLUE, borderWidth: 3, borderColor: BLACK, padding: 20, paddingBottom: 40, height: 260 },
   floppyLabel: { backgroundColor: PAPER_WHITE, borderWidth: 3, borderColor: BLACK, padding: 16, height: 120, zIndex: 2 },
   floppyLabelHeader: { color: ICE_GRAY, fontSize: 12, fontWeight: '900', letterSpacing: 1, marginBottom: 16 },
   floppyLabelText: { fontSize: 20, fontWeight: '900', color: BLACK, lineHeight: 28 },
   floppyMetal: { position: 'absolute', top: -3, right: 24, width: 80, height: 60, backgroundColor: '#CCC', borderWidth: 3, borderColor: BLACK, zIndex: 1 },
   floppyMetalSlide: { position: 'absolute', top: 10, left: 10, width: 20, height: 30, backgroundColor: BG, borderWidth: 2, borderColor: BLACK },
   floppyBtn: { position: 'absolute', bottom: -24, alignSelf: 'center', backgroundColor: CYBER_YELLOW, paddingHorizontal: 32, paddingVertical: 12, borderWidth: 3, borderColor: BLACK, transform: [{ rotate: '-4deg' }], zIndex: 3, shadowColor: BLACK, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 0 },
   floppyBtnText: { color: BLACK, fontSize: 18, fontWeight: '900', letterSpacing: 1.5 },

   // AUDIO WAVEFORM
   audioWaveBox: { marginHorizontal: 24, marginBottom: 50, padding: 20, backgroundColor: PAPER_WHITE, borderWidth: 3, borderColor: BLACK, shadowColor: BLACK, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 0 },
   audioHeader: { fontSize: 14, fontWeight: '900', color: BLACK, letterSpacing: 2, marginBottom: 16 },
   audioFlexRow: { flexDirection: 'row', alignItems: 'center' },
   audioPlayBtn: { width: 64, height: 64, borderRadius: 32, backgroundColor: BLACK, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
   waveformContainer: { flex: 1, height: 48, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', position: 'relative' },
   waveBar: { width: 8, backgroundColor: BLACK, borderRadius: 0 },
   waveScrubber: { position: 'absolute', top: -4, bottom: -4, left: '40%', width: 4, backgroundColor: ICE_GRAY },

   // PROTOCOL GRID
   protoContainer: { marginHorizontal: 24, marginBottom: 50 },
   protoHeader: { fontSize: 14, fontWeight: '900', color: ICE_GRAY, letterSpacing: 2, marginBottom: 16 },
   protoBox: { backgroundColor: PAPER_WHITE, borderWidth: 3, borderColor: BLACK },
   protoRow: { flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 3, borderColor: BLACK },
   protoCheckSquare: { width: 24, height: 24, borderWidth: 3, borderColor: BLACK, marginRight: 16, backgroundColor: PAPER_WHITE, justifyContent: 'center', alignItems: 'center' },
   protoCheckInner: { width: 10, height: 10, backgroundColor: BLACK },
   protoText: { fontSize: 14, fontWeight: '900', color: BLACK, flex: 1 },

   // LANG ARCHIVE
   langGridContainer: { marginBottom: 40 },
   langGridHeader: { paddingHorizontal: 24, fontSize: 16, fontWeight: '900', color: BLACK, letterSpacing: 2, marginBottom: 16 },
   langScroll: { paddingHorizontal: 24, paddingRight: 40, paddingBottom: 16, gap: 20 },
   langCardWrap: { position: 'relative', width: 140, height: 180 },
   langCardShadow: { position: 'absolute', top: 6, left: 6, right: -6, bottom: -6, backgroundColor: BLACK },
   langCard: { flex: 1, borderWidth: 3, borderColor: BLACK, padding: 16, justifyContent: 'space-between' },
   langScript: { flex: 1, fontSize: 32, fontWeight: '900', color: BLACK, textAlign: 'center', verticalAlign: 'middle' },
   langBottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 3, borderColor: BLACK, paddingTop: 12, marginHorizontal: -16, paddingHorizontal: 16 },
   langTitle: { fontSize: 12, fontWeight: '900', color: BLACK, letterSpacing: 1 },
});
