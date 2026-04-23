import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors';

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>こころチケット</Text>
      <TouchableOpacity style={styles.notificationButton} activeOpacity={0.8}>
        <Ionicons name="notifications-outline" size={28} color={colors.primaryAccent} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 18,
    paddingHorizontal: 22,
    paddingBottom: 6,
    position: 'relative',
  },
  title: {
    fontSize: 24,
    color: colors.primary,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  notificationButton: {
    position: 'absolute',
    right: 22,
    top: 14,
    padding: 6,
  },
});
