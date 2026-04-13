import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

// NEOBRUTALISM CONSTANTS
const BG = '#FFF1E5';
const BLACK = '#0A0A0A';
const ACCENT_YELLOW = '#FFE066';
const ACCENT_BLUE = '#A2D2FF';

const MOCK_CHAT = [
  { id: '1', role: 'ai', text: 'Namaste Priya! I am Mithra, your AI companion. Are we practicing Tamil conversation today?' },
  { id: '2', role: 'user', text: 'Yes, how do I ask "Where is the nearest restaurant?"' },
  { id: '3', role: 'ai', text: 'You can say: "Unavagam enge irukku?". Would you like to practice pronouncing it?' },
];

export default function MithraScreen() {
  const [inputText, setInputText] = useState('');

  return (
    <KeyboardAvoidingView style={styles.mainContainer} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <SafeAreaView edges={['top']} />

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.navBox}>
          <Text style={styles.navLogoText}>Mithra AI</Text>
          <View style={styles.navLinkBorder}>
             <Ionicons name="planet" size={20} color={BLACK} />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.chatScroll} showsVerticalScrollIndicator={false}>
        {MOCK_CHAT.map((msg) => (
          <View key={msg.id} style={[styles.chatBubbleWrapper, msg.role === 'user' ? styles.bubbleRight : styles.bubbleLeft]}>
            
            {msg.role === 'ai' && (
               <View style={styles.aiAvatar}>
                  <Ionicons name="sparkles" size={12} color={BLACK} />
               </View>
            )}

            <View style={[styles.chatBubble, msg.role === 'user' ? styles.chatBubbleUser : styles.chatBubbleAI]}>
              <Text style={styles.chatText}>{msg.text}</Text>
            </View>

          </View>
        ))}
      </ScrollView>

      {/* INPUT AREA */}
      <View style={styles.inputArea}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputElement}
            placeholder="Ask Mithra..."
            placeholderTextColor="#666"
            value={inputText}
            onChangeText={setInputText}
            multiline
          />
        </View>

        <TouchableOpacity style={styles.sendBtn}>
          <Ionicons name="arrow-up" size={20} color={BLACK} />
        </TouchableOpacity>
      </View>

      <View style={{ height: Platform.OS === 'ios' ? 90 : 70 }} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: BG },
  header: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 20, borderBottomWidth: 4, borderColor: BLACK },
  navBox: { flexDirection: 'row', alignItems: 'center', borderWidth: 2, borderColor: BLACK, backgroundColor: '#FFF', alignSelf: 'flex-start' },
  navLogoText: { fontWeight: '800', fontSize: 16, color: BLACK, paddingHorizontal: 16, paddingVertical: 10 },
  navLinkBorder: { borderLeftWidth: 2, borderColor: BLACK, padding: 10, backgroundColor: ACCENT_YELLOW },

  chatScroll: { paddingHorizontal: 20, paddingVertical: 24, gap: 24 },
  chatBubbleWrapper: { flexDirection: 'row', alignItems: 'flex-end', maxWidth: '85%' },
  bubbleLeft: { alignSelf: 'flex-start' },
  bubbleRight: { alignSelf: 'flex-end' },
  aiAvatar: { width: 28, height: 28, borderRadius: 14, borderWidth: 2, borderColor: BLACK, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', marginRight: 8, marginBottom: -8, zIndex: 2 },
  
  chatBubble: {
    padding: 16, borderWidth: 2, borderColor: BLACK,
    shadowColor: BLACK, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 0, elevation: 6
  },
  chatBubbleAI: { backgroundColor: '#FFF', borderTopRightRadius: 20, borderTopLeftRadius: 20, borderBottomRightRadius: 20 },
  chatBubbleUser: { backgroundColor: ACCENT_BLUE, borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20 },
  chatText: { fontSize: 15, fontWeight: '600', color: BLACK, lineHeight: 22 },

  inputArea: {
    flexDirection: 'row', alignItems: 'flex-end', paddingHorizontal: 20, paddingVertical: 16,
    borderTopWidth: 4, borderColor: BLACK, backgroundColor: '#FFF', gap: 12
  },
  inputWrapper: {
    flex: 1, backgroundColor: BG, borderWidth: 2, borderColor: BLACK,
    paddingHorizontal: 16, paddingVertical: 12, minHeight: 48, maxHeight: 120
  },
  inputElement: { color: BLACK, fontSize: 16, fontWeight: '500' },
  sendBtn: {
    width: 48, height: 48, backgroundColor: ACCENT_YELLOW, borderWidth: 2, borderColor: BLACK,
    justifyContent: 'center', alignItems: 'center', marginBottom: 4,
    shadowColor: BLACK, shadowOffset: { width: 3, height: 3 }, shadowOpacity: 1, shadowRadius: 0
  },
});
