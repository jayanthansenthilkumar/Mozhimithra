import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const BG = '#FFF1E5';
const BLACK = '#0A0A0A';
const ACCENT_YELLOW = '#FFE066';
const ACCENT_PINK = '#FFAFCC';
const ACCENT_BLUE = '#A2D2FF';

const OPTIONS = [
  { id: '1', text: 'Vanakkam', correct: true },
  { id: '2', text: 'Poyi Varam', correct: false },
  { id: '3', text: 'Nandri', correct: false },
  { id: '4', text: 'Saaptacha?', correct: false },
];

export default function LessonScreen() {
  const { id } = useLocalSearchParams();
  
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    if (!isChecked) setIsChecked(true);
    else router.back();
  };

  const isCorrect = selectedOpt === '1';

  return (
    <View style={styles.mainContainer}>
      
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeBtn} onPress={() => router.back()}>
          <Ionicons name="close" size={24} color={BLACK} />
        </TouchableOpacity>
        
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarFill, { width: '40%' }]} />
        </View>
        
        <View style={styles.heartContainer}>
          <Ionicons name="heart" size={20} color={ACCENT_PINK} />
          <Text style={styles.heartText}>5</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.questionType}>NEW PHRASE // Translate</Text>
        
        <View style={styles.speechBubble}>
          {/* Overhanging Borders */}
          <View style={[styles.crosshairV, { left: 10 }]} />
          <View style={[styles.crosshairV, { right: 10 }]} />
          <View style={[styles.crosshairH, { top: 10 }]} />
          <View style={[styles.crosshairH, { bottom: 10 }]} />
          
          <Text style={styles.targetPhrase}>"Hello"</Text>
          <TouchableOpacity style={styles.audioBtn}>
             <Ionicons name="volume-medium" size={24} color={BLACK} />
          </TouchableOpacity>
        </View>

        <View style={styles.optionsContainer}>
          {OPTIONS.map((opt) => {
            const isSelected = selectedOpt === opt.id;
            const styleChecked = isChecked && isSelected;
            const itemBg = styleChecked ? (isCorrect ? ACCENT_BLUE : ACCENT_PINK) : (isSelected ? ACCENT_YELLOW : '#FFF');
            
            return (
              <TouchableOpacity 
                key={opt.id}
                activeOpacity={0.9}
                style={[
                  styles.optionCard, 
                  { backgroundColor: itemBg },
                  isSelected && styles.optionSelected
                ]}
                onPress={() => !isChecked && setSelectedOpt(opt.id)}
              >
                <Text style={styles.optionText}>{opt.text}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View style={[styles.footer, isChecked && { backgroundColor: isCorrect ? ACCENT_BLUE : ACCENT_PINK }]}>
        {isChecked && (
          <View style={styles.feedbackContainer}>
            <View style={[styles.feedbackIconCircle, { backgroundColor: '#FFF' }]}>
              <Ionicons name={isCorrect ? "checkmark" : "close"} size={32} color={BLACK} />
            </View>
            <View>
              <Text style={styles.feedbackTitle}>{isCorrect ? 'Excellent!' : 'Incorrect.'}</Text>
              {!isCorrect && <Text style={styles.feedbackSub}>The correct answer is Vanakkam.</Text>}
            </View>
          </View>
        )}
        
        <TouchableOpacity 
          activeOpacity={0.9}
          disabled={!selectedOpt}
          style={[styles.actionBtn, !selectedOpt && styles.actionBtnDisabled]}
          onPress={handleCheck}
        >
          <Text style={[styles.actionBtnText, !selectedOpt && { color: '#888' }]}>
            {isChecked ? 'CONTINUE' : 'CHECK ANSWER'}
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: BG },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, borderBottomWidth: 4, borderColor: BLACK },
  closeBtn: { padding: 8, borderWidth: 2, borderColor: BLACK, backgroundColor: '#FFF', borderRadius: 8 },
  progressBarBg: { flex: 1, height: 16, backgroundColor: '#FFF', borderWidth: 2, borderColor: BLACK, marginHorizontal: 16 },
  progressBarFill: { height: '100%', backgroundColor: ACCENT_YELLOW, borderRightWidth: 2, borderColor: BLACK },
  heartContainer: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 8, borderWidth: 2, borderColor: BLACK, backgroundColor: '#FFF' },
  heartText: { color: BLACK, fontSize: 16, fontWeight: '900', marginLeft: 6 },
  
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 32 },
  questionType: { color: BLACK, fontSize: 16, fontWeight: '900', letterSpacing: 1, marginBottom: 24 },
  
  speechBubble: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    padding: 32, backgroundColor: '#FFF', borderWidth: 2, borderColor: BLACK, marginBottom: 48,
    shadowColor: BLACK, shadowOffset: { width: 6, height: 6 }, shadowOpacity: 1, shadowRadius: 0
  },
  crosshairV: { position: 'absolute', top: -10, bottom: -10, width: 2, backgroundColor: BLACK, zIndex: 1 },
  crosshairH: { position: 'absolute', left: -10, right: -10, height: 2, backgroundColor: BLACK, zIndex: 1 },
  
  targetPhrase: { color: BLACK, fontSize: 32, fontWeight: '900', zIndex: 2 },
  audioBtn: { width: 56, height: 56, borderRadius: 28, backgroundColor: ACCENT_YELLOW, borderWidth: 2, borderColor: BLACK, justifyContent: 'center', alignItems: 'center', zIndex: 2 },
  
  optionsContainer: { gap: 20 },
  optionCard: {
    padding: 24, borderWidth: 2, borderColor: BLACK,
    shadowColor: BLACK, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 0
  },
  optionSelected: { shadowOffset: { width: 0, height: 0 }, transform: [{ translateY: 4 }, { translateX: 4 }] },
  optionText: { color: BLACK, fontSize: 20, fontWeight: '800', textAlign: 'center' },
  
  footer: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    paddingHorizontal: 24, paddingTop: 24, paddingBottom: Platform.OS === 'ios' ? 40 : 24,
    borderTopWidth: 4, borderColor: BLACK, backgroundColor: '#FFF'
  },
  feedbackContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  feedbackIconCircle: { width: 56, height: 56, borderWidth: 2, borderColor: BLACK, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  feedbackTitle: { fontSize: 24, fontWeight: '900', marginBottom: 4, color: BLACK },
  feedbackSub: { fontSize: 16, fontWeight: '700', color: '#444' },
  
  actionBtn: {
    paddingVertical: 20, backgroundColor: ACCENT_YELLOW, borderWidth: 2, borderColor: BLACK,
    shadowColor: BLACK, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 0, alignItems: 'center'
  },
  actionBtnDisabled: { backgroundColor: '#E0E0E0', shadowOpacity: 0 },
  actionBtnText: { color: BLACK, fontSize: 18, fontWeight: '900', letterSpacing: 1 },
});
