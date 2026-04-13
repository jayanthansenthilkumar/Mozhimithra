import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// PREMIUM NEURO-BRUTALISM CONSTANTS
const BG = '#F4F1E1';
const BLACK = '#0A0A0A';
const PAPER_WHITE = '#FFFFFF';
const HYPER_RED = '#FF3B30';
const CYBER_YELLOW = '#FFD60A';
const SKY_BLUE = '#30B0FF';
const NEON_GREEN = '#39FF14';

const MOCK_CHAT = [
  { id: '1', role: 'ai', text: 'TERMINAL LINK SECURED. MITHRA AI ONLINE.', timestamp: '00:00:12', ref: 'SYS_01' },
  { id: '2', role: 'user', text: 'How do I ask "Where is the nearest restaurant?" in Tamil?', timestamp: '00:01:45', ref: 'USR_99' },
  { id: '3', role: 'ai', text: 'TRANSLATION YIELD: "Unavagam enge irukku?". Execute audio synthesis?', timestamp: '00:01:47', ref: 'SYS_02' },
];

export default function MithraScreen() {
  const [inputText, setInputText] = useState('');

  return (
    <KeyboardAvoidingView style={styles.mainContainer} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <SafeAreaView edges={['top']} />

      {/* MASSIVE HEADER BLOCK */}
      <View style={styles.header}>
        <View style={styles.headerDecorLine} />
        <View style={styles.headerDecorLine2} />
        
        <View style={styles.oversizedTitleBox}>
           <Text style={styles.oversizedTitleShadow}>MITHRA_AI</Text>
           <Text style={styles.oversizedTitle}>MITHRA_AI</Text>
        </View>

        <View style={styles.statsRow}>
           <View style={styles.statsPill}>
              <Text style={styles.statsPillText}>SYS.OP: NORMAL</Text>
              <View style={styles.greenPulse} />
           </View>
           <View style={[styles.statsPill, { backgroundColor: BLACK, borderColor: BLACK }]}>
              <Text style={[styles.statsPillText, { color: NEON_GREEN }]}>v2.4.9</Text>
           </View>
        </View>
        
        {/* TAPE TORN EFFECT */}
        <View style={styles.tapeDecor}>
           <Text style={styles.tapeDecorText}>CAUTION // RAW O/P</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.chatScroll} showsVerticalScrollIndicator={false}>
        
        {/* BARCODE HEADER DECORATION */}
        <View style={styles.barcodeWrap}>
           <MaterialCommunityIcons name="barcode-scan" size={32} color={BLACK} />
           <View style={styles.barcodeLine} />
           <Text style={styles.barcodeText}>ECRYPT REF: 0x9F4B</Text>
        </View>

        {MOCK_CHAT.map((msg) => (
          <View key={msg.id} style={[styles.chatBubbleWrapper, msg.role === 'user' ? styles.bubbleRight : styles.bubbleLeft]}>
            
            {msg.role === 'ai' && (
               <View style={styles.aiAvatarBox}>
                  <View style={styles.aiAvatarShadow} />
                  <View style={styles.aiIconWrapper}>
                     <Ionicons name="hardware-chip" size={24} color={PAPER_WHITE} />
                  </View>
               </View>
            )}

            <View style={[styles.chatBubbleContainer, msg.role === 'user' ? styles.bubbleContainerRight : styles.bubbleContainerLeft]}>
               {/* TIMESTAMP / ID TAG */}
               <View style={[styles.tagTape, msg.role === 'user' ? styles.tagTapeUser : styles.tagTapeAI]}>
                  <Text style={styles.tagTapeText}>{msg.ref} // {msg.timestamp}</Text>
               </View>

               <View style={[styles.chatBubble, msg.role === 'user' ? styles.chatBubbleUser : styles.chatBubbleAI]}>
                 <Text style={[styles.chatText, msg.role === 'user' && { color: PAPER_WHITE }]}>{msg.text}</Text>
               </View>
            </View>

          </View>
        ))}

        {/* QUICK ACTION BUTTONS */}
        <View style={styles.quickActionsContainer}>
           <Text style={styles.quickActionLabel}>SUGGESTED PROTOCOLS:</Text>
           <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.quickActionScroll}>
              <TouchableOpacity style={[styles.qBtn, { backgroundColor: CYBER_YELLOW }]}><Text style={styles.qBtnText}>TRANSLATE</Text></TouchableOpacity>
              <TouchableOpacity style={[styles.qBtn, { backgroundColor: SKY_BLUE }]}><Text style={styles.qBtnText}>EXPLAIN</Text></TouchableOpacity>
              <TouchableOpacity style={[styles.qBtn, { backgroundColor: HYPER_RED }]}><Text style={[styles.qBtnText, { color: PAPER_WHITE }]}>PRONOUNCE</Text></TouchableOpacity>
           </ScrollView>
        </View>

      </ScrollView>

      {/* TACTICAL INPUT AREA */}
      <View style={styles.inputAreaWrap}>
        <View style={styles.inputShadow} />
        <View style={styles.inputArea}>
          
          <View style={styles.cmdHeader}>
             <Text style={styles.cmdHeaderText}>TERMINAL INPUT:</Text>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.promptArrow}>{'>_'}</Text>
            <TextInput
              style={styles.inputElement}
              placeholder="ENTER DIRECTIVE..."
              placeholderTextColor="#666"
              value={inputText}
              onChangeText={setInputText}
              multiline
            />
          </View>

          <TouchableOpacity style={styles.sendBtn} activeOpacity={0.9}>
            <View style={styles.sendShadow} />
            <View style={styles.sendFront}>
              <Ionicons name="flash" size={24} color={BLACK} />
              <Text style={styles.sendBtnText}>EXEC</Text>
            </View>
          </TouchableOpacity>
        
        </View>
      </View>

      <View style={{ height: Platform.OS === 'ios' ? 90 : 70 }} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: BG },
  
  header: { 
    position: 'relative', overflow: 'hidden', padding: 24, paddingTop: 32, paddingBottom: 40, 
    borderBottomWidth: 6, borderColor: BLACK, backgroundColor: PAPER_WHITE, marginBottom: 24 
  },
  headerDecorLine: { position: 'absolute', top: 0, bottom: 0, left: 40, width: 2, backgroundColor: BLACK, opacity: 0.1 },
  headerDecorLine2: { position: 'absolute', top: 0, bottom: 0, left: 80, width: 4, backgroundColor: BLACK, opacity: 0.05 },
  
  oversizedTitleBox: { position: 'relative', marginBottom: 16 },
  oversizedTitleShadow: { position: 'absolute', top: 4, left: 4, fontSize: 44, fontWeight: '900', color: SKY_BLUE, letterSpacing: -2 },
  oversizedTitle: { fontSize: 44, fontWeight: '900', color: BLACK, letterSpacing: -2, zIndex: 2 },
  
  statsRow: { flexDirection: 'row', gap: 12 },
  statsPill: { flexDirection: 'row', alignItems: 'center', borderWidth: 2, borderColor: BLACK, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 0 },
  statsPillText: { fontSize: 10, fontWeight: '900', fontFamily: 'monospace', letterSpacing: 1 },
  greenPulse: { width: 8, height: 8, backgroundColor: NEON_GREEN, borderRadius: 0, marginLeft: 8, borderWidth: 1, borderColor: BLACK },
  
  tapeDecor: { position: 'absolute', bottom: -12, right: 20, backgroundColor: CYBER_YELLOW, borderWidth: 2, borderColor: BLACK, transform: [{rotate: '-4deg'}], paddingHorizontal: 16, paddingVertical: 4, zIndex: 10 },
  tapeDecorText: { fontSize: 12, fontWeight: '900', color: BLACK, letterSpacing: 2 },

  chatScroll: { paddingHorizontal: 20, paddingBottom: 40 },
  
  barcodeWrap: { flexDirection: 'row', alignItems: 'center', marginBottom: 32, opacity: 0.5 },
  barcodeLine: { flex: 1, height: 2, backgroundColor: BLACK, marginHorizontal: 12 },
  barcodeText: { fontSize: 10, fontWeight: '900', fontFamily: 'monospace', color: BLACK },

  chatBubbleWrapper: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 32, maxWidth: '100%' },
  bubbleLeft: { alignSelf: 'flex-start' },
  bubbleRight: { alignSelf: 'flex-end', justifyContent: 'flex-end' },
  
  aiAvatarBox: { position: 'relative', width: 48, height: 48, marginRight: 16, marginTop: 10 },
  aiAvatarShadow: { position: 'absolute', top: 4, left: 4, right: -4, bottom: -4, backgroundColor: BLACK },
  aiIconWrapper: { flex: 1, backgroundColor: HYPER_RED, borderWidth: 3, borderColor: BLACK, justifyContent: 'center', alignItems: 'center' },
  
  chatBubbleContainer: { position: 'relative' },
  bubbleContainerLeft: { width: '85%' },
  bubbleContainerRight: { width: '85%' },

  tagTape: { position: 'absolute', top: -14, backgroundColor: PAPER_WHITE, borderWidth: 2, borderColor: BLACK, paddingHorizontal: 8, paddingVertical: 2, zIndex: 10 },
  tagTapeAI: { left: 16, transform: [{rotate: '-2deg'}] },
  tagTapeUser: { right: 16, transform: [{rotate: '2deg'}], backgroundColor: CYBER_YELLOW },
  tagTapeText: { fontSize: 9, fontWeight: '900', fontFamily: 'monospace', color: BLACK },

  chatBubble: {
    padding: 20, paddingTop: 24, borderWidth: 4, borderColor: BLACK,
    shadowColor: BLACK, shadowOffset: { width: 6, height: 6 }, shadowOpacity: 1, shadowRadius: 0
  },
  chatBubbleAI: { backgroundColor: PAPER_WHITE },
  chatBubbleUser: { backgroundColor: BLACK },
  chatText: { fontSize: 16, fontWeight: '800', color: BLACK, lineHeight: 24, fontFamily: 'monospace' },
  
  quickActionsContainer: { marginTop: 16, marginBottom: 24 },
  quickActionLabel: { fontSize: 12, fontWeight: '900', color: HYPER_RED, letterSpacing: 2, marginBottom: 12, marginLeft: 4 },
  quickActionScroll: { gap: 12, paddingBottom: 8 },
  qBtn: { borderWidth: 3, borderColor: BLACK, paddingHorizontal: 16, paddingVertical: 10, shadowColor: BLACK, shadowOffset: {width: 3, height: 3}, shadowOpacity: 1, shadowRadius: 0 },
  qBtnText: { fontSize: 14, fontWeight: '900', color: BLACK, letterSpacing: 1 },

  inputAreaWrap: { position: 'relative', marginHorizontal: 20, marginBottom: 16 },
  inputShadow: { position: 'absolute', top: 8, left: 8, right: -8, bottom: -8, backgroundColor: BLACK },
  inputArea: { backgroundColor: BG, borderWidth: 4, borderColor: BLACK },
  cmdHeader: { backgroundColor: BLACK, paddingHorizontal: 12, paddingVertical: 4 },
  cmdHeaderText: { color: NEON_GREEN, fontSize: 10, fontWeight: '900', fontFamily: 'monospace', letterSpacing: 2 },
  
  inputWrapper: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, minHeight: 60, maxHeight: 120, backgroundColor: PAPER_WHITE },
  promptArrow: { fontSize: 20, fontWeight: '900', color: HYPER_RED, marginRight: 12, fontFamily: 'monospace' },
  inputElement: { color: BLACK, fontSize: 16, fontWeight: '900', flex: 1, fontFamily: 'monospace', paddingVertical: 16 },
  
  sendBtn: { flexDirection: 'row', position: 'absolute', right: -12, bottom: -12, width: 90, height: 50 },
  sendShadow: { position: 'absolute', top: 4, left: 4, right: -4, bottom: -4, backgroundColor: BLACK },
  sendFront: { flex: 1, flexDirection: 'row', gap: 6, backgroundColor: CYBER_YELLOW, borderWidth: 3, borderColor: BLACK, justifyContent: 'center', alignItems: 'center' },
  sendBtnText: { fontSize: 16, fontWeight: '900', color: BLACK, letterSpacing: -1 },
});
