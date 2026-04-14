import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const BG = '#F4F1E1';
const BLACK = '#0A0A0A';
const PAPER_WHITE = '#FFFFFF';
const HYPER_RED = '#FF3B30';
const CYBER_YELLOW = '#FFD60A';
const SKY_BLUE = '#30B0FF';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [isResetting, setIsResetting] = useState(false);

  const handleReset = () => {
    if (!email) return;
    setIsResetting(true);
    
    // Simulate API recovery sequence
    setTimeout(() => {
      setIsResetting(false);
      alert('RECOVERY PROTOCOL DISPATCHED.');
      router.back();
    }, 2000);
  };

  return (
    <KeyboardAvoidingView style={styles.mainContainer} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      
      
      {/* WARNING TOP TAPE */}
      <View style={styles.hazardTape}>
         {[...Array(15)].map((_, i) => (
            <View key={i} style={styles.cautionStripe} />
         ))}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
           <Text style={styles.backText}>{'<- ABORT'}</Text>
        </TouchableOpacity>

        {/* TITLE */}
        <View style={styles.headerTitleWrap}>
           <Text style={styles.titleShadow}>RECOVERY</Text>
           <Text style={styles.titleText}>RECOVERY</Text>
        </View>

        <Text style={styles.subtext}>SYSTEM OVERRIDE DETECTED. PROVIDE OPERATIVE IDENTIFICATION TO RECEIVE BYPASS PROTOCOL.</Text>

        <View style={styles.inputWrap}>
           <Text style={styles.inputLabel}>IDENTIFICATION (EMAIL)</Text>
           <TextInput 
              style={styles.input} 
              placeholder="AGENT@SYS.COM" 
              placeholderTextColor="#888"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
           />
        </View>

        {/* SUBMIT RECOVERY */}
        <TouchableOpacity 
           activeOpacity={0.9} 
           style={styles.btnWrap}
           onPress={handleReset}
           disabled={isResetting}
        >
           <View style={styles.btnShadow} />
           <View style={[styles.btnFront, isResetting && { backgroundColor: CYBER_YELLOW, borderColor: BLACK }]}>
              <Text style={[styles.btnText, isResetting && { color: BLACK }]}>
                 {isResetting ? 'EXECUTING...' : 'INITIATE RESET'}
              </Text>
              {!isResetting && <Ionicons name="skull" size={24} color={PAPER_WHITE} />}
           </View>
        </TouchableOpacity>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: BG },
  
  hazardTape: { position: 'absolute', top: -30, left: -20, right: -20, height: 80, backgroundColor: CYBER_YELLOW, flexDirection: 'row', opacity: 0.8, borderWidth: 4, borderColor: BLACK, transform: [{rotate: '2deg'}], zIndex: 10, overflow: 'hidden' },
  cautionStripe: { width: 30, height: 120, backgroundColor: BLACK, transform: [{rotate: '45deg'}], marginRight: 30, marginTop: -20 },

  scrollContent: { padding: 24, paddingTop: 80, flexGrow: 1 },
  
  backBtn: { alignSelf: 'flex-start', marginBottom: 40, backgroundColor: BLACK, paddingHorizontal: 16, paddingVertical: 8, transform: [{rotate: '-2deg'}] },
  backText: { color: PAPER_WHITE, fontWeight: '900', fontSize: 14, fontFamily: 'monospace' },

  headerTitleWrap: { position: 'relative', marginBottom: 24 },
  titleShadow: { position: 'absolute', top: 4, left: 4, fontSize: 56, fontWeight: '900', color: SKY_BLUE, letterSpacing: -2 },
  titleText: { fontSize: 56, fontWeight: '900', color: BLACK, letterSpacing: -2, zIndex: 2 },

  subtext: { fontSize: 14, fontWeight: '900', color: HYPER_RED, letterSpacing: 2, marginBottom: 48, lineHeight: 22, borderLeftWidth: 4, borderColor: BLACK, paddingLeft: 12 },

  inputWrap: { position: 'relative', marginBottom: 64 },
  inputLabel: { position: 'absolute', top: -14, left: -10, backgroundColor: PAPER_WHITE, color: BLACK, fontSize: 12, fontWeight: '900', paddingHorizontal: 12, paddingVertical: 6, zIndex: 2, letterSpacing: 1, borderWidth: 3, borderColor: BLACK, transform: [{rotate: '-2deg'}] },
  input: { backgroundColor: PAPER_WHITE, borderWidth: 4, borderColor: BLACK, padding: 20, paddingTop: 28, fontSize: 18, fontWeight: '900', color: BLACK, shadowColor: BLACK, shadowOffset: {width: 6, height: 6}, shadowOpacity: 1, shadowRadius: 0 },

  btnWrap: { position: 'relative' },
  btnShadow: { position: 'absolute', top: 8, left: 8, right: -8, bottom: -8, backgroundColor: BLACK },
  btnFront: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: BLACK, padding: 24, borderWidth: 4, borderColor: HYPER_RED, gap: 12 },
  btnText: { fontSize: 24, fontWeight: '900', color: PAPER_WHITE, letterSpacing: 2 },
});
