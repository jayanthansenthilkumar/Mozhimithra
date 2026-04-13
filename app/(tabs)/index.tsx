import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

const { width } = Dimensions.get('window');

/**
 * Ultra-Premium Glassmorphism Aesthetic.
 * Forces a "Dark Luxury" theme overlaid with heavily blurred elements and vivid gradient accents.
 */
export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      
      {/* BACKGROUND GLOWS (Ambient Light FX) */}
      <View style={[styles.glowOrb, { top: -150, right: -150, backgroundColor: '#8A2BE2', opacity: 0.3 }]} />
      <View style={[styles.glowOrb, { top: 200, left: -200, backgroundColor: '#4ECDC4', opacity: 0.2, width: 400, height: 400 }]} />
      <View style={[styles.glowOrb, { bottom: -100, right: -100, backgroundColor: '#FF6B6B', opacity: 0.15, width: 300, height: 300 }]} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <SafeAreaView edges={['top']} />

        {/* TOP NAVIGATION & PROFILE */}
        <View style={styles.header}>
          <View>
            <Text style={styles.dateLabel}>DAILY LEARNING TARGET</Text>
            <View style={styles.greetingRow}>
              <Text style={styles.heroGreeting}>Namaste, </Text>
              <Text style={styles.heroGreetingName}>Priya.</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.avatarContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' }} 
              style={styles.avatar} 
            />
            <View style={styles.proBadge}><Text style={styles.proBadgeText}>PRO</Text></View>
          </TouchableOpacity>
        </View>

        {/* ULTRA-PREMIUM BENTO GRID HERO */}
        <View style={styles.bentoHero}>
          
          {/* Top Wide Bento: primary progress */}
          <BlurView intensity={40} tint="dark" style={styles.bentoWideCard}>
            <View style={styles.bentoWideHeader}>
              <View style={styles.bentoTag}><Text style={styles.bentoTagText}>TAMIL MASTERY</Text></View>
              <Ionicons name="sparkles" size={18} color="#FFD700" />
            </View>
            <View style={styles.bentoWideRow}>
              <View>
                <Text style={styles.bentoTitle}>Level 4 • Unit 2</Text>
                <Text style={styles.bentoSub}>Travel & Dining</Text>
              </View>
              <View style={styles.bentoCircleProgress}>
                <Text style={styles.bentoCircleText}>85%</Text>
              </View>
            </View>
          </BlurView>

          {/* Bottom Split Bento */}
          <View style={styles.bentoSplitRow}>
            
            {/* Left Box: Quick Action (Start) */}
            <TouchableOpacity style={styles.bentoActionWrapper} activeOpacity={0.9} onPress={() => router.push('/course/1')}>
              <LinearGradient colors={['#8A2BE2', '#4FC3F7']} start={{x:0, y:0}} end={{x:1, y:1}} style={styles.bentoActionCard}>
                <View style={styles.bentoActionIcon}>
                  <Ionicons name="play" size={28} color="#05030A" />
                </View>
                <Text style={styles.bentoActionText}>Resume</Text>
                <Text style={styles.bentoActionSub}>12 mins</Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Right Box: AI Insight Focus */}
            <TouchableOpacity style={styles.bentoInsightWrapper} activeOpacity={0.9} onPress={() => router.push('/mithra')}>
              <BlurView intensity={30} tint="dark" style={styles.bentoInsightCard}>
                <View style={styles.insightIconWrapper}>
                  <Ionicons name="planet" size={24} color="#4ECDC4" />
                </View>
                <Text style={styles.bentoInsightLabel}>Suggested</Text>
                <Text style={styles.bentoInsightValue}>Speaking</Text>
              </BlurView>
            </TouchableOpacity>

          </View>
        </View>

        {/* PREMIUM METRIC SQUARES */}
        <View style={styles.metricsRow}>
          
          <View style={styles.metricCardWrapper}>
            <BlurView intensity={25} tint="dark" style={styles.metricGlass}>
              <View style={styles.metricIconRow}>
                <Ionicons name="flash" size={24} color="#FFD700" />
                <Text style={styles.metricTitle}>ENERGY</Text>
              </View>
              <Text style={styles.metricValue}>1,250</Text>
              <Text style={styles.metricSub}>+120 today</Text>
            </BlurView>
          </View>

          <View style={styles.metricCardWrapper}>
            <BlurView intensity={25} tint="dark" style={styles.metricGlass}>
              <View style={styles.metricIconRow}>
                <Ionicons name="time" size={24} color="#4ECDC4" />
                <Text style={styles.metricTitle}>TIME</Text>
              </View>
              <Text style={styles.metricValue}>45<Text style={styles.metricValueSmall}>m</Text></Text>
              <Text style={styles.metricSub}>Daily goal met</Text>
            </BlurView>
          </View>

        </View>

        {/* HORIZONTAL MASTERY CARDS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Mastery Tracks</Text>
          <Ionicons name="options-outline" size={24} color="#FFF" />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
          {[
             { id: 1, title: 'Conversational', icon: 'chatbubbles', pct: 60, col1: '#8A2BE2', col2: '#B19CD9' },
             { id: 2, title: 'Grammar', icon: 'color-wand', pct: 40, col1: '#FF7F50', col2: '#FFB347' },
             { id: 3, title: 'Vocabulary', icon: 'library', pct: 85, col1: '#4ECDC4', col2: '#2B8C85' },
          ].map(track => (
            <TouchableOpacity key={track.id} activeOpacity={0.9} style={styles.trackCardWrapper}>
              <BlurView intensity={20} tint="dark" style={styles.trackCardGlass}>
                <View style={styles.trackTop}>
                  <LinearGradient colors={[track.col1, track.col2]} style={styles.trackIconBg}>
                    <Ionicons name={track.icon as any} size={24} color="#FFF" />
                  </LinearGradient>
                  <Text style={styles.trackPctText}>{track.pct}%</Text>
                </View>
                <Text style={styles.trackTitle}>{track.title}</Text>
                
                {/* Thin Gradient Line */}
                <View style={styles.thinTrackBg}>
                  <LinearGradient colors={[track.col1, track.col2]} style={[styles.thinTrackFill, { width: `${track.pct}%` }]} />
                </View>
              </BlurView>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* AI INSIGHT / NEWS */}
        <View style={styles.insightWrapper}>
          <LinearGradient
            colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.02)']}
            style={styles.insightGradientBox}
          >
            <View style={styles.insightHeader}>
              <Ionicons name="planet" size={20} color="#4ECDC4" />
              <Text style={styles.insightLabel}>AI LEARNING INSIGHT</Text>
            </View>
            <Text style={styles.insightText}>
              You are completing listening comprehension tasks 20% faster than the global average. Keep focusing on native audio!
            </Text>
          </LinearGradient>
        </View>

        <View style={{ height: 120 }} />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#05030A', // True pitch black / deep violet baseline
  },
  glowOrb: {
    position: 'absolute',
    width: 350,
    height: 350,
    borderRadius: 175,
    // Note: React Native drops shadow for blur on bare Views sometimes doesn't composite smoothly across all Androids unless expo-blur is used. 
    // Opacity creates the gradient effect effectively.
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 20,
    marginBottom: 32,
  },
  dateLabel: {
    color: '#8A2BE2',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 8,
  },
  greetingRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  heroGreeting: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 28,
    fontWeight: '400',
  },
  heroGreetingName: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: '800',
  },
  avatarContainer: {
    position: 'relative',
    padding: 2,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  proBadge: {
    position: 'absolute',
    bottom: -6,
    alignSelf: 'center',
    backgroundColor: '#8A2BE2',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#05030A',
  },
  proBadgeText: {
    color: '#FFF',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },
  heroDashboard: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  dashboardGlass: {
    borderRadius: 32,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    overflow: 'hidden',
  },
  dashboardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },

  bentoHero: {
    paddingHorizontal: 24,
    marginBottom: 24,
    gap: 16,
  },
  bentoWideCard: {
    borderRadius: 32,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    overflow: 'hidden',
  },
  bentoWideHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  bentoTag: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  bentoTagText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
  },
  bentoWideRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  bentoTitle: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 4,
  },
  bentoSub: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
    fontWeight: '600',
  },
  bentoCircleProgress: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(78,205,196,0.15)',
    borderWidth: 2,
    borderColor: '#4ECDC4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bentoCircleText: {
    color: '#4ECDC4',
    fontSize: 16,
    fontWeight: '800',
  },
  bentoSplitRow: {
    flexDirection: 'row',
    gap: 16,
    height: 160,
  },
  bentoActionWrapper: {
    flex: 1,
    shadowColor: '#8A2BE2',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  bentoActionCard: {
    flex: 1,
    borderRadius: 32,
    padding: 20,
    justifyContent: 'space-between',
  },
  bentoActionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bentoActionText: {
    color: '#0A0A0A',
    fontSize: 20,
    fontWeight: '800',
  },
  bentoActionSub: {
    color: 'rgba(10,10,10,0.6)',
    fontSize: 14,
    fontWeight: '700',
  },
  bentoInsightWrapper: {
    flex: 1.1,
  },
  bentoInsightCard: {
    flex: 1,
    borderRadius: 32,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  insightIconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(78,205,196,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bentoInsightLabel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  bentoInsightValue: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '800',
  },
  metricsRow: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    gap: 16,
    marginBottom: 32,
  },
  metricCardWrapper: {
    flex: 1,
  },
  metricGlass: {
    padding: 20,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    overflow: 'hidden',
  },
  metricIconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  metricTitle: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  metricValue: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 4,
  },
  metricValueSmall: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.5)',
  },
  metricSub: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 13,
    fontWeight: '500',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  horizontalScroll: {
    paddingHorizontal: 24,
    gap: 16,
    marginBottom: 32,
  },
  trackCardWrapper: {
    width: 160,
  },
  trackCardGlass: {
    padding: 20,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    overflow: 'hidden',
  },
  trackTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  trackIconBg: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trackPctText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 14,
    fontWeight: '700',
  },
  trackTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 16,
  },
  thinTrackBg: {
    height: 3,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 1.5,
    overflow: 'hidden',
  },
  thinTrackFill: {
    height: '100%',
    borderRadius: 1.5,
  },
  insightWrapper: {
    paddingHorizontal: 24,
  },
  insightGradientBox: {
    padding: 24,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'rgba(78, 205, 196, 0.3)',
  },
  insightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  insightLabel: {
    color: '#4ECDC4',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginLeft: 8,
  },
  insightText: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '400',
  }
});
