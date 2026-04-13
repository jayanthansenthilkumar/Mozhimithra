import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

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

      {/* GLOWS */}
      <View style={[styles.glowOrb, { top: -200, left: -150, backgroundColor: isChecked ? (isCorrect ? '#4ECDC4' : '#FF6B6B') : '#8A2BE2', opacity: 0.15 }]} />
      <View style={[styles.glowOrb, { bottom: 100, right: -150, backgroundColor: '#8A2BE2', opacity: 0.1 }]} />

      <SafeAreaView edges={['top']} />
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeBtn} onPress={() => router.back()}>
          <Ionicons name="close" size={28} color="#FFF" />
        </TouchableOpacity>
        
        <View style={styles.progressBarBg}>
          <LinearGradient
            colors={['#8A2BE2', '#4ECDC4']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.progressBarFill, { width: '40%' }]} 
          />
        </View>
        
        <BlurView intensity={20} tint="dark" style={styles.heartContainer}>
          <Ionicons name="heart" size={20} color="#FF6B6B" />
          <Text style={styles.heartText}>5</Text>
        </BlurView>
      </View>

      <View style={styles.content}>
        <Text style={styles.questionType}>NEW PHRASE</Text>
        <Text style={styles.questionText}>Translate this phrase</Text>
        
        <View style={styles.avatarContainer}>
          <BlurView intensity={40} tint="light" style={styles.speechBubble}>
            <Text style={styles.targetPhrase}>"Hello"</Text>
            <TouchableOpacity style={styles.audioBtn}>
               <Ionicons name="volume-medium" size={24} color="#8A2BE2" />
            </TouchableOpacity>
          </BlurView>
        </View>

        <View style={styles.optionsContainer}>
          {OPTIONS.map((opt) => (
            <TouchableOpacity 
              key={opt.id}
              activeOpacity={0.8}
              onPress={() => !isChecked && setSelectedOpt(opt.id)}
            >
              <BlurView 
                intensity={isChecked && selectedOpt === opt.id ? 40 : 20} 
                tint={isChecked && selectedOpt === opt.id && isCorrect ? "light" : "dark"}
                style={[
                  styles.optionCard,
                  selectedOpt === opt.id && { borderColor: isChecked ? (isCorrect ? '#4ECDC4' : '#FF6B6B') : '#8A2BE2', borderWidth: 2 },
                  isChecked && selectedOpt === opt.id && { backgroundColor: isCorrect ? 'rgba(78,205,196,0.2)' : 'rgba(255,107,107,0.2)' }
                ]}
              >
                <Text style={[
                  styles.optionText, 
                  selectedOpt === opt.id && { color: isChecked ? (isCorrect ? '#4ECDC4' : '#FF6B6B') : '#8A2BE2' },
                  isChecked && selectedOpt === opt.id && isCorrect && { color: '#0A0A0A', fontWeight: '800' }
                ]}>{opt.text}</Text>
              </BlurView>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <BlurView 
        intensity={80} 
        tint={isChecked ? (isCorrect ? "light" : "dark") : "dark"}
        style={[
          styles.footer, 
          isChecked && { backgroundColor: isCorrect ? 'rgba(78,205,196,0.3)' : 'rgba(255,107,107,0.2)' }
        ]}
      >
        {isChecked && (
          <View style={styles.feedbackContainer}>
            <View style={styles.feedbackIconCircle}>
              <Ionicons name={isCorrect ? "checkmark" : "close"} size={32} color={isCorrect ? "#0A0A0A" : "#FF6B6B"} />
            </View>
            <View>
              <Text style={[styles.feedbackTitle, { color: isCorrect ? '#0A0A0A' : '#FF6B6B' }]}>
                {isCorrect ? 'Excellent!' : 'Incorrect.'}
              </Text>
              {!isCorrect && <Text style={styles.feedbackSub}>The correct answer is Vanakkam.</Text>}
            </View>
          </View>
        )}
        
        <TouchableOpacity 
          activeOpacity={0.9}
          disabled={!selectedOpt}
          onPress={handleCheck}
        >
          <LinearGradient
            colors={!selectedOpt ? ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.05)'] : isChecked ? (isCorrect ? ['#FFF', '#F0F0F0'] : ['#FF6B6B', '#D64545']) : ['#8A2BE2', '#B19CD9']}
            style={styles.actionBtn}
          >
            <Text style={[
              styles.actionBtnText, 
              { color: !selectedOpt ? 'rgba(255,255,255,0.3)' : isChecked && isCorrect ? '#0A0A0A' : '#FFF' }
            ]}>
              {isChecked ? 'CONTINUE' : 'CHECK ANSWER'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </BlurView>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#05030A',
  },
  glowOrb: {
    position: 'absolute',
    width: 400,
    height: 400,
    borderRadius: 200,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 20,
  },
  closeBtn: {
    padding: 8,
  },
  progressBarBg: {
    flex: 1,
    height: 12,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 6,
    marginHorizontal: 16,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 6,
  },
  heartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    overflow: 'hidden',
  },
  heartText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '800',
    marginLeft: 6,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  questionType: {
    color: '#8A2BE2',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 8,
  },
  questionText: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 40,
    lineHeight: 40,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  speechBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    overflow: 'hidden',
  },
  targetPhrase: {
    color: '#0A0A0A',
    fontSize: 24,
    fontWeight: '800',
    marginRight: 16,
  },
  audioBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  optionsContainer: {
    gap: 16,
  },
  optionCard: {
    padding: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    overflow: 'hidden',
  },
  optionText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700',
  },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: Platform.OS === 'ios' ? 40 : 24,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  feedbackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  feedbackIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  feedbackTitle: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 4,
  },
  feedbackSub: {
    color: 'rgba(255,107,107,0.8)',
    fontSize: 16,
    fontWeight: '600',
  },
  actionBtn: {
    paddingVertical: 20,
    borderRadius: 32,
    alignItems: 'center',
  },
  actionBtnText: {
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 2,
  },
});
