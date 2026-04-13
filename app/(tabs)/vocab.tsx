import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

const CATEGORIES = [
  { id: '1', name: 'Greetings', count: 15, mastered: 15, color: '#4ECDC4' },
  { id: '2', name: 'Food & Drinks', count: 120, mastered: 45, color: '#FF7F50' },
  { id: '3', name: 'Travel', count: 85, mastered: 10, color: '#9b7ede' },
  { id: '4', name: 'Animals', count: 40, mastered: 38, color: '#FFD700' },
];

export default function VocabScreen() {
  const [activeTab, setActiveTab] = useState('Learning');

  return (
    <View style={styles.mainContainer}>

      <View style={[styles.glowOrb, { top: -100, right: -100, backgroundColor: '#4ECDC4', opacity: 0.15 }]} />
      <View style={[styles.glowOrb, { bottom: -100, left: -50, backgroundColor: '#FF7F50', opacity: 0.1 }]} />

      <SafeAreaView edges={['top']} />

      <View style={styles.header}>
        <Text style={styles.title}>Vocabulary</Text>
        <TouchableOpacity>
          <BlurView intensity={30} tint="dark" style={styles.flashCardsBtn}>
            <Ionicons name="card-outline" size={20} color="#FFF" />
            <Text style={styles.flashCardsText}>Review</Text>
          </BlurView>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        <View style={styles.statsWrapper}>
          <LinearGradient
            colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.02)']}
            style={styles.statsCard}
          >
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: '#8A2BE2' }]}>260</Text>
              <Text style={styles.statLabel}>Words Learned</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: '#4ECDC4' }]}>108</Text>
              <Text style={styles.statLabel}>Mastered</Text>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.tabsContainer}>
          <BlurView intensity={20} tint="dark" style={styles.tabsBlur}>
            {['Learning', 'Mastered', 'Difficult'].map(tab => (
              <TouchableOpacity 
                key={tab} 
                onPress={() => setActiveTab(tab)}
                style={[
                  styles.tab, 
                  activeTab === tab && { backgroundColor: 'rgba(255,255,255,0.15)' }
                ]}
              >
                <Text style={[
                  styles.tabText, 
                  { color: activeTab === tab ? '#FFF' : 'rgba(255,255,255,0.5)' }
                ]}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </BlurView>
        </View>

        <Text style={styles.sectionTitle}>Word Collections</Text>

        <View style={styles.gridContainer}>
          {CATEGORIES.map(cat => {
            const progress = (cat.mastered / cat.count) * 100;
            return (
              <TouchableOpacity key={cat.id} style={styles.categoryCardWrapper}>
                <BlurView intensity={20} tint="dark" style={styles.categoryCard}>
                  <View style={styles.catHeader}>
                    <View style={[styles.catIcon, { backgroundColor: `${cat.color}20` }]}>
                      <Ionicons name="folder" size={24} color={cat.color} />
                    </View>
                  </View>
                  <Text style={styles.catName}>{cat.name}</Text>
                  <Text style={styles.catCount}>{cat.mastered} / {cat.count} Words</Text>
                  
                  <View style={styles.progressBg}>
                    <View style={[styles.progressFill, { backgroundColor: cat.color, width: `${progress}%` }]} />
                  </View>
                </BlurView>
              </TouchableOpacity>
            )
          })}
        </View>

        <TouchableOpacity style={styles.newDeckBtnWrapper}>
          <BlurView intensity={20} tint="dark" style={styles.newDeckBtn}>
            <Ionicons name="add-circle-outline" size={24} color="rgba(255,255,255,0.6)" />
            <Text style={styles.newDeckText}>Create Custom Deck</Text>
          </BlurView>
        </TouchableOpacity>

        <View style={{ height: 60 }} />
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
  flashCardsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    gap: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    overflow: 'hidden',
  },
  flashCardsText: {
    color: '#FFF',
    fontWeight: '800',
    fontSize: 14,
  },
  container: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  statsWrapper: {
    marginBottom: 24,
  },
  statsCard: {
    flexDirection: 'row',
    padding: 24,
    borderRadius: 32,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 36,
    fontWeight: '800',
    marginBottom: 4,
  },
  statLabel: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  tabsContainer: {
    marginBottom: 32,
  },
  tabsBlur: {
    flexDirection: 'row',
    borderRadius: 30,
    padding: 4,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 26,
  },
  tabText: {
    fontWeight: '700',
    fontSize: 14,
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 20,
    letterSpacing: 0.5,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryCardWrapper: {
    width: '48%',
    marginBottom: 16,
  },
  categoryCard: {
    padding: 20,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    overflow: 'hidden',
  },
  catHeader: {
    marginBottom: 16,
  },
  catIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catName: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 4,
  },
  catCount: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 16,
  },
  progressBg: {
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255,255,255,0.1)',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  newDeckBtnWrapper: {
    marginTop: 8,
  },
  newDeckBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    borderStyle: 'dashed',
    gap: 12,
    overflow: 'hidden',
  },
  newDeckText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
    fontWeight: '700',
  },
});
