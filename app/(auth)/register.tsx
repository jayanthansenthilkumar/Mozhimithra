import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const BG = '#F4F1E1';
const BLACK = '#0A0A0A';
const PAPER_WHITE = '#FFFFFF';
const HYPER_RED = '#FF3B30';
const CYBER_YELLOW = '#FFD60A';
const NEON_GREEN = '#39FF14';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = () => {
    if (!name || !email || !password) return;
    setIsSubmitting(true);
    
    // Simulate API record creation
    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/(auth)/otp');
    }, 1800);
  };

  return (
    <KeyboardAvoidingView style={styles.mainContainer} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <SafeAreaView edges={['top']} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* MASSIVE HEADER */}
        <View style={styles.headerBox}>
           <Text style={styles.bgTitleShadow}>ENLIST</Text>
           <Text style={styles.titleText}>ENLIST</Text>
           <View style={styles.sysTape}>
              <Text style={styles.sysTapeText}>NEW_RECRUIT</Text>
           </View>
        </View>

        <Text style={styles.subtext}>REGISTER YOUR IDENTIFIER WITH MITHRA CENTRAL CORE.</Text>

        {/* INPUT FORM */}
        <View style={styles.formContainer}>
           <View style={styles.inputWrap}>
              <Text style={styles.inputLabel}>LEGAL ALIAS</Text>
              <TextInput 
                 style={styles.input} 
                 placeholder="JOHN DOE" 
                 placeholderTextColor="#888"
                 value={name}
                 onChangeText={setName}
              />
           </View>

           <View style={styles.inputWrap}>
              <Text style={styles.inputLabel}>OPERATIVE EMAIL</Text>
              <TextInput 
                 style={styles.input} 
                 placeholder="AGENT@SYS.COM" 
                 placeholderTextColor="#888"
                 value={email}
                 onChangeText={setEmail}
                 autoCapitalize="none"
              />
           </View>

           <View style={styles.inputWrap}>
              <Text style={styles.inputLabel}>NEW PASSKEY</Text>
              <TextInput 
                 style={styles.input} 
                 placeholder="***************" 
                 placeholderTextColor="#888"
                 value={password}
                 onChangeText={setPassword}
                 secureTextEntry
              />
           </View>
        </View>

        {/* BIG ASS BUTTON */}
        <TouchableOpacity 
           activeOpacity={0.9} 
           style={styles.btnWrap}
           onPress={handleRegister}
           disabled={isSubmitting}
        >
           <View style={styles.btnShadow} />
           <View style={[styles.btnFront, isSubmitting && { backgroundColor: CYBER_YELLOW }]}>
              <Text style={styles.btnText}>
                 {isSubmitting ? 'COMMITTING...' : 'COMMIT RECORD'}
              </Text>
              {!isSubmitting && <Ionicons name="warning" size={28} color={BLACK} />}
           </View>
        </TouchableOpacity>

        {/* FOOTER LINK */}
        <View style={styles.footerRow}>
           <Text style={styles.footerBase}>ALREADY REGISTERED? </Text>
           <Link href="/(auth)/login" asChild>
              <TouchableOpacity>
                 <Text style={styles.footerHighlight}>RETURN TO LOGIN.</Text>
              </TouchableOpacity>
           </Link>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: BG },
  scrollContent: { padding: 24, paddingTop: 60, flexGrow: 1 },
  
  headerBox: { position: 'relative', marginBottom: 40 },
  bgTitleShadow: { position: 'absolute', top: 6, left: 6, fontSize: 64, fontWeight: '900', color: NEON_GREEN, letterSpacing: -2 },
  titleText: { fontSize: 64, fontWeight: '900', color: BLACK, letterSpacing: -2, zIndex: 2 },
  sysTape: { position: 'absolute', top: -10, right: 10, backgroundColor: BLACK, paddingHorizontal: 12, paddingVertical: 4, transform: [{rotate: '8deg'}], borderWidth: 2, borderColor: PAPER_WHITE, zIndex: 10 },
  sysTapeText: { color: PAPER_WHITE, fontWeight: '900', fontSize: 10, fontFamily: 'monospace' },

  subtext: { fontSize: 16, fontWeight: '900', color: BLACK, letterSpacing: 2, marginBottom: 48, lineHeight: 24, backgroundColor: PAPER_WHITE, padding: 8, borderWidth: 2, borderColor: BLACK, transform: [{rotate: '-1deg'}] },

  formContainer: { gap: 24, marginBottom: 48 },
  inputWrap: { position: 'relative' },
  inputLabel: { position: 'absolute', top: -10, left: 16, backgroundColor: CYBER_YELLOW, color: BLACK, fontSize: 10, fontWeight: '900', paddingHorizontal: 8, paddingVertical: 4, zIndex: 2, letterSpacing: 1, borderWidth: 2, borderColor: BLACK },
  input: { backgroundColor: PAPER_WHITE, borderWidth: 4, borderColor: BLACK, padding: 20, fontSize: 18, fontWeight: '900', color: BLACK, shadowColor: BLACK, shadowOffset: {width: -4, height: 4}, shadowOpacity: 1, shadowRadius: 0 },

  btnWrap: { position: 'relative', marginBottom: 48 },
  btnShadow: { position: 'absolute', top: 8, left: 8, right: -8, bottom: -8, backgroundColor: BLACK },
  btnFront: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: HYPER_RED, padding: 24, paddingHorizontal: 32, borderWidth: 4, borderColor: BLACK },
  btnText: { fontSize: 24, fontWeight: '900', color: BLACK, letterSpacing: 2 },

  footerRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  footerBase: { fontSize: 14, fontWeight: '900', color: BLACK, letterSpacing: 1 },
  footerHighlight: { fontSize: 14, fontWeight: '900', color: PAPER_WHITE, letterSpacing: 1, textDecorationLine: 'underline', backgroundColor: BLACK, paddingHorizontal: 8, paddingVertical: 4, transform: [{rotate: '2deg'}] },
});
