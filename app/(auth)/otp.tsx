import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const BG = '#F4F1E1';
const BLACK = '#0A0A0A';
const PAPER_WHITE = '#FFFFFF';
const HYPER_RED = '#FF3B30';
const CYBER_YELLOW = '#FFD60A';

export default function OtpScreen() {
  const [code, setCode] = useState(['', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const inputs = useRef<TextInput[]>([]);

  const handleInput = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleVerify = () => {
    if (code.some(c => !c)) return; // Don't verify if incomplete
    setIsVerifying(true);
    
    // Simulate API chip validation
    setTimeout(() => {
      setIsVerifying(false);
      router.push('/(tabs)');
    }, 1500);
  };

  return (
    <KeyboardAvoidingView style={styles.mainContainer} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      
      
      {/* GLOBAL BACKGROUND NOISE/WATERMARK */}
      <View style={styles.bgWatermarkWrap} pointerEvents="none">
         <Text style={styles.bgWatermark} adjustsFontSizeToFit minimumFontScale={0.2}>VERIFY</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
           <Ionicons name="arrow-back" size={32} color={BLACK} />
        </TouchableOpacity>

        {/* HEADER */}
        <View style={styles.headerBox}>
           <Text style={styles.titleText}>2FA SYNC</Text>
        </View>

        <View style={styles.descBox}>
           <Text style={styles.descText}>INPUT THE 4-DIGIT DIRECTIVE SENT TO YOUR COMMS CHANNEL.</Text>
        </View>

        {/* OTP GRID */}
        <View style={styles.otpGrid}>
           {[0, 1, 2, 3].map((index) => (
             <View key={index} style={[styles.otpWrap, { transform: [{rotate: `${(index % 2 === 0 ? -2 : 2)}deg`}] }]}>
                <View style={styles.otpShadow} />
                <TextInput 
                   ref={(el) => { if (el) inputs.current[index] = el; }}
                   style={styles.otpInput}
                   maxLength={1}
                   keyboardType="number-pad"
                   value={code[index]}
                   onChangeText={(text) => handleInput(text, index)}
                />
             </View>
           ))}
        </View>

        {/* VALIDATE BUTTON */}
        <TouchableOpacity 
           activeOpacity={0.9} 
           style={styles.btnWrap}
           onPress={handleVerify}
           disabled={isVerifying}
        >
           <View style={styles.btnShadow} />
           <View style={[styles.btnFront, isVerifying && { backgroundColor: CYBER_YELLOW }]}>
              <Text style={styles.btnText}>
                 {isVerifying ? 'SCANNING...' : 'VALIDATE CHIP'}
              </Text>
              {!isVerifying && <Ionicons name="scan" size={28} color={BLACK} />}
           </View>
        </TouchableOpacity>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: BG, position: 'relative' },
  
  bgWatermarkWrap: { position: 'absolute', top: 0, left: -40, bottom: 0, width: 220, justifyContent: 'center' },
  bgWatermark: { fontSize: 240, fontWeight: '900', color: '#E8E5D5', transform: [{rotate: '-90deg'}], width: 900, textAlign: 'center', letterSpacing: -2 },

  scrollContent: { padding: 24, paddingTop: 40, flexGrow: 1 },
  
  backBtn: { alignSelf: 'flex-start', marginBottom: 20, borderWidth: 3, borderColor: BLACK, padding: 8, backgroundColor: PAPER_WHITE, shadowColor: BLACK, shadowOffset: {width: 4, height: 4}, shadowOpacity: 1, shadowRadius: 0 },

  headerBox: { marginBottom: 24, backgroundColor: BLACK, padding: 16, alignSelf: 'flex-start', transform: [{rotate: '-1deg'}], borderWidth: 2, borderColor: BLACK, shadowColor: HYPER_RED, shadowOffset: {width: 6, height: 6}, shadowOpacity: 1, shadowRadius: 0 },
  titleText: { fontSize: 40, fontWeight: '900', color: PAPER_WHITE, letterSpacing: -1 },

  descBox: { backgroundColor: CYBER_YELLOW, borderWidth: 4, borderColor: BLACK, padding: 16, marginBottom: 60, transform: [{rotate: '1deg'}], shadowColor: BLACK, shadowOffset: {width: -4, height: 6}, shadowOpacity: 1, shadowRadius: 0 },
  descText: { fontSize: 14, fontWeight: '900', color: BLACK, letterSpacing: 2, lineHeight: 22 },

  otpGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 60 },
  otpWrap: { position: 'relative', width: 70, height: 80 },
  otpShadow: { position: 'absolute', top: 6, left: 6, right: -6, bottom: -6, backgroundColor: BLACK },
  otpInput: { flex: 1, backgroundColor: PAPER_WHITE, borderWidth: 4, borderColor: BLACK, fontSize: 32, fontWeight: '900', textAlign: 'center', color: BLACK },

  btnWrap: { position: 'relative', marginTop: 20 },
  btnShadow: { position: 'absolute', top: 8, left: 8, right: -8, bottom: -8, backgroundColor: BLACK },
  btnFront: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: PAPER_WHITE, padding: 24, paddingHorizontal: 32, borderWidth: 4, borderColor: BLACK },
  btnText: { fontSize: 24, fontWeight: '900', color: BLACK, letterSpacing: 2 },
});
