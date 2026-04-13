import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const COURSES = [
  { id: '1', title: 'Tamil for Beginners', level: 'A1', lessons: 24, progress: 100, color: '#9b7ede', icon: 'earth' },
  { id: '2', title: 'Spoken Hindi', level: 'B1', lessons: 32, progress: 35, color: '#FF7F50', icon: 'chatbubbles' },
  { id: '3', title: 'Learn Malayalam Script', level: 'A2', lessons: 18, progress: 0, color: '#FF6B6B', icon: 'book' },
  { id: '4', title: 'Conversational Telugu', level: 'B2', lessons: 20, progress: 0, color: '#4ECDC4', icon: 'people' },
  { id: '5', title: 'Bengali Basics', level: 'A1', lessons: 15, progress: 0, color: '#FFD700', icon: 'language' }
];

export default function CoursesScreen() {
  return (
    <View style={styles.mainContainer}>
      
      <View style={[styles.glowOrb, { top: -100, right: -50, backgroundColor: '#FF7F50', opacity: 0.15 }]} />
      <View style={[styles.glowOrb, { bottom: 100, left: -200, backgroundColor: '#9b7ede', opacity: 0.15, width: 400, height: 400 }]} />

      <SafeAreaView edges={['top']} />

      <View style={styles.header}>
        <Text style={styles.title}>Library</Text>
        <TouchableOpacity style={styles.searchBtn}>
          <Ionicons name="search" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Collections</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.featuredScroll}>
            {[
              { id: 'feat1', title: 'Business English', duration: '3 weeks', col1: '#FF7F50', col2: '#FF6B6B', icon: 'briefcase' },
              { id: 'feat2', title: 'Sanskrit Mantras', duration: '4 weeks', col1: '#4ECDC4', col2: '#2B8C85', icon: 'book' }
            ].map(course => (
              <TouchableOpacity key={course.id} style={styles.featuredCardWrapper}>
                <LinearGradient
                  colors={[course.col1, course.col2]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.featuredCard}
                >
                  <Ionicons name={course.icon as any} size={48} color="rgba(255,255,255,0.3)" style={styles.featuredIcon} />
                  <View style={styles.featuredInfo}>
                    <Text style={styles.featuredTitle}>{course.title}</Text>
                    <BlurView intensity={40} tint="light" style={styles.featuredDurationTag}>
                      <Text style={styles.featuredDurationText}>{course.duration}</Text>
                    </BlurView>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.tabs}>
          <TouchableOpacity style={styles.tabActive}>
            <Text style={styles.tabTextActive}>Ongoing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Completed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Saved</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.courseList}>
          {COURSES.map((course) => (
            <TouchableOpacity 
              key={course.id} 
              activeOpacity={0.8}
              onPress={() => router.push(`/course/${course.id}`)}
              style={styles.courseCardWrapper}
            >
              <BlurView intensity={30} tint="dark" style={styles.courseCard}>
                <View style={[styles.iconContainer, { backgroundColor: `${course.color}25` }]}>
                  <Ionicons name={course.icon as any} size={28} color={course.color} />
                </View>
                
                <View style={styles.courseInfo}>
                  <Text style={styles.courseTitle}>{course.title}</Text>
                  <View style={styles.courseMeta}>
                    <View style={styles.levelBadge}>
                      <Text style={[styles.levelText, { color: course.color }]}>{course.level}</Text>
                    </View>
                    <Text style={styles.lessonText}>• {course.lessons} chapters</Text>
                  </View>
                  
                  {course.progress > 0 && (
                    <View style={styles.progressContainer}>
                      <View style={styles.progressBarBg}>
                        <LinearGradient
                          colors={[course.color, `${course.color}90`]}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 0 }}
                          style={[styles.progressBarFill, { width: `${course.progress}%` }]} 
                        />
                      </View>
                      <Text style={styles.progressText}>{course.progress}%</Text>
                    </View>
                  )}
                </View>
                
                <Ionicons name="chevron-forward" size={24} color="rgba(255,255,255,0.4)" />
              </BlurView>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
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
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#FFF',
    letterSpacing: -0.5,
  },
  searchBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  container: {
    paddingBottom: 40,
  },
  featuredSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFF',
    marginBottom: 16,
    paddingHorizontal: 24,
    letterSpacing: 0.5,
  },
  featuredScroll: {
    gap: 16,
    paddingHorizontal: 24,
  },
  featuredCardWrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  featuredCard: {
    width: 280,
    height: 180,
    borderRadius: 32,
    padding: 24,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  featuredIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  featuredInfo: {
  },
  featuredTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 12,
    lineHeight: 30,
  },
  featuredDurationTag: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
  featuredDurationText: {
    color: '#111',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 24,
    paddingHorizontal: 24,
    gap: 12,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  tabActive: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 24,
    backgroundColor: '#8A2BE2',
  },
  tabText: {
    color: 'rgba(255,255,255,0.6)',
    fontWeight: '700',
    fontSize: 14,
  },
  tabTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  courseList: {
    gap: 16,
    paddingHorizontal: 24,
  },
  courseCardWrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 4,
  },
  courseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    overflow: 'hidden',
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  courseInfo: {
    flex: 1,
    marginRight: 8,
  },
  courseTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 6,
  },
  courseMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  levelBadge: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
  },
  levelText: {
    fontSize: 11,
    fontWeight: '800',
  },
  lessonText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 13,
    fontWeight: '600',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarBg: {
    flex: 1,
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 3,
    marginRight: 12,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
    fontWeight: '700',
  },
});
