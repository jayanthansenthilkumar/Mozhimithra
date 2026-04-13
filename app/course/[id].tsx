import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

const COURSE_DATA = {
  title: 'Tamil for Beginners',
  description: 'Master the basics of Tamil. Learn to introduce yourself, order food, and navigate daily conversations in South India with confidence.',
  level: 'A1 Beginner',
  students: '42.1k',
  chapters: [
    { id: 'c1', title: 'Vanakkam & Greetings', lessons: 4, completed: 4 },
    { id: 'c2', title: 'Numbers & Time', lessons: 5, completed: 5 },
    { id: 'c3', title: 'Food & Dining (Saapad)', lessons: 6, completed: 2 },
    { id: 'c4', title: 'Travel & Directions', lessons: 5, completed: 0 },
    { id: 'c5', title: 'Family & Friends', lessons: 4, completed: 0 },
  ]
};

export default function CourseScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.mainContainer}>

      <View style={[styles.glowOrb, { top: -150, right: -150, backgroundColor: '#8A2BE2', opacity: 0.2 }]} />
      <View style={[styles.glowOrb, { top: 300, left: -200, backgroundColor: '#4ECDC4', opacity: 0.15 }]} />

      <SafeAreaView edges={['top']} />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreBtn}>
          <Ionicons name="bookmark-outline" size={28} color="#FFF" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        <View style={styles.courseHeader}>
          <LinearGradient
            colors={['#8A2BE2', '#B19CD9']}
            style={styles.iconWrapper}
          >
            <Ionicons name="earth" size={64} color="#FFF" />
          </LinearGradient>
          <Text style={styles.title}>{COURSE_DATA.title}</Text>
          
          <View style={styles.metaContainer}>
            <BlurView intensity={20} tint="dark" style={styles.metaBadge}>
              <Ionicons name="stats-chart" size={16} color="#8A2BE2" />
              <Text style={styles.metaText}>{COURSE_DATA.level}</Text>
            </BlurView>
            <BlurView intensity={20} tint="dark" style={styles.metaBadge}>
              <Ionicons name="people" size={16} color="#4ECDC4" />
              <Text style={styles.metaText}>{COURSE_DATA.students}</Text>
            </BlurView>
          </View>
          
          <Text style={styles.description}>{COURSE_DATA.description}</Text>
        </View>

        <View style={styles.chaptersSection}>
          <Text style={styles.sectionTitle}>Syllabus</Text>
          
          {COURSE_DATA.chapters.map((chapter, index) => {
            const isCompleted = chapter.completed === chapter.lessons;
            const inProgress = chapter.completed > 0 && chapter.completed < chapter.lessons;
            
            return (
              <TouchableOpacity 
                key={chapter.id} 
                style={styles.chapterCardWrapper}
                onPress={() => router.push(`/lesson/1`)}
              >
                <BlurView intensity={20} tint="dark" style={[
                  styles.chapterCard,
                  inProgress && { borderColor: '#8A2BE2' }
                ]}>
                  <View style={[styles.chapterIcon, { 
                    backgroundColor: isCompleted ? '#4ECDC420' : inProgress ? '#8A2BE220' : 'rgba(255,255,255,0.05)' 
                  }]}>
                    <Text style={[styles.chapterNumber, { 
                      color: isCompleted ? '#4ECDC4' : inProgress ? '#8A2BE2' : 'rgba(255,255,255,0.4)' 
                    }]}>{index + 1}</Text>
                  </View>
                  
                  <View style={styles.chapterInfo}>
                    <Text style={styles.chapterTitle}>{chapter.title}</Text>
                    <Text style={styles.chapterMeta}>
                      {chapter.completed} / {chapter.lessons} Lessons
                    </Text>
                  </View>
                  
                  {isCompleted ? (
                    <Ionicons name="checkmark-circle" size={32} color="#4ECDC4" />
                  ) : inProgress ? (
                    <Ionicons name="play-circle" size={36} color="#8A2BE2" />
                  ) : (
                    <Ionicons name="lock-closed" size={24} color="rgba(255,255,255,0.2)" />
                  )}
                </BlurView>
              </TouchableOpacity>
            )
          })}
        </View>

        <View style={{ height: 120 }} />

      </ScrollView>

      <BlurView intensity={50} tint="dark" style={styles.footer}>
        <TouchableOpacity style={styles.startBtnWrapper}>
          <LinearGradient
            colors={['#8A2BE2', '#4ECDC4']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.startBtn}
          >
            <Text style={styles.startBtnText}>Continue Learning</Text>
            <Ionicons name="arrow-forward" size={24} color="#FFF" />
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
    width: 350,
    height: 350,
    borderRadius: 175,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  backBtn: {
    padding: 8,
  },
  moreBtn: {
    padding: 8,
  },
  container: {
    paddingHorizontal: 24,
  },
  courseHeader: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  iconWrapper: {
    width: 120,
    height: 120,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#8A2BE2',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 38,
  },
  metaContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  metaBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    gap: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    overflow: 'hidden',
  },
  metaText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
  },
  description: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  chaptersSection: {
    gap: 16,
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  chapterCardWrapper: {
    borderRadius: 24,
    overflow: 'hidden',
  },
  chapterCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  chapterIcon: {
    width: 56,
    height: 56,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  chapterNumber: {
    fontSize: 20,
    fontWeight: '800',
  },
  chapterInfo: {
    flex: 1,
  },
  chapterTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  chapterMeta: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 14,
    fontWeight: '600',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: Platform.OS === 'ios' ? 40 : 24,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  startBtnWrapper: {
    shadowColor: '#8A2BE2',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  startBtn: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  startBtnText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 1,
  },
});
