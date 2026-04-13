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

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) return;
    setIsLoading(true);
    
    // Simulating JS API connection delay
    setTimeout(() => {
      setIsLoading(false);
      router.push('/(tabs)');
    }, 1500);
  };

  return (
    <KeyboardAvoidingView style={styles.mainContainer} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <SafeAreaView edges={['top']} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* MASSIVE HEADER */}
        <View style={styles.headerBox}>
           <Text style={styles.bgTitleShadow}>LOGIN</Text>
           <Text style={styles.titleText}>LOGIN</Text>
           <View style={styles.sysTape}>
              <Text style={styles.sysTapeText}>SEC_PROTOCOL_01</Text>
           </View>
        </View>

        <Text style={styles.subtext}>AUTHENTICATE TO ACCESS TERMINAL.</Text>

        {/* INPUT FORM */}
        <View style={styles.formContainer}>
           <View style={styles.inputWrap}>
              <Text style={styles.inputLabel}>OPERATIVE EMAIL ID</Text>
              <TextInput 
                 style={styles.input} 
                 placeholder="TYPE HERE..." 
                 placeholderTextColor="#888"
                 value={email}
                 onChangeText={setEmail}
                 autoCapitalize="none"
              />
           </View>

           <View style={styles.inputWrap}>
              <Text style={styles.inputLabel}>ACCESS PASSKEY</Text>
              <TextInput 
                 style={styles.input} 
                 placeholder="***************" 
                 placeholderTextColor="#888"
                 value={password}
                 onChangeText={setPassword}
                 secureTextEntry
              />
           </View>

           <TouchableOpacity style={styles.forgotLink} onPress={() => router.push('/(auth)/forgot')}>
              <Text style={styles.forgotText}>FORGOT PASSKEY?</Text>
           </TouchableOpacity>
        </View>

        {/* BIG ASS BUTTON */}
        <TouchableOpacity 
           activeOpacity={0.9} 
           style={styles.btnWrap}
           onPress={handleLogin}
           disabled={isLoading}
        >
           <View style={styles.btnShadow} />
           <View style={[styles.btnFront, isLoading && { backgroundColor: CYBER_YELLOW }]}>
              <Text style={[styles.btnText, isLoading && { color: BLACK }]}>
                 {isLoading ? 'SYNCING...' : 'INITIATE SYNC'}
              </Text>
              {!isLoading && <Ionicons name="arrow-forward" size={28} color={PAPER_WHITE} />}
           </View>
        </TouchableOpacity>

        {/* FOOTER LINK */}
        <View style={styles.footerRow}>
           <Text style={styles.footerBase}>NO ACCESS CHIP? </Text>
           <Link href="/(auth)/register" asChild>
              <TouchableOpacity>
                 <Text style={styles.footerHighlight}>ENLIST NOW.</Text>
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
  bgTitleShadow: { position: 'absolute', top: 6, left: 6, fontSize: 64, fontWeight: '900', color: CYBER_YELLOW, letterSpacing: -2 },
  titleText: { fontSize: 64, fontWeight: '900', color: BLACK, letterSpacing: -2, zIndex: 2 },
  sysTape: { position: 'absolute', top: -10, right: 10, backgroundColor: HYPER_RED, paddingHorizontal: 12, paddingVertical: 4, transform: [{rotate: '8deg'}], borderWidth: 2, borderColor: BLACK, zIndex: 10 },
  sysTapeText: { color: PAPER_WHITE, fontWeight: '900', fontSize: 10, fontFamily: 'monospace' },

  subtext: { fontSize: 16, fontWeight: '900', color: BLACK, letterSpacing: 2, marginBottom: 48, lineHeight: 24 },

  formContainer: { gap: 24, marginBottom: 48 },
  inputWrap: { position: 'relative' },
  inputLabel: { position: 'absolute', top: -10, left: 16, backgroundColor: BLACK, color: PAPER_WHITE, fontSize: 10, fontWeight: '900', paddingHorizontal: 8, paddingVertical: 4, zIndex: 2, letterSpacing: 1 },
  input: { backgroundColor: PAPER_WHITE, borderWidth: 4, borderColor: BLACK, padding: 20, fontSize: 18, fontWeight: '900', color: BLACK, shadowColor: BLACK, shadowOffset: {width: 4, height: 4}, shadowOpacity: 1, shadowRadius: 0 },
  
  forgotLink: { alignSelf: 'flex-end', marginTop: 8 },
  forgotText: { fontSize: 12, fontWeight: '900', color: HYPER_RED, letterSpacing: 1, textDecorationLine: 'underline' },

  btnWrap: { position: 'relative', marginBottom: 48 },
  btnShadow: { position: 'absolute', top: 8, left: 8, right: -8, bottom: -8, backgroundColor: CYBER_YELLOW, borderWidth: 4, borderColor: BLACK },
  btnFront: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: BLACK, padding: 24, paddingHorizontal: 32, borderWidth: 4, borderColor: BLACK },
  btnText: { fontSize: 24, fontWeight: '900', color: PAPER_WHITE, letterSpacing: 2 },

  footerRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  footerBase: { fontSize: 14, fontWeight: '900', color: BLACK, letterSpacing: 1 },
  footerHighlight: { fontSize: 14, fontWeight: '900', color: HYPER_RED, letterSpacing: 1, textDecorationLine: 'underline', backgroundColor: CYBER_YELLOW, paddingHorizontal: 4 },
});
