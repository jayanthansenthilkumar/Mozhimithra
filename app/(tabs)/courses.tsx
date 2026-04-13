import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

// PLAYFUL NEOBRUTALISM (Image 1 - Middle Screen)
const BG = '#FFF1E5';
const BLACK = '#000000';
const ACCENT_YELLOW = '#FFDE00';
const ACCENT_GREEN = '#6BDB63';
const ACCENT_BLUE = '#63AEFF';
const ACCENT_RED = '#FF4F4F';

export default function CoursesScreen() {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView edges={['top']} />
      
      <View style={styles.content}>
         
         {/* FLOATING DECORATIONS (Mocking the Middle Screen vector assets) */}
         
         {/* Top Left Yellow Grid */}
         <View style={styles.gridDeco}>
           <View style={styles.gridLineH} />
           <View style={[styles.gridLineH, { top: 12 }]} />
           <View style={[styles.gridLineH, { top: 24 }]} />
           <View style={styles.gridLineV} />
           <View style={[styles.gridLineV, { left: 12 }]} />
           <View style={[styles.gridLineV, { left: 24 }]} />
         </View>

         {/* Top Right Green Square */}
         <View style={styles.greenSquare}>
            <View style={[styles.resizeHandle, { top: -4, left: -4 }]} />
            <View style={[styles.resizeHandle, { top: -4, right: -4 }]} />
            <View style={[styles.resizeHandle, { bottom: -4, left: -4 }]} />
            <View style={[styles.resizeHandle, { bottom: -4, right: -4 }]} />
         </View>

         {/* Blue Triangle Left */}
         <View style={styles.blueTriangleWrapper}>
           <View style={styles.blueTriangle} />
         </View>

         {/* Red Bar Right */}
         <View style={styles.redBarWrapper}>
            <View style={styles.redBarLine} />
            <View style={styles.redBarBody} />
         </View>

         {/* Pen Tool Line */}
         <View style={styles.penToolLeft}>
            <View style={styles.penNode} />
            <View style={styles.penLine} />
            <View style={styles.penNode} />
            {/* mock pen icon body */}
            <View style={styles.penIconBox} />
         </View>

         {/* CENTER FOCUS CONTAINER */}
         <View style={styles.centerFocus}>
           <View style={styles.avatarWrapper}>
             <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80' }} 
                style={styles.avatar} 
             />
           </View>

           <Text style={styles.heroText}>
             Priya <Text style={{ color: ACCENT_RED }}>just</Text> finished her Tamil module for today<Text style={{ color: ACCENT_RED }}>!</Text>
           </Text>

           <TouchableOpacity activeOpacity={0.9} style={styles.actionBtn} onPress={() => router.push('/course/1' as any)}>
             <Text style={styles.actionBtnText}>See what she did</Text>
           </TouchableOpacity>
         </View>

         {/* Bottom Left Teal Square & Triangle */}
         <View style={styles.bottomDecoGroup}>
            <View style={styles.tealRect} />
            <View style={styles.bottomTriangle} />
            <View style={styles.redSemicircle} />
         </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: BG, position: 'relative', overflow: 'hidden' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40 },
  
  // CENTER FOCUS
  centerFocus: { alignItems: 'center', zIndex: 10, marginTop: -40 },
  avatarWrapper: {
     width: 140, height: 140, borderRadius: 70, borderWidth: 4, borderColor: BLACK,
     justifyContent: 'center', alignItems: 'center', marginBottom: 32, backgroundColor: '#FFF'
  },
  avatar: { width: 120, height: 120, borderRadius: 60 },
  heroText: { fontSize: 32, fontWeight: '900', color: BLACK, textAlign: 'center', lineHeight: 44, marginBottom: 40 },
  
  actionBtn: {
     backgroundColor: ACCENT_YELLOW, paddingVertical: 18, paddingHorizontal: 32,
     borderRadius: 12, borderWidth: 3, borderColor: BLACK,
     shadowColor: BLACK, shadowOffset: { width: 4, height: 4 }, shadowOpacity: 1, shadowRadius: 0,
     elevation: 8
  },
  actionBtnText: { fontSize: 20, fontWeight: '900', color: BLACK },

  // DECORATIONS (Mocking the exact vectors from the shot)
  gridDeco: { position: 'absolute', top: 40, left: 40, width: 80, height: 80 },
  gridLineH: { position: 'absolute', width: '100%', height: 2, backgroundColor: BLACK },
  gridLineV: { position: 'absolute', height: '100%', width: 2, backgroundColor: BLACK },

  greenSquare: {
     position: 'absolute', top: 80, right: 60, width: 60, height: 60,
     backgroundColor: ACCENT_GREEN, borderWidth: 2, borderColor: BLACK
  },
  resizeHandle: { position: 'absolute', width: 8, height: 8, backgroundColor: '#FFF', borderWidth: 2, borderColor: BLACK },

  blueTriangleWrapper: { position: 'absolute', top: 160, right: 140, zIndex: 1, transform: [{ rotate: '45deg' }] },
  blueTriangle: {
    width: 0, height: 0,
    borderLeftWidth: 40, borderRightWidth: 40, borderBottomWidth: 60,
    borderLeftColor: 'transparent', borderRightColor: 'transparent',
    borderBottomColor: ACCENT_BLUE,
  },

  redBarWrapper: { position: 'absolute', top: 100, right: 20, width: 40, height: 120 },
  redBarLine: { position: 'absolute', left: 18, width: 2, height: 160, backgroundColor: BLACK, zIndex: 2 },
  redBarBody: { position: 'absolute', top: 20, left: 0, right: 0, height: 100, backgroundColor: ACCENT_RED },

  penToolLeft: { position: 'absolute', top: 200, left: 30, flexDirection: 'row', alignItems: 'center' },
  penNode: { width: 10, height: 10, borderWidth: 2, borderColor: BLACK, backgroundColor: '#FFF' },
  penLine: { width: 40, height: 2, backgroundColor: BLACK },
  penIconBox: { width: 30, height: 30, borderWidth: 2, borderColor: BLACK, marginLeft: 10, borderTopLeftRadius: 15, borderTopRightRadius: 15 },

  bottomDecoGroup: { position: 'absolute', bottom: Platform.OS === 'ios' ? 140 : 100, left: 40, width: '100%' },
  tealRect: { position: 'absolute', left: 0, top: 40, width: 140, height: 60, backgroundColor: '#63DEFF', borderWidth: 2, borderColor: BLACK },
  redSemicircle: { position: 'absolute', left: 160, top: 50, width: 80, height: 40, backgroundColor: ACCENT_RED, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, transform: [{ rotate: '-90deg' }] },
  bottomTriangle: {
    position: 'absolute', left: 140, top: -40,
    width: 0, height: 0,
    borderLeftWidth: 50, borderRightWidth: 50, borderBottomWidth: 80,
    borderLeftColor: 'transparent', borderRightColor: 'transparent',
    borderBottomColor: '#FFF', // making the inside white as in the pic
    // Note: border trick cannot have black outer stroke directly in React Native easily without SVG, so leaving it solid White to pop over teal.
  }
});
