import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Platform, Image, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

const MOCK_CHAT = [
  { id: '1', role: 'ai', text: 'Namaste Priya! I am Mithra, your AI language companion. Are we practicing Tamil conversation today?' },
  { id: '2', role: 'user', text: 'Yes, how do I ask "Where is the nearest restaurant?" in Tamil?' },
  { id: '3', role: 'ai', text: 'You can say: "Unavagam enge irukku?" (உணவகம் எங்கே இருக்கு?). Would you like to practice pronouncing it?' },
];

export default function MithraScreen() {
  const [inputText, setInputText] = useState('');

  return (
    <KeyboardAvoidingView 
      style={styles.mainContainer} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      
      {/* GLOWS */}
      <View style={[styles.glowOrb, { top: -100, left: -100, backgroundColor: '#8A2BE2', opacity: 0.2 }]} />
      <View style={[styles.glowOrb, { bottom: 200, right: -150, backgroundColor: '#4ECDC4', opacity: 0.15 }]} />

      <SafeAreaView edges={['top']} />

      {/* HEADER */}
      <View style={styles.header}>
        
        <View style={styles.headerTitleContainer}>
          <LinearGradient
            colors={['#8A2BE2', '#4ECDC4']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.aiAvatar}
          >
            <Ionicons name="sparkles" size={16} color="#FFF" />
          </LinearGradient>
          <View>
            <Text style={styles.headerTitle}>Mithra AI</Text>
            <Text style={styles.headerSub}>Always listening • Online</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.menuBtn}>
          <Ionicons name="ellipsis-vertical" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.chatScroll} showsVerticalScrollIndicator={false}>
        <View style={styles.dateBadgeWrapper}>
          <BlurView intensity={20} tint="dark" style={styles.dateBadge}>
            <Text style={styles.dateText}>TODAY</Text>
          </BlurView>
        </View>

        {MOCK_CHAT.map((msg) => (
          <View 
            key={msg.id} 
            style={[
              styles.chatBubbleWrapper, 
              msg.role === 'user' ? styles.bubbleRight : styles.bubbleLeft
            ]}
          >
            {msg.role === 'ai' && (
              <LinearGradient
                colors={['#8A2BE2', '#B19CD9']}
                style={styles.smallAvatar}
              >
                <Ionicons name="planet" size={14} color="#FFF" />
              </LinearGradient>
            )}
            
            <BlurView 
              intensity={msg.role === 'ai' ? 40 : 20} 
              tint="dark" 
              style={[
                styles.chatBubble,
                msg.role === 'user' ? styles.chatBubbleUser : styles.chatBubbleAI
              ]}
            >
              <Text style={[
                styles.chatText,
                msg.role === 'user' ? { color: '#FFF' } : { color: '#E0E0E0' }
              ]}>{msg.text}</Text>
            </BlurView>
          </View>
        ))}
      </ScrollView>

      {/* INPUT AREA */}
      <BlurView intensity={60} tint="dark" style={styles.inputArea}>
        <TouchableOpacity style={styles.attachBtn}>
          <Ionicons name="add-circle-outline" size={28} color="rgba(255,255,255,0.6)" />
        </TouchableOpacity>
        
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputElement}
            placeholder="Ask Mithra..."
            placeholderTextColor="rgba(255,255,255,0.4)"
            value={inputText}
            onChangeText={setInputText}
            multiline
          />
        </View>

        {inputText.length > 0 ? (
          <TouchableOpacity style={styles.sendBtn}>
            <LinearGradient
              colors={['#8A2BE2', '#4ECDC4']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.sendBtnGradient}
            >
              <Ionicons name="arrow-up" size={20} color="#FFF" />
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.micBtn}>
            <View style={styles.micBtnInner}>
              <Ionicons name="mic" size={22} color="#FFF" />
            </View>
          </TouchableOpacity>
        )}
      </BlurView>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#05030A',
  },
  glowOrb: {
    position: 'absolute',
    width: 350,
    height: 350,
    borderRadius: 175,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  backBtn: {
    padding: 8,
  },
  menuBtn: {
    padding: 8,
  },
  headerTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  aiAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  headerSub: {
    color: '#4ECDC4',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  chatScroll: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 20,
  },
  dateBadgeWrapper: {
    alignItems: 'center',
    marginBottom: 8,
  },
  dateBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    overflow: 'hidden',
  },
  dateText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  chatBubbleWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    maxWidth: '85%',
  },
  bubbleLeft: {
    alignSelf: 'flex-start',
  },
  bubbleRight: {
    alignSelf: 'flex-end',
  },
  smallAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    marginBottom: 4,
  },
  chatBubble: {
    padding: 16,
    borderRadius: 24,
    borderWidth: 1,
    overflow: 'hidden',
  },
  chatBubbleAI: {
    backgroundColor: 'rgba(138,43,226,0.1)',
    borderColor: 'rgba(138,43,226,0.3)',
    borderBottomLeftRadius: 4,
  },
  chatBubbleUser: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderColor: 'rgba(255,255,255,0.1)',
    borderBottomRightRadius: 4,
  },
  chatText: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: Platform.OS === 'ios' ? 36 : 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
    gap: 12,
  },
  attachBtn: {
    padding: 8,
    marginBottom: 4,
  },
  inputWrapper: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 48,
    maxHeight: 120,
  },
  inputElement: {
    color: '#FFF',
    fontSize: 16,
  },
  micBtn: {
    padding: 2,
    marginBottom: 4,
  },
  micBtnInner: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  sendBtn: {
    padding: 2,
    marginBottom: 4,
  },
  sendBtnGradient: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
