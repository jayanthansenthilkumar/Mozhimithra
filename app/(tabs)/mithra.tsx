import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
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

const MOCK_CHAT = [
  { id: '1', role: 'ai', text: 'TERMINAL LINK SECURED. MITHRA AI ONLINE.' },
  { id: '2', role: 'user', text: 'How do I ask "Where is the nearest restaurant?" in Tamil?' },
  { id: '3', role: 'ai', text: 'TRANSLATION YIELD: "Unavagam enge irukku?". Execute audio synthesis?' },
];

export default function MithraScreen() {
  const [inputText, setInputText] = useState('');

  return (
    <KeyboardAvoidingView style={styles.mainContainer} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <SafeAreaView edges={['top']} />

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.navBox}>
          <Text style={styles.navLogoText}>MITHRA // TERMINAL UP</Text>
          <View style={styles.navStatusBox}>
             <View style={styles.greenDot} />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.chatScroll} showsVerticalScrollIndicator={false}>
        {MOCK_CHAT.map((msg) => (
          <View key={msg.id} style={[styles.chatBubbleWrapper, msg.role === 'user' ? styles.bubbleRight : styles.bubbleLeft]}>
            
            {msg.role === 'ai' && (
               <View style={styles.aiAvatarBox}>
                  <Ionicons name="hardware-chip" size={16} color={PAPER_WHITE} />
               </View>
            )}

            <View style={[styles.chatBubble, msg.role === 'user' ? styles.chatBubbleUser : styles.chatBubbleAI]}>
              <View style={msg.role === 'user' ? styles.tapeUser : styles.tapeAI} />
              <Text style={[styles.chatText, msg.role === 'user' && { color: PAPER_WHITE }]}>{msg.text}</Text>
            </View>

          </View>
        ))}
      </ScrollView>

      {/* INPUT AREA */}
      <View style={styles.inputArea}>
        <View style={styles.inputWrapper}>
          <Text style={styles.promptArrow}>{'>'}</Text>
          <TextInput
            style={styles.inputElement}
            placeholder="EXECUTE COMMAND..."
            placeholderTextColor="#888"
            value={inputText}
            onChangeText={setInputText}
            multiline
          />
        </View>

        <TouchableOpacity style={styles.sendBtn} activeOpacity={0.9}>
          <View style={styles.sendShadow} />
          <View style={styles.sendFront}>
             <Ionicons name="return-down-forward" size={24} color={BLACK} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ height: Platform.OS === 'ios' ? 90 : 70 }} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: BG },
  header: { padding: 24, borderBottomWidth: 4, borderColor: BLACK, backgroundColor: PAPER_WHITE, marginBottom: 16 },
  navBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: BLACK, alignSelf: 'flex-start', transform: [{rotate: '-1deg'}] },
  navLogoText: { fontWeight: '900', fontSize: 14, color: NEON_GREEN, paddingHorizontal: 16, paddingVertical: 10, letterSpacing: 2, fontFamily: 'monospace' },
  navStatusBox: { borderLeftWidth: 2, borderColor: '#333', padding: 12, backgroundColor: '#222' },
  greenDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: NEON_GREEN },

  chatScroll: { paddingHorizontal: 20, paddingBottom: 24, gap: 24 },
  chatBubbleWrapper: { flexDirection: 'row', alignItems: 'flex-start', maxWidth: '85%' },
  bubbleLeft: { alignSelf: 'flex-start' },
  bubbleRight: { alignSelf: 'flex-end', justifyContent: 'flex-end' },
  
  aiAvatarBox: { width: 40, height: 40, borderWidth: 3, borderColor: BLACK, backgroundColor: HYPER_RED, justifyContent: 'center', alignItems: 'center', marginRight: 12, transform: [{rotate: '10deg'}] },
  
  chatBubble: {
    padding: 16, borderWidth: 3, borderColor: BLACK, position: 'relative',
    shadowColor: BLACK, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 0
  },
  chatBubbleAI: { backgroundColor: CYBER_YELLOW },
  chatBubbleUser: { backgroundColor: BLACK },
  chatText: { fontSize: 16, fontWeight: '800', color: BLACK, lineHeight: 24, fontFamily: 'monospace' },
  
  tapeAI: { position: 'absolute', top: -10, right: -10, width: 40, height: 16, backgroundColor: 'rgba(255,255,255,0.6)', borderWidth: 1, borderColor: BLACK, transform: [{rotate: '12deg'}] },
  tapeUser: { position: 'absolute', bottom: -10, left: -10, width: 40, height: 16, backgroundColor: 'rgba(255,59,48,0.8)', borderWidth: 1, borderColor: BLACK, transform: [{rotate: '-8deg'}] },

  inputArea: {
    flexDirection: 'row', alignItems: 'flex-end', paddingHorizontal: 20, paddingVertical: 16,
    borderTopWidth: 4, borderColor: BLACK, backgroundColor: PAPER_WHITE, gap: 16
  },
  inputWrapper: {
    flex: 1, backgroundColor: BG, borderWidth: 3, borderColor: BLACK, flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 16, minHeight: 60, maxHeight: 120
  },
  promptArrow: { fontSize: 20, fontWeight: '900', color: HYPER_RED, marginRight: 12, fontFamily: 'monospace' },
  inputElement: { color: BLACK, fontSize: 16, fontWeight: '900', flex: 1, fontFamily: 'monospace', paddingVertical: 16 },
  sendBtn: { position: 'relative', width: 60, height: 60 },
  sendShadow: { position: 'absolute', top: 4, left: 4, right: -4, bottom: -4, backgroundColor: BLACK },
  sendFront: { flex: 1, backgroundColor: SKY_BLUE, borderWidth: 3, borderColor: BLACK, justifyContent: 'center', alignItems: 'center' },
});
