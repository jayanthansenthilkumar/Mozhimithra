import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { fetchCourseById } from '@/services/api.service';

const BG = '#FFF1E5';
const BLACK = '#0A0A0A';
const ACCENT_YELLOW = '#FFE066';
const ACCENT_BLUE = '#A2D2FF';

export default function CourseScreen() {
  const { id } = useLocalSearchParams();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourse = async () => {
      if (typeof id === 'string') {
        const data = await fetchCourseById(id);
        setCourse(data);
      }
      setLoading(false);
    };
    loadCourse();
  }, [id]);

  if (loading) {
    return (
      <View style={[styles.mainContainer, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={BLACK} />
      </View>
    );
  }

  if (!course) {
    return (
      <View style={[styles.mainContainer, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={styles.headerTitle}>Course Not Found</Text>
        <TouchableOpacity style={[styles.backBtn, { marginTop: 20 }]} onPress={() => router.back()}>
          <Text style={styles.metaText}>GO BACK</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      

      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color={BLACK} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Syllabus</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        <View style={styles.courseHeader}>
          <Text style={styles.title}>{course.title}</Text>
          <Text style={styles.description}>{course.description}</Text>
          
          <View style={styles.metaContainer}>
            <View style={styles.metaBadge}>
              <Text style={styles.metaText}>{course.level}</Text>
            </View>
            <View style={[styles.metaBadge, { backgroundColor: ACCENT_YELLOW }]}>
              <Text style={styles.metaText}>{course.students} students</Text>
            </View>
          </View>
        </View>

        <View style={styles.chaptersSection}>
          {course.chapters.map((chapter: any, index: number) => {
            const totalLessons = Array.isArray(chapter.lessons) ? chapter.lessons.length : (chapter.lessons || 0);
            const isCompleted = chapter.completed === totalLessons && totalLessons > 0;
            const inProgress = chapter.completed > 0 && chapter.completed < totalLessons;
            
            return (
              <TouchableOpacity 
                key={chapter.id} 
                style={styles.chapterCardWrapper}
                onPress={() => {
                  const firstLessonId = chapter.lessons?.[0]?.id || 'l1';
                  router.push(`/lesson/${firstLessonId}` as any);
                }}
                activeOpacity={0.9}
              >
                <View style={[
                  styles.chapterCard,
                  isCompleted && { backgroundColor: ACCENT_BLUE },
                  inProgress && { backgroundColor: ACCENT_YELLOW }
                ]}>
                  <View style={styles.chapterNumberBox}>
                    <Text style={styles.chapterNumber}>{index + 1}</Text>
                  </View>
                  
                  <View style={styles.chapterInfo}>
                    <Text style={styles.chapterTitle}>{chapter.title}</Text>
                    <Text style={styles.chapterMeta}>
                      {chapter.completed} / {totalLessons} Lessons
                    </Text>
                  </View>
                  
                  {isCompleted ? (
                    <Ionicons name="checkmark-sharp" size={28} color={BLACK} />
                  ) : inProgress ? (
                    <Ionicons name="play-sharp" size={28} color={BLACK} />
                  ) : (
                    <Ionicons name="lock-closed" size={24} color="#888" />
                  )}
                </View>
              </TouchableOpacity>
            )
          })}
        </View>

        <View style={{ height: 120 }} />

      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.startBtn} activeOpacity={0.9}>
          <Text style={styles.startBtnText}>Continue Learning</Text>
          <Ionicons name="arrow-forward" size={24} color={BLACK} />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: BG },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 16, paddingVertical: 12, borderBottomWidth: 4, borderColor: BLACK,
  },
  backBtn: { padding: 8, borderWidth: 2, borderColor: BLACK, backgroundColor: '#FFF', borderRadius: 8 },
  headerTitle: { fontSize: 20, fontWeight: '900', color: BLACK },
  
  container: { paddingHorizontal: 24, paddingTop: 32 },
  
  courseHeader: { marginBottom: 40 },
  title: { fontSize: 36, fontWeight: '900', color: BLACK, marginBottom: 16, lineHeight: 40 },
  description: { color: '#333', fontSize: 16, lineHeight: 26, fontWeight: '500', marginBottom: 20 },
  
  metaContainer: { flexDirection: 'row', gap: 12 },
  metaBadge: {
    paddingHorizontal: 16, paddingVertical: 8, borderWidth: 2, borderColor: BLACK,
    backgroundColor: '#FFF',
    shadowColor: BLACK, shadowOffset: { width: 3, height: 3 }, shadowOpacity: 1, shadowRadius: 0
  },
  metaText: { color: BLACK, fontSize: 13, fontWeight: '800' },
  
  chaptersSection: { gap: 20 },
  chapterCardWrapper: { position: 'relative' },
  chapterCard: {
    flexDirection: 'row', alignItems: 'center', padding: 20,
    backgroundColor: '#FFF', borderWidth: 2, borderColor: BLACK,
    shadowColor: BLACK, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 0
  },
  chapterNumberBox: {
    width: 48, height: 48, borderWidth: 2, borderColor: BLACK, backgroundColor: '#FFF',
    justifyContent: 'center', alignItems: 'center', marginRight: 16
  },
  chapterNumber: { fontSize: 20, fontWeight: '900', color: BLACK },
  chapterInfo: { flex: 1 },
  chapterTitle: { color: BLACK, fontSize: 18, fontWeight: '800', marginBottom: 4 },
  chapterMeta: { color: '#555', fontSize: 14, fontWeight: '600' },
  
  footer: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    paddingHorizontal: 24, paddingTop: 24, paddingBottom: Platform.OS === 'ios' ? 40 : 24,
    backgroundColor: BG, borderTopWidth: 4, borderColor: BLACK
  },
  startBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12,
    backgroundColor: ACCENT_YELLOW, paddingVertical: 20, borderWidth: 2, borderColor: BLACK,
    shadowColor: BLACK, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 0
  },
  startBtnText: { color: BLACK, fontSize: 18, fontWeight: '900', letterSpacing: 1 },
});
